const showTable = (allData) => {

  // ========= Table =========

  const Table = document.getElementById('table');
  const currencySelect1 = document.getElementById('currency-select1');
  const currencySelect2 = document.getElementById('currency-select2');

  allData.forEach(data => {   // add all rows in the table

    Table.innerHTML += `<tr>
                          <td>
                            <p>${data.name}</p>
                          </td>

                          <td class="value">
                            <p>${data.value}</p>
                          </td>
                        </tr>`;

    // add all options
    currencySelect1.innerHTML += `<option>${data.name}</option>`
    currencySelect2.innerHTML += `<option>${data.name}</option>`

  });

  // ===== loading block =====
  document.getElementById('loading').style.display = 'none';

}

// ========== calculator ==========

window.onload = () => {

  document.getElementById('calc-form').addEventListener("submit", (e) => {
    e.preventDefault()
  
    // gets the quantity and names

    const quantity = document.getElementById('quantity').value;
    const currencyName1 = document.getElementById('currency-select1').value;
    const currencyName2 = document.getElementById('currency-select2').value;

    // gets values of the selected currencies

    const value1 = formatedData.find(item => item.name === currencyName1).value
    const value2 = formatedData.find(item => item.name === currencyName2).value

    // counting

    const answer = quantity * value1 / value2;
    document.getElementById('answer').innerHTML = `Ответ: ${answer}`;
    
  });
};
