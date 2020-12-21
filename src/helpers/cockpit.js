import axios from 'axios';
import { api } from '../config/config.js';
const API_URL = api.url;
const API_KEY = api.apikey;

axios.interceptors.request.use(function (config) {
    config.headers['Cockpit-Token'] =  API_KEY;
    return config;
});

export const getCategories = () => {
    return new Promise((resolve, reject) => {
        let match = { sort: { _created: -1 } };
        axios.post(`${API_URL}/collections/get/categories`, match)
        .then((res) => {
            return resolve((res.data || {}).entries);
        })
        .catch((err) => { return reject(err) });
    })
}

export const getProducts = (category) => {
    return new Promise((resolve, reject) => {
        let match = { sort: { _created: -1 } };
        if(category)
            match.filter = { category:  category }
        axios.post(`${API_URL}/collections/get/products`, match)
        .then((res) => {
            return resolve((res.data || {}).entries);
        })
        .catch((err) => { return reject(err) });
    })
}