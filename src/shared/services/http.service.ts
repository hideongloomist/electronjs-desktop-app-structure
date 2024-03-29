import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { HEADER_KEY } from '../constants/strategy.constant';
export class HttpService {
  private axiosInstance: AxiosInstance;
  constructor(baseURL: string, apiKey: string) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout: 5000, // Timeout in milliseconds
      headers: {
        'Content-Type': 'application/json', // Example header, you can add more headers as needed
        [HEADER_KEY.API_KEY]: apiKey, // Add API key as an authorization header
      },
    });
  }
  // Helper method to set authorization token
  setAuthToken(token: string): void {
    this.axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
  // HTTP GET request
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.get<T>(url, config);
    return response.data;
  }
  // HTTP POST request
  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.post<T>(url, data, config);
    return response.data;
  }
  // HTTP PUT request
  async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.put<T>(url, data, config);
    return response.data;
  }
  // HTTP PUT request
  async patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.patch<T>(url, data, config);
    return response.data;
  }
  // HTTP DELETE request
  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.delete<T>(url, config);
    return response.data;
  }
}
