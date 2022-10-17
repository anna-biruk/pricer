import Header from "../componets/header/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBelarussianProductById } from "../store/belarussianProducts/BelarussianProductsSlice";
import { makeStyles } from "@mui/styles";
import ProductItem from "../componets/productItem/ProductItem";
import { Grid } from "@mui/material";
import SimilarPolishProductsList from "../componets/SimilarPolishProductsList/SimilarPolishProductsList";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#B3CBFF",
    minHeight: "100vh",
  },
  content: {
    marginTop: 20,
  },
});

const BelarussianProductItemPage = () => {
  const { productId } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();

  const belarussianProductItem = useSelector(
    (state) => state.belarussianProducts.selectedItem
  );

  useEffect(() => {
    dispatch(getBelarussianProductById({ id: productId }));
  }, [dispatch, productId]);

  return (
    <div className={classes.container}>
      <Header />
      <Grid container className={classes.content} justifyContent="center">
        <Grid item xs={3}>
          <ProductItem
            title={belarussianProductItem?.title}
            price={belarussianProductItem?.price}
            picture={belarussianProductItem?.image}
          />
        </Grid>
        <Grid item xs={7}>
          <SimilarPolishProductsList
            belarussianProductItem={belarussianProductItem}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default BelarussianProductItemPage;
