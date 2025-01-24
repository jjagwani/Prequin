import { makeStyles } from "@mui/styles";

export const useStyles: any = makeStyles((theme) => ({
    commonPadding: {
        padding: "20px"
    },
    box: {
        display: "flex",
        gap: "10px",
        paddingTop: "10px"
      },
      chipBox: {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }
}));