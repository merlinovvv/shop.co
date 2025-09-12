import { LoginBody, RegisterBody, TokensResponse, User } from "@/shared/types/api/auth";
import { ErrorResponse } from "@/shared/types/api/errors";
import axios from "axios";
import { create } from "zustand";

interface AuthState {
  authData: TokensResponse | null;
  isLoginProccess: boolean;
  setIsLoginProccess: (isLogin: boolean) => void;
  isOpenModal: boolean;
  loading: boolean;
  errorLogin: ErrorResponse;
  errorRegister: ErrorResponse;
  getRegister: (body: RegisterBody) => Promise<void>;
  getLogin: (body: LoginBody) => Promise<void>;
  setIsOpenModal: (isOpen: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  authData: null,
  isOpenModal: false,
  isLoginProccess: true,
  loading: false,
  errorLogin: {} as ErrorResponse,
  errorRegister: {} as ErrorResponse,
  getRegister: async (body: RegisterBody) => {
    set({ loading: true, errorRegister: {} as ErrorResponse, errorLogin: {} as ErrorResponse });
    let loginData = null;
    try {
      await axios.post<User>(`${process.env.NEXT_PUBLIC_STORE_API}users`, body).then((res) => res.data);
    } catch (err: any) {
      set({ errorRegister: err?.response?.data, loading: false });
      return
    }

    try {
      loginData = await axios
        .post<TokensResponse>(`${process.env.NEXT_PUBLIC_STORE_API}auth/login`, {
          email: body.email,
          password: body.password,
        })
        .then((res) => res.data);
    } catch (err: any) {
      set({ errorLogin: err?.response?.data, loading: false });
    }

    set({ authData: loginData, loading: false });
  },
  getLogin: async (body: LoginBody) => {
    set({ loading: true, errorLogin: {} as ErrorResponse });
    try {
      const data = await axios
        .post<TokensResponse>(`${process.env.NEXT_PUBLIC_STORE_API}auth/login`, body)
        .then((res) => res.data);
      set({ authData: data, loading: false });
    } catch (err: any) {
      set({ errorLogin: err?.response?.data, loading: false });
    }
  },
  setIsOpenModal: (isOpen: boolean) => set({ isOpenModal: isOpen }),
  setIsLoginProccess: (isLogin: boolean) => set({ isLoginProccess: isLogin }),
}));
