window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
  });
  
  createInnerHtml = () => {
    const headerHtml = "<th>FullName</th><th class='address-block'>Address</th><th>City"+
    "</th><th>State</th><th>Zip</th><th>Phone</th><th>Actions</th>";
  
    const innerHtml = `${headerHtml}
    <tr  class="table-data">
    <td>Madhukar Tatiraju</td>
    <td class="address-block">123d asdas daqwd asdad aws</td>
    <td> Vizag</td>
    <td>Andhra Pradesh</td>
    <td>530013</td>
    <td>9346874021</td>
    <td>
      <img class="buttons" id="1" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
      <img class="buttons" id="1" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
    </td>
    </tr>
    <tr  class="table-data">
    <td>Saran Yellanki</td>
    <td class="address-block">FNo 103 Vinayaka Plaza Kurmannapalem</td>
    <td>Visakhapatnam</td>
    <td>Andhra Pradesh</td>
    <td>9618058101</td>
    <td>530046</td>
    <td>
      <img class="buttons" id="1" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
      <img class="buttons" id="1" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
    </td>
    </tr>
      `;
    document.querySelector('#table-display').innerHTML = innerHtml;
  }