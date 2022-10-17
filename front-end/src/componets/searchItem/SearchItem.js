import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/material/Input";
import { makeStyles } from "@mui/styles";
import clsx from 'clsx';

const useStyles = makeStyles({
  search: {
    borderRadius: 16,
    backgroundColor: "#d8e2f9",
    padding:5,
    width:300,
  },
});

const SearchItem = ({className,onChange}) => {
  const classes = useStyles();
  return (
    <Input
      disableUnderline
      placeholder="Search"
      className={clsx(classes.search, className)}
      onChange={onChange}
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
    />
  );
};

export default SearchItem;
