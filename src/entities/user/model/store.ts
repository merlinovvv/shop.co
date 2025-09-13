import { authApi } from "@/shared/api/auth";
import { LoginBody, RegisterBody, TokensResponse, User } from "@/shared/types/api/auth";
import { ErrorResponse } from "@/shared/types/api/errors";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  tokens: TokensResponse | null;
  authData: User | null;

  isLoginProcess: boolean;
  isOpenModal: boolean;

  loadingLogin: boolean;
  loadingRegister: boolean;

  errorLogin: ErrorResponse | null;
  errorRegister: ErrorResponse | null;

  getRegister: (body: RegisterBody) => Promise<void>;
  getLogin: (body: LoginBody) => Promise<void>;
  logout: () => void;

  setIsOpenModal: (isOpen: boolean) => void;
  setIsLoginProcess: (isLogin: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      tokens: null,
      authData: null,
      isLoginProcess: true,
      isOpenModal: false,

      loadingLogin: false,
      loadingRegister: false,

      errorLogin: null,
      errorRegister: null,

      getRegister: async (body) => {
        set({ loadingRegister: true, errorRegister: null });

        try {
          const authData = await authApi.register(body);
          set({ authData, loadingRegister: false });
        } catch (err: any) {
          set({ errorRegister: err?.response?.data, loadingRegister: false });
          return;
        }

        set({ loadingLogin: true, errorLogin: null });
        try {
          const tokens = await authApi.login({ email: body.email, password: body.password });
          set({ tokens, loadingLogin: false, isOpenModal: false });
        } catch (err: any) {
          set({ errorLogin: err?.response?.data, loadingLogin: false });
        }
      },

      getLogin: async (body) => {
        set({ loadingLogin: true, errorLogin: null });

        try {
          const tokens = await authApi.login(body);
          const authData = await authApi.profile(tokens.access_token);
          set({ tokens, authData, loadingLogin: false, isOpenModal: false });
        } catch (err: any) {
          set({ errorLogin: err?.response?.data, loadingLogin: false });
        }
      },

      logout: () => set({ tokens: null, authData: null }),

      setIsOpenModal: (isOpen) => set({ isOpenModal: isOpen }),
      setIsLoginProcess: (isLogin) => set({ isLoginProcess: isLogin }),
    }),
    { name: "auth-storage" }
  )
);
