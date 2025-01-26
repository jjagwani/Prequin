import { Investor } from "../Types";

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
        throw(err)
    }
};

export const getInvestors = async (
    id?: number
): Promise<Investor[] | undefined> => {
    try {
        const baseUrl = `${API_SERVER}/Investors`;
        const url = id ? `${baseUrl}/${id}` : baseUrl;
        return await fetchData<Investor[]>(url);
    } catch (err) {
        throw (err);
    }

};