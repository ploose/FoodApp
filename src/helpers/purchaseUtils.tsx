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

 export function getProductsArray(products: { [x: string]: any }) {
    let productsArray = [];
    for (const element in products) {
      products[element].id = element;
      productsArray.push(products[element]);
    }
    return productsArray;
  }