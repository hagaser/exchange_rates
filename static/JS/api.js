const formatedData = []

async function getData() { //get data

  try { // try get data
    const response = await fetch(`https://api.nbrb.by/exrates/rates?periodicity=0`);
    return response.json();

  } catch (error) { // if error then give log
    console.error('Error fetching data:', error);
    return null;
    
  }
}

const formateData = (allData) => { // formate data
  
  // if error or empty then no data
  if (!allData) {
    console.log("no data")
    return
  }

  allData.forEach(data => {

    // formatting value ((234 / 100).toFixed(10) = 2.34000...) (+2.34000... = 2.34)
    const value = +(data.Cur_OfficialRate / data.Cur_Scale).toFixed(10);
    // save data in var
    formatedData.push({"name": data.Cur_Name, "value": value});

  });

  // fill the table
  showTable(formatedData)
  
}

// first get data then formate it
getData().then(formateData);