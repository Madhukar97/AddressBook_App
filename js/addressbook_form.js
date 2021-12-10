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

});

const save = () => {
    try {
        let addressbookData = createAddressbook();
        createAndUpdateStorage(addressbookData);
    } catch (e) {
        return;
    }
}

const createAddressbook = () => {
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

const createAndUpdateStorage = (addressBookData) => {
    let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));

    if (addressBookList != undefined) {
        addressBookList.push(addressBookData);
    } else {
        addressBookList = [addressBookData];
    }
    alert(addressBookList.toString());
    localStorage.setItem("AddressBookList", JSON.stringify(addressBookList));
}

const reserForm = () => {
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

