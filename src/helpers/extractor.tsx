import { IPurchase } from '../@types/PurchaseStorage.d';

export function extractDate(purchases: IPurchase[]) {
  let dateList:string[] = [];
  for (const purchase in purchases) {
    if (Object.prototype.hasOwnProperty.call(purchases, purchase)) {
      const element = purchases[purchase];
      dateList.push(element.date)
    }
  }
  return dateList;
}

export function extractTotal(purchases: IPurchase[]) {
  let dateList:string[] = [];
  for (const purchase in purchases) {
    if (Object.prototype.hasOwnProperty.call(purchases, purchase)) {
      const element = purchases[purchase];
      dateList.push(element.total)
    }
  }
  return dateList;
}