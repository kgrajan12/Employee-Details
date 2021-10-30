import axios from "axios";
import { API } from "./constants";

const baseURL = 'https://www.mocky.io';

export const getEmployeeDetails = () => {
    return axios({
        method: 'GET',
        baseURL,
        url: API.getEmployeeDetails
    }).then((response) => response.data).catch(error => {
        console.log('Get Employee API Error:', error);
    });
};