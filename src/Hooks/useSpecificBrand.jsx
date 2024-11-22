import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { TransferLists } from "../Contexts/TransferLists";

const useSpecificBrand = ({ brandId }) => {
  const { coupons } = useContext(TransferLists);
  const [specificBrand, setSpecificBrand,] = useState(null);
  useEffect(() => {
    setSpecificBrand(coupons.find((data) => data._id === brandId));
  }, [brandId,coupons]);

  return specificBrand;
};

useSpecificBrand.propTypes = {
  brandId: PropTypes.string.isRequired,
};

export default useSpecificBrand;
