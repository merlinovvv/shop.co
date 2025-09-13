import axios from "axios";
import { LoginBody, RegisterBody, TokensResponse, User } from "@/shared/types/api/auth";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STORE_API,
});

export const authApi = {
  register: (body: RegisterBody) => api.post<User>("users", body).then((r) => r.data),
  login: (body: LoginBody) => api.post<TokensResponse>("auth/login", body).then((r) => r.data),
  profile: (token: string) =>
    api.get<User>("auth/profile", { headers: { Authorization: `Bearer ${token}` } }).then((r) => r.data),
};
