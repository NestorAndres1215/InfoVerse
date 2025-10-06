import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const getExchange = async (base) => {
  try {
    const res = await axios.get(`${API_URL}/exchange/${base}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
