let isUpdate = false;
let addressbookObj = {};

window.addEventListener('DOMContentLoaded', (event) => {
  const name = document.querySelector('#name');
  const nameError = document.querySelector('.name-error');
  name.addEventListener('input', function () {
    if (name.value.length == 0) {
      nameError.textContent = "";
      return;
    }
    try {
      (new Addressbook()).name = name.value;
      nameError.textContent = "";
    } catch (e) {
      nameError.textContent = e;
    }
  });

  const address = document.querySelector('#address');
  const addressError = document.querySelector('.address-error');
  address.addEventListener('input', function () {
    if (address.value.length == 0) {
      addressError.textContent = "";
      return;
    }
    try {
      (new Addressbook()).address = address.value;
      addressError.textContent = "";
    } catch (e) {
      addressError.textContent = e;
    }
  });

  const zip = document.querySelector('#zip');
  const zipError = document.querySelector('.zip-error');
  zip.addEventListener('input', function () {
    if (zip.value.length == 0) {
      zipError.textContent = "";
      return;
    }
    try {
      (new Addressbook()).zipcode = zip.value;
      zipError.textContent = "";
    } catch (e) {
      zipError.textContent = e;
    }
  });

  const phone = document.querySelector('#phone');
  const phoneError = document.querySelector('.phone-error');
  phone.addEventListener('input', function () {
    if (phone.value.length == 0) {
      phoneError.textContent = "";
      return;
    }
    try {
      (new Addressbook()).phone = phone.value;
      phoneError.textContent = "";
    } catch (e) {
      phoneError.textContent = e;
    }
  });

  checkForUpdate();

});

const save = (event) => {
  try {
    setAddressBookObj();
    createAndUpdateStorage();
    window.location.replace(site_properties.home_page);
  } catch (e) {
    return;
  }
}

const setAddressBookObj = () => {
  addressbookObj._name = document.querySelector('#name').value;
  addressbookObj._address = document.querySelector('#address').value;
  addressbookObj._city = document.querySelector('#city').value;
  addressbookObj._state = document.querySelector('#state').value;
  addressbookObj._zipcode = document.querySelector('#zip').value;
  addressbookObj._phone = document.querySelector('#phone').value;
}

const createAndUpdateStorage = () => {
  let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));

  if (addressBookList) {
    let addressbookData = addressBookList.find(person => person._name == addressbookObj._name);
    if (!addressbookData) {
      addressBookList.push(createAddressBookData());
    } else {
      const index = addressBookList.map(person => person._name).indexOf(addressbookData._name);
      addressBookList.splice(index, 1, createAddressBookData());
    }

  } else {
    addressBookList = [createAddressBookData()];
  }
  alert(addressBookList.toString());
  localStorage.setItem("AddressBookList", JSON.stringify(addressBookList));
}

createAddressBookData = () => {
  let addressbookData = new Addressbook();
  addressbookData.name = document.querySelector('#name').value;
  addressbookData.address = document.querySelector('#address').value;
  addressbookData.city = document.querySelector('#city').value;
  addressbookData.state = document.querySelector('#state').value;
  addressbookData.zipcode = document.querySelector('#zip').value;
  addressbookData.phone = document.querySelector('#phone').value;
  alert('heloooooooooooo' + addressbookData.toString());
  return addressbookData;
}

const resetForm = () => {
  document.querySelector('#name').value = '';
  document.querySelector('.name-error').textContent = '';
  document.querySelector('#address').value = '';
  document.querySelector('.address-error').textContent = '';
  document.querySelector('#city').value = '';
  document.querySelector('#state').value = '';
  document.querySelector('#zip').value = '';
  document.querySelector('.zip-error').textContent = '';
  document.querySelector('#phone').value = '';
  document.querySelector('.phone-error').textContent = '';
}

const checkForUpdate = () => {
  const addressbookJson = localStorage.getItem('editContact');
  isUpdate = addressbookJson ? true : false;
  if (!isUpdate) return;
  addressbookObj = JSON.parse(addressbookJson);
  setForm();
}

const setForm = () => {
  document.querySelector('#name').value = addressbookObj._name;
  document.querySelector('#address').value = addressbookObj._address;
  document.querySelector('#city').value = addressbookObj._city;
  document.querySelector('#state').value = addressbookObj._state;
  document.querySelector('#zip').value = addressbookObj._zipcode;
  document.querySelector('#phone').value = addressbookObj._phone;
}
