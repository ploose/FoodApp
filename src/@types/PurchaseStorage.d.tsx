export interface IPurchase {
  id:       string;
  date:     string;
  time:     string;
  store:    string;
  products: { [key: string]: IProduct };
  total:    number;
}

export interface IProduct {
    price:    string;
    quantity: string;
}

export type PurchaseStorageContextType = {
  purchases: IPurchase[];
  updatePurchase: (purchases: IPurchase[]) => void;
}