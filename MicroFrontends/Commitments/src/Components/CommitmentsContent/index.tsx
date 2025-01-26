import React, { useEffect, useState } from "react";
import Header from "Investors/Header";
import CommitmentsTable from "../CommitmentsTable";
import Filters from "../Filters";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getInvestors } from "Investors/API";
import { useStyles } from "./styles";
import { InvestorState, Investor } from "Investors/Types";
import Loader from "Investors/Loader";


const CommitmentsContent: React.FC = () => {
  const classes = useStyles();

  const [subHeading, setSubheading] = useState<string>("");
  const [totalCommitment, setTotalCommitment] = useState<number>(0);
  const [error, setError] = useState<string>("");

  const investor: InvestorState = useSelector((state: any) => state.investor)

  const { id } = useParams();

  useEffect(() => {
    if (investor.investorName === "" || investor.totalCommitment === 0) {
      const fetchData: () => void = async () => {
        let investorData: Investor[] | undefined = undefined;
        try{
          investorData = await getInvestors(id);
          if (investorData && investorData.length !== 0) {
            setSubheading(`Commitments - ${investorData[0].name}`);
            setTotalCommitment(investorData[0].totalCommitment);
          }
        }catch(err){
          setError(String(err));
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
    <>
      {subHeading && totalCommitment ?
        <div className={classes.contentPadding}>
          <Header subHeading={subHeading} />
          <Filters totalCommitment={totalCommitment} />
          <CommitmentsTable />
        </div> : <Loader text = {error === "" ? "Loding commitments data..." : error} />
      }
    </>
  );
};

export default CommitmentsContent;