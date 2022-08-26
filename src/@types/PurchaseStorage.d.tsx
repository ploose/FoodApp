export interface IPurchase {
  id:       string;
  date:     string;
  time:     string;
  store:    string;
  products: { [key: string]: IProduct };
  total:    string;
}

export interface IProduct {
    price:    string;
    quantity: string;
    id: string;
    imageUrl: string;
}

export type PurchaseStorageContextType = {
  purchases: IPurchase[];
  updatePurchase: (purchases: IPurchase[]) => void;
}