import axios from "axios"
import { origin } from "./config"

export const sendOtp = async (email: string) => {
    try {
        const res = await axios.post(`${origin}/api/v1/employee/send-otp`, { email })
        return res.data
    } catch (error) {
        console.error('Failed to send Otp', error)
        throw error
    }
}

export const getEmployeeEmail = async (employeeId: string) => {
    try {
        const res = await axios.get(`${origin}/api/v1/employee/${employeeId}`)
        return res.data;
    } catch (error) {
        console.error('Failed to get employee Email', error)
        throw error
    }
}

export const verifyOtp = async (email: string, otp: string) => {
    try {
        const res = await axios.post(`${origin}/api/v1/employee/verify-otp`, { email, otp })
        return res.data
    } catch (error) {
        console.error('Failed to verify otp', error)
        throw error
    }
}

export const getEmployeeId = async (employeeId: string) => {
    try {
        const res = await axios.get(`${origin}/api/v1/employee/${employeeId}`);
        return res.data;
    } catch (error) {
        console.error('Failed to get employee', error)
        throw error
    }
}

export const setPasswordApi = async (employeeId: Number, password: string) => {
    try {
        const res = await axios.patch(`${origin}/api/v1/employee/set-password`, { employeeId, password })
        return res.data;
    } catch (error) {
        console.error('Failed to set password', error)
        throw error
    }
}

export const loginEmployee = async (email: string, password: string) => {
    try {
        const res = await axios.post(`${origin}/api/v1/employee/login`, { email, password })
        return res.data;
    } catch (error) {
        console.error('Login failed', error)
        throw error
    }
}

export const getEmployeeProfile = async (
    employeeId: string | number,
    fields?: string[]
) => {
    try {
        const query = fields && fields.length > 0 ? `?fields=${fields.join(",")}` : "";
        const res = await axios.get(
            `${origin}/api/v1/employee/profile/${employeeId}${query}`
        );
        return res.data.employee;
    } catch (error) {
        console.error("Failed to fetch employee profile", error);
        throw error;
    }
};