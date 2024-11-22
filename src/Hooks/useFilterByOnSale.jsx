import { useState, useEffect, useContext, } from "react";
import { TransferLists } from "../Contexts/TransferLists";

const useFilterByOnSale = () => {
  const [onSaleBrands, setOnSaleBrands] = useState([]);
  const {coupons}=useContext(TransferLists)

  useEffect(() => {
    setOnSaleBrands(coupons.filter((data) => data.isSaleOn === true));
  }, [coupons]);

  return onSaleBrands;
};

export default useFilterByOnSale;
