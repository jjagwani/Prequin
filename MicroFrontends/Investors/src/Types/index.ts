import { Commitment } from "Commitments/Types";

export interface Investor {
    id: number
    name: string,
    type: string,
    country: string,
    dateAdded: string,
    totalCommitment: number
};

export interface HeaderProps {
    subHeading?: string;
};

export interface TableContentProps {
    data?: Investor[] | Commitment[];
    isDataAvailable: boolean;
    handleRowClick: (row: Investor | Commitment) => void;
};

export interface DataTableProps {
    tableData: Investor[] | Commitment[];
    onRowClick: (row: Investor | Commitment) => void;
};

export interface FilterState {
    value: string
};

export interface InvestorState {
    investorName: string,
    totalCommitment: number
};

export interface LoaderProps {
    text: string;
}