import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AuthState, LoginResponse, LoginUserData, Roles } from "./loginType"
import { API } from "../../../Core/url"

export const userLogin = createAsyncThunk<
  LoginResponse,
  { userData: LoginUserData },
  { rejectValue: string }
>("auth/login", async ({ userData }, { rejectWithValue }) => {
  try {
    const response = await API.post("/auth/login", userData)
    console.log("LoginSlice response:", response)
    return response.data
  } catch (error: any) {
    console.log("LoginSlice error:", error?.response?.data)
    if (error?.response?.data?.message) {
      return rejectWithValue(error.response.data.message)
    }
    return rejectWithValue(error.message)
  }
})

const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
  role: null, // Default role
}

const validRoles: Roles[] = ["Employee", "Hr", "Manager", "CEO"]

function isValidRole(role: string): role is Roles {
  return validRoles.includes(role as Roles)
}

const tokenSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null
      state.error = null
      state.role = null
      localStorage.removeItem("token")
      localStorage.removeItem("role")
    },
    setRoleFromStorage: (state, action: PayloadAction<Roles>) => {
      state.role = action.payload
    },
    setTokenFromStorage: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(
        userLogin.fulfilled,
        (state, action: PayloadAction<LoginResponse>) => {
          state.loading = false

          if (isValidRole(action.payload.role)) {
            state.role = action.payload.role
          }

          console.log("===", action.payload)

          // Store token and role in localStorage
          localStorage.setItem("role", action.payload.role)
          localStorage.setItem("token", action.payload.token)

          state.token = action.payload.token
          state.error = null
        }
      )
      .addCase(
        userLogin.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false
          state.error = action.payload || "An error occurred"
        }
      )
  },
})

// Export actions and reducer
export const { logout, setRoleFromStorage, setTokenFromStorage } =
  tokenSlice.actions
export default tokenSlice.reducer
