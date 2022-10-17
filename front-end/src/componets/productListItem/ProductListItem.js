import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  image: {
    width: "140px !important",
    height: 140,
    margin: "0 auto !important",
  },

  card: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  button: {
    marginTop: "auto",
  },
});

const ProductListItem = ({ title, price, weight, picture, id, country }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    let path = null;
    if (country === "BY") {
      path = `/belarus/products/${id}`;
    } else if (country === "PL") {
      path = `/poland/products/${id}`;
    }
    history.push(path);
  };

  return (
    <>
      <Card className={classes.card}>
        <CardMedia
          classes={{
            img: classes.image,
          }}
          component="img"
          image={picture}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle2" component="div">
            {title}
          </Typography>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography variant="body2" color="text.secondary">
                {weight}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="text.secondary">
                {price}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions className={classes.button}>
          <Button onClick={handleClick} size="small">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
export default ProductListItem;
