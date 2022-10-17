import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsComparisons,
  selectProductsComparisons,
} from "../../store/ProductsComparison/ProductsComparisonSlice";
import ProductComparisonItem from "../ProductComparisonItem/ProductComparisonItem";

const useStyles = makeStyles({});

const PopularProductsComparison = ({ className }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const productsComparisons = useSelector(selectProductsComparisons);

  useEffect(() => {
    dispatch(getProductsComparisons());
  }, [dispatch]);

  return (
    <Grid container className={className} spacing={2}>
      {productsComparisons.map((productsComparison) => {
        return (
          <Grid item xs={6} md={4}>
            <Grid component={Card} container alignItems="center">
              <Grid item xs={10}>
                <ProductComparisonItem
                  title={productsComparison.belProduct.title}
                  image={productsComparison.belProduct.image}
                  price={productsComparison.belProduct.price}
                />
              </Grid>

              <Grid item xs={2}>
                {Math.floor(productsComparison.belProduct.usdPrice * 100) / 100}{" "}
                $
              </Grid>

              <Grid item xs={10}>
                <ProductComparisonItem
                  title={productsComparison.polProduct.title}
                  image={productsComparison.polProduct.picture}
                  price={productsComparison.polProduct.price}
                />
              </Grid>
              <Grid item xs={2}>
                {Math.floor(productsComparison.polProduct.usdPrice * 100) / 100}{" "}
                $
              </Grid>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default PopularProductsComparison;

/*
 
      */
