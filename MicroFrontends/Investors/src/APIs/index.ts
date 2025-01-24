import { Investor } from "../Types";

const API_SERVER = "https://localhost:7000/api";

export const getInvestors: ()=> Promise<Investor[]> = async () => {
    try{
        const investors = await fetch(`${API_SERVER}/Investors`);
        const jsonInvestors = investors.json();

        return jsonInvestors;
    }
    catch{
        console.log(`Failed to call API ${API_SERVER}/Investors`);
    }
};

export const getInvestorById: (id:number)=> Promise<Investor[]> = async (id) => {
    try{
        const investor = await fetch(`${API_SERVER}/Investors/${id}`);
        const jsonInvestor = investor.json();

        return jsonInvestor;
    }
    catch{
        console.log(`Failed to call API ${API_SERVER}/Investors/${id}`);
    }
};