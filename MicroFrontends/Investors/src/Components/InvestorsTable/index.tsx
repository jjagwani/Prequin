import React, { useEffect, useState } from "react";
import TableContent from "../../Containers/TableContent"
import { getInvestors } from "../../APIs";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { selectInvestor } from "../../store";
import { Investor } from "../../Types";
import { useStyles } from "./styles";
import Loader from "../../Containers/Loader";

const InvestorsTable: React.FC = () => {

  const [investors, setInvestors] = useState<Investor[]>([]);
  const [isDataAvailable, setIsDataAvailable] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      let investorData: Investor[] | undefined = undefined;
      try {
        investorData = await getInvestors();
        if (investorData && investorData.length !== 0) {
          setInvestors(investorData);
          setIsDataAvailable(true);
        }
      } catch (err) {
        setError(String(err));
      }

    }

    fetchData()
  }, []);

  const handleRowClick: (row: Investor) => void = (row) => {
    navigate(`/investor/${row.id}`);
    dispatch(selectInvestor([row.name, row.totalCommitment]))
  };

  return (
    <>
      {error ? <Loader text={error} /> :
        <TableContent data={investors} isDataAvailable={isDataAvailable} handleRowClick={handleRowClick} />}
    </>);
};

export default InvestorsTable;