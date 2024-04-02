import axios from "axios";

/**
 * Axios instance for the Next.js server
 */
export const NEXT_SERVER_API = axios.create({
    baseURL: "/",
  });
  
export const API_HOST = axios.create({
    baseURL: process.env.API_HOST,
});

export const APP_URLS = {
    GET_PROPERTIES : '/api/properties/listings'
}