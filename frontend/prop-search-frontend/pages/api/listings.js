

import { API_HOST, APP_URLS } from "../../config/api"; // import the API_HOST and APP_URLS


/**
 * Handler for the listings API
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise}
 */

export default async function handler(req, res) {

  // destructure the method, body and query from the request
  const { method, query } = req;
 
  // set the headers
  const config = {
    headers: {
        "Accept": "application/json, text/plain, */*"
      },
    }  

    
  switch (method) {

    // if the method is GET
    case "GET":


      try {
        // get the properties
        const endpoint = APP_URLS["GET_PROPERTIES"] ;
       
        // make a request to the API
        const response = await API_HOST.post(endpoint, {bound : query?.bound}, config);

        // if the status is not 200, throw an error
        if (response.status !== 200) {
          throw new Error("API request failed");
        }

        // return the data from the response

        res.status(200).json(response.data);

      } catch (error) {
        
        // return the error message
        res.status(500).json({ message: error });
      }
      break;

    default:
      // if the method is not GET, return an error
      res.setHeader("Allow", ["POST"]);
      
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
