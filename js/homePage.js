let addressbookList;
window.addEventListener('DOMContentLoaded', (event) => {
  addressbookList = getAddressbookDataFromStorage();
  document.querySelector('.person-count').textContent = addressbookList.length;
  createInnerHtml();
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
        <img class="buttons" id="1" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
        <img class="buttons" id="1" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
        </td>
    </tr>
      `;
  }
  document.querySelector('#table-display').innerHTML = innerHtml;
}