import React, { useEffect, useState } from "react";
import Header from "Investors/Header";
import CommitmentsTable from "./CommitmentsTable";
import Filters from "./Filters";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getInvestorById } from "Investors/API";
import { useStyles } from "./Styles";
import { InvestorState, Investor } from "Investors/Types";
import { Typography } from "@mui/material";


const CommitmentsContent: React.FC = () => {
  const classes = useStyles();

  const [subHeading, setSubheading] = useState<string>("");
  const [totalCommitment, setTotalCommitment] = useState<number>(0);

  const investor: InvestorState = useSelector((state: any) => state.investor)

  const { id } = useParams();

  useEffect(() => {
    if (investor.investorName === "" || investor.totalCommitment === 0) {
      const fetchData: () => void = async () => {
        const investorData: Investor[] = await getInvestorById(id);
        if (investorData && investorData.length !== 0) {
          setSubheading(`Commitments - ${investorData[0].name}`);
          setTotalCommitment(investorData[0].totalCommitment);
        }
      }

      id && fetchData()
    }
    else {
      setSubheading(`Commitments - ${investor.investorName}`);
      setTotalCommitment(investor.totalCommitment);
    }

  }, [investor, id]);

  return (
    <div className={classes.commonPadding}>
      {subHeading && subHeading !== "" && <Header subHeading={subHeading} />}
      {(totalCommitment && totalCommitment !== 0) ? <Filters totalCommitment={totalCommitment} /> : 
      <Typography variant="h4">No data found</Typography>}
      <CommitmentsTable />
    </div>
  );
};

export default CommitmentsContent;