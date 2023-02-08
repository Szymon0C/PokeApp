import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const registerUser = async (body) => {
  axios.post(BASE_URL, body);
};
