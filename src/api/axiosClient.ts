import axios from "axios";

export const instance = axios.create({
  baseURL: "https://vpic.nhtsa.dot.gov/api/",
});

export const axiosClient = {
  async get<T>(url: string) {
    const response = await instance.get<T>(url);
    return response.data;
  },

  async post<T, D = unknown>(url: string, data: D) {
    const response = await instance.post<T>(url, data);
    return response.data;
  },

  async patch<T, D = unknown>(url: string, data: D) {
    const response = await instance.patch<T>(url, data);
    console.log(response);
    return response.data;
  },

  async put<T, D = unknown>(url: string, data: D) {
    const response = await instance.put<T>(url, data);
    return response.data;
  },

  async delete(url: string) {
    return instance.delete(url);
  },
};
