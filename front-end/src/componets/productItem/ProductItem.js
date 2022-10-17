import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  image: {
    width: "190px !important",
    margin: "0 auto",
  },
  card: {
    maxWidth: 345,
    position: "sticky",
    top: 20,
  },
});
const ProductItem = ({ title, price, picture, weight }) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card}>
        <CardMedia
          className={classes.image}
          component="img"
          height="190"
          image={picture}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {weight}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            {price}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductItem;
