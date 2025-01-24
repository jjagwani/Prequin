import { Commitment, Asset } from "Investors/Types";

const API_SERVER = "https://localhost:7000/api";

export const getCommitments: (id:number) => Promise<Commitment[]> = async (id) => {
    try{
        const commitments = await fetch(`${API_SERVER}/Commitments/${id}/details`);
        const jsonCommitments = commitments.json();

        return jsonCommitments;
    }
    catch{
        console.log(`Failed to call API ${API_SERVER}/Commitments/${id}/details`);
    }
};

export const getAssetClasses: (id: number) => Promise<Asset[]> = async (id) => {
    try{
        const assets = await fetch(`${API_SERVER}/Commitments/${id}/assets`);
        const jsonAssets = assets.json();

        return jsonAssets;
    }
    catch{
        console.log(`Failed to call API ${API_SERVER}/Commitments/${id}/assets`);
    }
};

export const getCommitmentsByType: (id:number, assetType:string) => Promise<Commitment[]> = async (id, assetType) => {
    try{
        const commitments = await fetch(`${API_SERVER}/Commitments/${id}/details?assetClass=${assetType}`);
        const jsonCommitments = commitments.json();

        return jsonCommitments;
    }
    catch{
        console.log(`Failed to call API ${API_SERVER}/Commitments/${id}/details?assetClass=${assetType}`);
    }
};