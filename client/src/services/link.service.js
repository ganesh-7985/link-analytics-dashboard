import axios from '../utils/axios';

export const createLink = async (linkData) => {
    const response = await axios.post('/links', linkData);
    return response.data;
};

export const getLinks = async () => {
    const response = await axios.get('/links');
    return response.data;
};

export const getLinkAnalytics = async (linkId) => {
    const response = await axios.get(`/analytics/${linkId}`);
    return response.data;
};