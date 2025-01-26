import { FilterState, InvestorState } from "Investors/Types"

export interface Commitment {
    id: number
    assetClass: string,
    amount: string,
    currency: string
};

export interface FilterProps {
    totalCommitment: number
};

export interface Asset {
    assetType: string,
    totalAmount: number
};

export interface State {
    filter: FilterState,
    investor: InvestorState
};