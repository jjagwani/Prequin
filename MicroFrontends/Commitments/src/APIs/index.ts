import { Commitment, Asset } from "Investors/Types";

const API_SERVER = "https://localhost:7000/api";

const fetchData = async <T>(url: string): Promise<T | undefined> => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    } catch (err) {
        console.error(`Failed to fetch data from ${url}:`, err);
        throw(err);
    }
};

export const getCommitments = async (
    id: number,
    assetType?: string
): Promise<Commitment[] | undefined> => {
    try {
        const baseUrl = `${API_SERVER}/Commitments/${id}/details`;
        const url = assetType ? `${baseUrl}?assetClass=${assetType}` : baseUrl;
        return await fetchData<Commitment[]>(url);
    }
    catch (err) {
        throw (err);
    }
};

export const getAssetClasses = async (id: number): Promise<Asset[] | undefined> => {
    try {
        const url = `${API_SERVER}/Commitments/${id}/assets`;
        return await fetchData<Asset[]>(url);
    }
    catch (err) {
        throw (err);
    }
};
