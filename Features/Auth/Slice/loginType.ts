export type Roles = "Employee" | "Hr" | "Manager" | "Admin"

export interface LoginUserData {
  email: string
  password: string
}

export interface LoginResponse {
  token: string
  role: string
}

export interface AuthState {
  token: string | null
  loading: boolean
  error: string | null
  role: Roles | null
}
