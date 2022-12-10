import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  theater: {
    display: (props) => (props.isMobileTheater ? "block" : "flex"),
    maxWidth: 1024,
    maxHeight: 800,
    borderTop: "1rem solid orange",
    borderRadius: 0,
    backgroundColor:"white",
  },
  taps: {
    // dường line phần chia khi horizontal
    borderBottom: "none",
    minWidth: 92,
  },
  cumRap: {
    minWidth: "calc(100% - 92px)",
  },
  tabs__indicator: {
    backgroundColor: "white",
  },
  tap: (props) => ({
    padding: 20,
    minWidth: 92,
    margin: "auto",
    ...props.underLine,
  }),
  textColorInherit: {
    opacity: 0.3,
    "&:hover": {
      transition: "all .2s",
      opacity: 1,
    },
  },
});
export default useStyles;
