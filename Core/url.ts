import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios"
import { errorMsgApi } from "./toast"

export const API = axios.create({
  baseURL: "http://localhost:8080",
})

export const imageUrl = "http://localhost:8080"

// Explicit type for token getter
const useGetUserToken = (): string | null => {
  return localStorage.getItem("token")
}

// Request Interceptor
API.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = useGetUserToken()

    if (token && config.url && !config.url.includes("/login")) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      }
    }

    config.headers = {
      ...config.headers,
      "Content-Type": config.headers?.["Content-Type"] || "application/json",
    }

    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

// Response Interceptor
API.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError<{ message?: string }>) => {
    const errorMessage = error.response?.data?.message || "Unknown error"
    console.log("API call failed:", errorMessage)

    // 🔹 Ensure errorMsgApi is defined/imported
    if (typeof errorMsgApi === "function") {
      errorMsgApi(errorMessage)
    }

    return Promise.reject(error)
  }
)
