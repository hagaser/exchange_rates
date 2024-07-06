let currencies: [number, currency] = {};
let id: number = 0;

class currency{
  id: number;
  name: string;
  value: number;

  constructor (_id, _name, _value){
    this.id = _id;
    this.name = _name;
    this.value = _value;
  }

}

async function GetData() { //get data from one id

  try {
    const response = await fetch(`https://api.nbrb.by/exrates/rates?periodicity=0`);
    return response.json();

  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

async function GetAllData() { //get all data from all id

  const AllData = await GetData();
  AllData.forEach(Data => {

    if (Data) {
      const Rate: string = (Data.Cur_OfficialRate / Data.Cur_Scale).toFixed(10);
      currencies[`${id}`] = new currency(id, Data.Cur_Name, +Rate * 1); // writes the entire data
    }
    id++;

  });
  showTable()
  
}
GetAllData();