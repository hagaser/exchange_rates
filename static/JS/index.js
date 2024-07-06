function showTable() {
// ===== loading block =====

document.getElementById('loading').style.display = 'none';

// ========= Table =========

const Table = document.getElementById('Table');
const OptionName1 = document.getElementById('currency_name1');
const OptionName2 = document.getElementById('currency_name2');

for (let i = 0; id > i; i++) {   // add all rows in the table
  Table.innerHTML += `<tr>
                        <td>
                          <h4>${currencies[i].name}</h4>
                        </td>

                        <td class="value">
                          <h4>${currencies[i].value}</h4>
                        </td>
                      </tr>`;

  // add all options

  OptionName1.innerHTML += `<option>${currencies[i].name}</option>`
  OptionName2.innerHTML += `<option>${currencies[i].name}</option>`
};
}

// ========== calculator ==========

window.onload = function() {

  document.getElementById('button').addEventListener("click", function() {
  
    // gets the quantity and names

    const quantity = document.getElementById('quantity').value;
    const currency_name1 = document.getElementById('currency_name1').value;
    const currency_name2 = document.getElementById('currency_name2').value;

    // gets values of the selected currencies

    for (let i = 0; id > i; i++) {

      if (currencies[i].name == currency_name1) {
        value1 = currencies[i].value;
      }

      if (currencies[i].name == currency_name2) {
        value2 = currencies[i].value;
      };
    };

    // counting

    let answer = quantity * value1 / value2;
    document.getElementById('answer').innerHTML = `Ответ: ${answer}`;
    
  });
};
