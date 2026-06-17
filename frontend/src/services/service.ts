import axios from "axios";

const API_URL =
  "http://localhost:8000/tickets";

export const processTicket =
  async (data: {
    description: string;
  }) => {

    const token =
      localStorage.getItem("token");

    const response =
      await axios.post(
        `${API_URL}/process`,
        data,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    return response.data;
};

export const getTickets =
  async () => {

    const token =
      localStorage.getItem("token");

    const response =
      await axios.get(
        API_URL,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    return response.data;
};