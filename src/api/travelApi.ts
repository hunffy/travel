import axios from "axios";

const API_URL = "https://example.com/api"; //! 추후 실제 api주소로 변경

export const getDestinations = async () => {
  const response = await axios.get(`${API_URL}/destinations`);
  return response.data;
};
