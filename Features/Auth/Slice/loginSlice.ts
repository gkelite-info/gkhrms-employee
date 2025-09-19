import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { API } from "../../../Core/url"
import { AuthState, LoginResponse, LoginUserData, Roles } from "./loginType"

export const userLogin = createAsyncThunk<
  LoginResponse,
  { userData: LoginUserData },
  { rejectValue: string }
>("auth/login", async ({ userData }, { rejectWithValue }) => {
  try {
    const response = await API.post("/auth/login", userData)
    return response.data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  role: null,
  loading: false,
  error: null,
}

const validRoles: Roles[] = ["Employee", "Hr", "Manager", "CEO", "Admin"]

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

export const { logout, setRoleFromStorage, setTokenFromStorage } =
  tokenSlice.actions
export default tokenSlice.reducer
