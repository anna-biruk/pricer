import Header from "../componets/header/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPolishProductById } from "../store/polishProducts/polishProductsSlice";
import ProductItem from "../componets/productItem/ProductItem";
import SimilarBelarussianProductsList from "../componets/SimilarBelarussianProductsList/SimilarBelarussianProductsList";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#B3CBFF",
    minHeight: "100vh",
  },
  content: {
    marginTop: 20,
  },
});

const PolishProductItemPage = () => {
  const { productId } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();

  const polishProductItem = useSelector(
    (state) => state.polishProducts.selectedItem
  );

  useEffect(() => {
    dispatch(getPolishProductById({ id: productId }));
  }, [dispatch, productId]);

  return (
    <div className={classes.container}>
      <Header />
      <Grid container className={classes.content} justifyContent="center">
        <Grid item xs={3}>
          <ProductItem
            title={polishProductItem?.title}
            price={polishProductItem?.price}
            picture={polishProductItem?.picture}
            weight={polishProductItem?.weight}
          />
        </Grid>
        <Grid item xs={7}>
          <SimilarBelarussianProductsList
            polishProductItem={polishProductItem}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default PolishProductItemPage;
