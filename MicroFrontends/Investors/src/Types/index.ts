export interface Investor {
    id: number
    name: string,
    type: string,
    country: string,
    dateAdded: string,
    totalCommitment: number
};

export interface Commitment {
    id: number
    assetClass: string,
    amount: string,
    currency: string
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

export interface FilterProps {
    totalCommitment: number
};

export interface Asset {
    assetType: string,
    totalAmount: number
}

export interface State {
    filter: FilterState,
    investor: InvestorState
}