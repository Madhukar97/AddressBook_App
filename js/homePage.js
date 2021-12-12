let addressbookList;
window.addEventListener('DOMContentLoaded', (event) => {
  addressbookList = getAddressbookDataFromStorage();
  document.querySelector('.person-count').textContent = addressbookList.length;
  createInnerHtml();
  localStorage.removeItem('editContact');
});

const getAddressbookDataFromStorage = () => {
  return localStorage.getItem('AddressBookList') ? JSON.parse(localStorage.getItem('AddressBookList')) : [];
}

createInnerHtml = () => {
  if (addressbookList.length == 0) return;
  const headerHtml = "<th>FullName</th><th class='address-block'>Address</th><th>City" +
    "</th><th>State</th><th>Zip</th><th>Phone</th><th>Actions</th>";

  let innerHtml = `${headerHtml}`;
  for (const addressbookData of addressbookList) {
    innerHtml = `${innerHtml}
    <tr  class="table-data">
        <td>${addressbookData._name}</td>
        <td class="address-block">${addressbookData._address}</td>
        <td>${addressbookData._city}</td>
        <td>${addressbookData._state}</td>
        <td>${addressbookData._zipcode}</td>
        <td>${addressbookData._phone}</td>
        <td>
        <img class="buttons" id="${addressbookData._name}" onclick='remove(this)' alt="delete" src="../assets/icons/delete-black-18dp.svg">
        <img class="buttons" id="${addressbookData._name}" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
        </td>
    </tr>
      `;
  }
  document.querySelector('#table-display').innerHTML = innerHtml;
}

remove = (node) => {
  let addressbookData = addressbookList.find(person => person._name == node.id);
  if (!addressbookData) return;
  const index = addressbookList
    .map(personName => personName._name)
    .indexOf(addressbookData._name);
  addressbookList.splice(index, 1);
  localStorage.setItem("AddressBookList", JSON.stringify(addressbookList));
  document.querySelector(".person-count").textContent = addressbookList.length;
  createInnerHtml();
}

const update = (node) => {
  const addressbookData = addressbookList.find(person => person._name == node.id)
  if (!addressbookData) return;
  localStorage.setItem('editContact', JSON.stringify(addressbookData))
  window.location.replace(site_properties.add_person_page);
}
