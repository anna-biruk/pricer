import Header from "../componets/header/Header";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import PopularProductsComparison from "../componets/PopularProductsComparison/PopularProductsComparison";

const useStyles = makeStyles({
  main: {
    backgroundColor: "#B3CBFF",
    height: "98vh",
  },
  popularItems: {
    marginTop: '10px !important',
  }
});

const HomePage = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>

      <Grid item>
        <Grid container className={classes.main} justifyContent="center">
          <Grid item xs={10}>
            <PopularProductsComparison className={classes.popularItems} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomePage;
