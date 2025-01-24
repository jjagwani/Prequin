import React from "react";
import Header from "./Shared/Header";
import InvestorsTable from "./InvestorsTable";
import { useStyles } from "./Styles";

const InvestorsContent: React.FC = () => {
  const classes = useStyles();

  return (
  <div className={classes.commonPadding}>
    <Header subHeading="Investors" />
    <InvestorsTable />
  </div>);
};

export default InvestorsContent;