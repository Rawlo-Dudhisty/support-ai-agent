import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_URL;

export const processTicket =
  async (data: {
    description: string;
  }) => {

    const token =
      localStorage.getItem("token");

    const response =
      await axios.post(
        `${API_URL}/tickets/process`,
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
        `${API_URL}/tickets`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    return response.data;
};

export const updateTicketStatus =
  async (
    ticketId: number,
    status: string
  ) => {

    const token =
      localStorage.getItem("token");

    const response =
      await axios.put(
        `${API_URL}/tickets/${ticketId}/status`,
        {
          status,
        },
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    return response.data;
};