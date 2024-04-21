import axios from "axios";

const api = axios.create({
    baseURL: "https://6107e5a0d73c6400170d3701.mockapi.io/api/",
});

export const getCampers = async (page = 1, limit = 4, filterString = '') => {
    const response = await api.get(`/advert?page=${page}&limit=${limit}&${filterString}`);
    return response;
}
