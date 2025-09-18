import { API } from "../../../Core/url"
import { loginData } from "../hooks/login.hook"

// import  loginData  from "../Service/login-service"
export const loginApi = async (user: loginData) => {
  try {
    const res = await API.post("/auth/login", user)

    console.log("==", res.data)
  } catch (error) {
    console.log("login failed ", error)
  }
}
