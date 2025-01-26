import React, { useEffect, useState } from "react";
import TableContent from "Investors/TableContent";
import { getCommitments } from "../../APIs";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Commitment, State } from "../../Types";
import Loader from "Investors/Loader";

const CommitmentsTable: React.FC = () => {

  const { id } = useParams();

  const [commitments, setCommitments] = useState<Commitment[]>([]);
  const [isDataAvailable, setIsDataAvailable] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const filter: string = useSelector((state: State) => state.filter.value);

  useEffect(() => {
    const fetchData: () => void = async () => {
      let commitmentData: Commitment[] | undefined = [];
      try {
        commitmentData = filter === "" ? await getCommitments(Number(id)) : await getCommitments(Number(id), filter);
        if (commitmentData && commitmentData.length !== 0) {
          setCommitments(commitmentData);
          setIsDataAvailable(true);
        }
      }
      catch (err) {
        setError(String(err));
      }
    }

    id && fetchData()
  }, [filter]);

  return (
    <>
      {error !== "" ? <Loader text={error} /> :
        <TableContent data={commitments} isDataAvailable={isDataAvailable} handleRowClick={() => { }} />}
    </>);
};

export default CommitmentsTable;