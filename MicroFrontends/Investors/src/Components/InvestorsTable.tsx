import React, { useEffect, useState }  from "react";
import TableContent from "./Shared/TableContent"
import { getInvestors } from "../APIs";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { selectInvestor } from "../store";
import { Investor } from "../Types";

const InvestorsTable: React.FC = () => {

  const [investors, setInvestors] = useState<Investor[]>([]);
  const [isDataAvailable, setIsDataAvailable] = useState<boolean>(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const investorData: Investor[] = await getInvestors();
      setInvestors(investorData);
      if(investorData && investorData.length !== 0)
      {
        setIsDataAvailable(true);
      }
    }

    fetchData()
  }, []);

  const handleRowClick: (row:any) => void = (row) => {
    navigate(`/investor/${row.id}`);
    dispatch(selectInvestor([row.name, row.totalCommitment]))
  };

  return (
    <TableContent data={investors} isDataAvailable={isDataAvailable} handleRowClick={handleRowClick} />);
};

export default InvestorsTable;