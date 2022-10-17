import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Typography } from "@mui/material";
import {
  selectPolCategories,
  getAllPolCategories,
  setPolCategory,
} from "../../store/polishProducts/polishProductsSlice";

const PolCategoriesList = () => {
  const dispatch = useDispatch();
  const polCategories = useSelector(selectPolCategories);

  const selectedCategory = useSelector(
    (state) => state.polishProducts.selectedCategory
  );

  const handleClickCategory = (categoryItem) => () => {
    dispatch(setPolCategory(categoryItem));
  };

  useEffect(() => {
    dispatch(getAllPolCategories());
  }, [dispatch]);

  return (
    <>
      <Paper>
        <MenuList>
          {polCategories.map((categoryItem) => {
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
export default PolCategoriesList;
