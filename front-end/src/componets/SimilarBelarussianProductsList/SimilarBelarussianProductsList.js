import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import ProductComparisonItem from "../ProductComparisonItem/ProductComparisonItem";
import { getBelarussianProducts } from "../../store/belarussianProducts/BelarussianProductsSlice";

const SimilarBelarussianProductsList = ({ polishProductItem }) => {
  const dispatch = useDispatch();

  const belarussianProducts = useSelector(
    (state) => state.belarussianProducts.items
  );

  useEffect(() => {
    if (polishProductItem?.type) {
      dispatch(
        getBelarussianProducts({
          type: polishProductItem?.type,
          offset: 0,
          limit: 200,
        })
      );
    }
  }, [dispatch, polishProductItem?.type]);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {belarussianProducts.map((productItem) => {
          return (
            <Grid item xs={6}>
              <ProductComparisonItem
                title={productItem.title}
                image={productItem.image}
                price={productItem.price}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
export default SimilarBelarussianProductsList;
