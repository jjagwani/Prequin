import { makeStyles } from "@mui/styles";

export const useStyles: any = makeStyles((theme) => ({
  tableContainer: {
    maxHeight: 420,
    overflow: "auto",
  },
  cursorPointer: {
    cursor: "pointer",
  },
  paddingTop: {
    paddingTop: "10px",
  },
  commonPadding: {
    padding: "20px",
  },
  header: {
    padding: "5px",
    backgroundColor: "rgb(50, 133, 227)",
    color: "white",
    fontSize: "30px",
    fontWeight: "bold",
    fontFamily: "Sans-serif"
},
title: {
    color: "rgb(98, 1, 98)",
    fontSize: "20px",
    fontWeight: "bold"
}
}));