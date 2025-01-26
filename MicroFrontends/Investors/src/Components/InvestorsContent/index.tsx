import React from "react";
import Header from "../../Containers/Header";
import InvestorsTable from "../InvestorsTable";
import { useStyles } from "./styles";

const InvestorsContent: React.FC = () => {
  const classes = useStyles();

  return (
  <div className={classes.contentPadding}>
    <Header subHeading="Investors" />
    <InvestorsTable />
  </div>);
};

export default InvestorsContent;