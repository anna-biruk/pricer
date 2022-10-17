import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import truncate from "lodash/truncate";

const ProductComparisonItem = ({ title, price, image }) => {
  return (
    <>
      <Grid item xs="auto">
        <Card elevation={0} sx={{ display: "flex", height: 106 }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="subtitle1">
                {truncate(title, { length: 35 })}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {price}
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ height: 106, width: "auto", marginLeft: "auto" }}
            image={image}
            alt={title}
          />
        </Card>
      </Grid>
    </>
  );
};

export default ProductComparisonItem;
