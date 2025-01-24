import React, { useEffect, useState } from "react";
import TableContent from "Investors/TableContent";
import { getCommitments, getCommitmentsByType } from "../APIs";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Commitment, State } from "Investors/Types";

const CommitmentsTable: React.FC = () => {
  
  const { id } = useParams();

  const [commitments, setCommitments] = useState<Commitment[]>([]);
  const [isDataAvailable, setIsDataAvailable] = useState<boolean>(false);

  const filter: string = useSelector((state: State) => state.filter.value);
  
    useEffect(() => {
      const fetchData: () => void = async () => {
        const commitmentData: Commitment[]  = await getCommitments(Number(id));
        setCommitments(commitmentData);
        if(commitmentData && commitmentData.length !== 0)
        {
          setIsDataAvailable(true);
        }
      }

      id && fetchData()
    }, []);

    useEffect(() => {
      const fetchData: () => void = async () => {
        const commitmentData: Commitment[] = filter === "" ? await getCommitments(Number(id)) : await getCommitmentsByType(Number(id), filter);
        setCommitments(commitmentData);
        if(commitmentData && commitmentData.length !== 0)
        {
          setIsDataAvailable(true);
        }
      }

      id && fetchData()
    }, [filter]);

  return (
    <TableContent data={commitments} isDataAvailable={isDataAvailable} handleRowClick={() => {}} />);
};

export default CommitmentsTable;