import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: "0 0 4px 4px",
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "bold",
  },
  logo: {
    marginLeft: 10,
    color: "#74A1FF",
    textDecoration: "none",
  },
  list: {
    display: "flex",
    flexDirection: "row",
    listStyleType: "none",
    margin: 0,
  },
  link: {
    textDecoration: "none",
    color: "#598cf7",
    "&:hover": {
      color: "white",
      backgroundColor: "#97B8FF",
      cursor: "pointer",
      borderRadius: "0 0 4px 4px",
    },
    height: "100%",
    padding: "16px 10px",
  },
  selectedLink: {
    color: "white",
    backgroundColor: "#97B8FF",
    cursor: "pointer",
    borderRadius: "0 0 4px 4px",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <NavLink className={classes.logo} to="/home">
        Pricer
      </NavLink>
      <nav>
        <div className={classes.list}>
          <NavLink
            activeClassName={classes.selectedLink}
            className={classes.link}
            to="/home"
          >
            Главная
          </NavLink>
          <NavLink
            activeClassName={classes.selectedLink}
            className={classes.link}
            to="/polish/products"
          >
            Польские продукты
          </NavLink>
          <NavLink
            activeClassName={classes.selectedLink}
            className={classes.link}
            to="/belarus/products"
          >
            Белорусские продукты
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
