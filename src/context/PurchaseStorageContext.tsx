import * as React from 'react';

import {
  PurchaseStorageContextType,
  IPurchase,
} from '../@types/PurchaseStorage.d';
const jsonFile = require('./data.json');

export const PurchaseStorageContext = React.createContext<PurchaseStorageContextType | null>(
  null,
);

interface Props {
  children: React.ReactNode;
}

const PurchaseStorageProvider: React.FC<Props> = ({ children }) => {
  const [purchases, setPurchases] = React.useState<IPurchase[]>(jsonFile);

  const updatePurchase = (purchases: IPurchase[]) => {
    setPurchases(purchases);
  };

  return (
    <PurchaseStorageContext.Provider value={{ purchases, updatePurchase }}>
      {children}
    </PurchaseStorageContext.Provider>
  );
};

export default PurchaseStorageProvider;
