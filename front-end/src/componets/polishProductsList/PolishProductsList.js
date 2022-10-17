import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import {
  getPolishProducts,
  searchProducts,
} from "../../store/polishProducts/polishProductsSlice";
import ProductListItem from "../productListItem/ProductListItem";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import { PRODUCT_LIST_LIMIT } from "../../constants/products";
import SearchItem from "../searchItem/SearchItem";
import debounce from "lodash/debounce";
import CircularProgress from "@mui/material/CircularProgress";
import { selectIsPolProductsLoading } from "../../store/polishProducts/polishProductsSlice";

const useStyles = makeStyles({
  container: {
    padding: "0 20px",
    maxWidth: 1200,
    margin: "0 auto",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    padding: "20px 0",
  },
  search: {
    marginBottom: 16,
  },
});

const PolishProductsList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const loader = useRef(null);
  const [search, setSearch] = useState();

  const polishProducts = useSelector((state) => state.polishProducts.items);

  const selectedCategory = useSelector(
    (state) => state.polishProducts.selectedCategory
  );
  const isLoading = useSelector(selectIsPolProductsLoading);

  const handleSearchString = debounce((e) => {
    setSearch(e.target.value);
    dispatch(searchProducts({ search: e.target.value }));
  }, 500);

  const { page } = useInfiniteScroll({ loaderRef: loader }, [selectedCategory]);

  useEffect(
    () => {
      if (!search) {
        dispatch(
          getPolishProducts({
            limit: PRODUCT_LIST_LIMIT,
            offset: (page - 1) * PRODUCT_LIST_LIMIT,
            category: selectedCategory,
          })
        );
      }
    },
    [dispatch, page, search,selectedCategory]
  );

  return (
    <div className={classes.container}>
      <SearchItem className={classes.search} onChange={handleSearchString} />
      <Grid container spacing={2}>
        {polishProducts.map((productItem) => {
          return (
            <Grid item xl={2} lg={3} md={4} xs={6}>
              <ProductListItem
                id={productItem._id}
                title={productItem.title}
                price={productItem.price}
                weight={productItem.weight}
                picture={productItem.picture}
                country={productItem.country}
              />
            </Grid>
          );
        })}
        {!isLoading && (
          <Grid item xl={2} lg={3} md={4} xs={6}>
            <CircularProgress size={40} color="primary" />
          </Grid>
        )}
        {!search && <div ref={loader} />}
      </Grid>
    </div>
  );
};
export default PolishProductsList;
