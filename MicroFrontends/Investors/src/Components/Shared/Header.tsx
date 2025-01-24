import React from "react";
import { useStyles } from "../Styles";
import { HeaderProps } from "../../Types";

const Header: React.FC<HeaderProps> = ({subHeading}) => {
  const classes = useStyles();

  return (
  <div className={classes.header}>
    <div className={classes.title}>Prequin</div>
    <div>{subHeading}</div>
  </div>);
};

export default Header;