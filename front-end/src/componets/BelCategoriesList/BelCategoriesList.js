import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getAllBelCategories,
  selectBelCategories,
  setBelCategory,
} from "../../store/belarussianProducts/BelarussianProductsSlice";
import { Typography } from "@mui/material";

const BelCategoriesList = () => {
  const dispatch = useDispatch();

  const belCategories = useSelector(selectBelCategories);

  const selectedCategory = useSelector(
    (state) => state.belarussianProducts.selectedCategory
  );

  const handleClickCategory = (categoryItem) => () => {
    dispatch(setBelCategory(categoryItem));
  };

  useEffect(() => {
    dispatch(getAllBelCategories());
  }, [dispatch]);

  return (
    <>
      <Paper>
        <MenuList>
          {belCategories.map((categoryItem) => {
            return (
              <MenuItem
                onClick={handleClickCategory(categoryItem)}
                selected={selectedCategory === categoryItem}
              >
                <Typography noWrap>{categoryItem}</Typography>
              </MenuItem>
            );
          })}
        </MenuList>
      </Paper>
    </>
  );
};

export default BelCategoriesList;
