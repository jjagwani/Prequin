import React from "react";
import { Typography } from "@mui/material";
import { useStyles } from "./styles";
import { LoaderProps } from "../../Types";

const Loader: React.FC<LoaderProps> = ({text}) => {

    const classes = useStyles();

    return(
        <div className={classes.loader}>
          <Typography variant="h5"> {text} </Typography>
        </div>
    );
};

export default Loader;
