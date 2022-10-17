import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import ProductComparisonItem from "../ProductComparisonItem/ProductComparisonItem";
import { getPolishProducts } from "../../store/polishProducts/polishProductsSlice";

const SimilarPolishProductsList = ({ belarussianProductItem }) => {
  const dispatch = useDispatch();

  const polishProducts = useSelector((state) => state.polishProducts.items);

  useEffect(() => {
    if (belarussianProductItem?.type) {
      dispatch(
        getPolishProducts({
          type: belarussianProductItem?.type,
          offset: 0,
          limit: 200,
        })
      );
    }
  }, [dispatch, belarussianProductItem?.type]);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {polishProducts.map((productItem) => {
          return (
            <Grid item xs={6}>
              <ProductComparisonItem
                title={productItem.title}
                price={productItem.price}
                image={productItem.picture}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default SimilarPolishProductsList;
