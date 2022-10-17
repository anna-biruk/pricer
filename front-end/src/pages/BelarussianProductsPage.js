import Header from "../componets/header/Header";
import BelarussianProductsList from "../componets/belarussianProductsList/BelarussianProductsList";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import BelCategoriesList from "../componets/BelCategoriesList/BelCategoriesList";

const useStyles = makeStyles({
  main: {
    backgroundColor: "#B3CBFF",
    paddingTop: 20,
  },
});

const BelarussianProductsPage = () => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Grid container justifyContent="center" className={classes.main}>
        <Grid xs={2} item>
          <BelCategoriesList  />
        </Grid>
        <Grid xs={8} item>
          <BelarussianProductsList />
        </Grid>
      </Grid>
    </>
  );
};

export default BelarussianProductsPage;
