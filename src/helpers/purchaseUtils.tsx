import moment from "moment";

function custom_sort(b: any, a: any) {
    return (
      moment(a.date, 'DD/MM/YYYY')
        .toDate()
        .getTime() -
      moment(b.date, 'DD/MM/YYYY')
        .toDate()
        .getTime()
    );
  }

export function getPurchases() {
 
    const jsonFile = require('./data.json');
    let myArray = [];
    for (const element in jsonFile) {
      jsonFile[element].id = element;
      myArray.push(jsonFile[element]);
    }
    myArray.sort(custom_sort);
  
    console.log(myArray);
    return myArray;
  }