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


export const getEmployeeProfile = async (employeeId: number | string) => {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("User not authenticated");

    try {
        const res = await axios.get(`${origin}/api/v1/employee/profile`, {
            headers: { Authorization: `Bearer ${token}` },
        });

        return res.data.employee;
    } catch (err: any) {
        throw err;
    }
};




export const getEmployeeEducation = async (employeeId: string | number) => {
    try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("User not authenticated");

        const res = await axios.get(
            `${origin}/api/v1/employeeEducation/education/${employeeId}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return res.data.education;
    } catch (error) {
        console.error("Failed to fetch employee education", error);
        throw error;
    }
};

export const getEmployeeExperience = async (employeeId: string | number) => {
    try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("User not authenticated");

        const res = await axios.get(`${origin}/api/v1/employeeExperience/experience/${employeeId}`, {
            headers: { Authorization: `Bearer ${token}` },
        });

        return res.data.experiences;
    } catch (err) {
        console.error("Failed to fetch employee experience", err);
        throw err;
    }
};

export const getEmployeeProfil = async (employeeId: string | number) => {
    try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("User not authenticated");

        const res = await axios.get(
            `${origin}/api/v1/employeeProfile/${employeeId}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return res.data.employee;
    } catch (error) {
        console.error("Failed to fetch employee profile", error);
        throw error;
    }
};

export const getEmployeeAddresses = async (employeeId: number | string) => {
    try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("User not authenticated");

        const res = await axios.get(`${origin}/api/v1/employeeAddress/addresses/${employeeId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return res.data.addresses;
    } catch (err) {
        console.error("Failed to fetch employee addresses", err);
        throw err;
    }
};

// export const getEmployeeFamily = async (token: string, employeeId: number | string) => {
//     try {
//         const token = localStorage.getItem("token");
//         if (!token) throw new Error("User not authenticated");

//         const res = await axios.get(`${origin}/api/v1/family${employeeId}`, {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             }
//         });
//         return {
//             family: res.data.family,
//             siblings: res.data.siblings
//         };
//     } catch (err) {
//         console.error("Failed to fetch employee family details",);
//         throw err;
//     }
// };

export const getEmployeeFamily = async (employeeId: number | string) => {
    try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("User not authenticated");

        const res = await axios.get(`${origin}/api/v1/family/${employeeId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return {
            family: res.data.family,
            siblings: res.data.siblings,
        };
    } catch (err) {
        console.error("Failed to fetch employee family details", err);
        throw err;
    }
};
