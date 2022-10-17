import PolishProductsList from "../componets/polishProductsList/PolishProductsList";
import Header from "../componets/header/Header";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import PolCategoriesList from "../componets/PolCategoriesList/PolCategoriesList";

const useStyles = makeStyles({
  main: {
    backgroundColor: "#B3CBFF",
    paddingTop: 20,
  },
});

const PolishProductsPage = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Grid container justifyContent="center" className={classes.main}>
        <Grid item xs={2}>
          <PolCategoriesList />
        </Grid>
        <Grid item xs={8}>
          <PolishProductsList />
        </Grid>
      </Grid>
    </>
  );
};

export default PolishProductsPage;
