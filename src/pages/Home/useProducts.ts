import { useAsync } from "react-use";
import { useData } from "../../providers/Data/Context";

export const useProducts = () => {
  const { getProducts } = useData();
  const { value } = useAsync(() => getProducts());
  return {
    data: value,
  };
};
