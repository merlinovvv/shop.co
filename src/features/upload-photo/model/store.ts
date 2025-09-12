import { ErrorResponse } from "@/shared/types/api/errors";
import { UploadFileResponse } from "@/shared/types/api/upload";
import axios from "axios";
import { create } from "zustand";

interface UploadPhotoState {
  photo: string;
  loading: boolean;
  error: ErrorResponse;
  uploadPhoto: (file: File) => Promise<void>;
}

export const useUploadPhotoStore = create<UploadPhotoState>((set) => ({
  photo: "",
  loading: false,
  error: {} as ErrorResponse,
  uploadPhoto: async (file) => {
    set({ loading: true, error: {} as ErrorResponse });
    try {
      const data = await axios
        .post<UploadFileResponse>(
          `${process.env.NEXT_PUBLIC_STORE_API}files/upload`,
          { file },
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        )
        .then((res) => res.data);
      set({ photo: data.location, loading: false });
    } catch (err: any) {
      set({ error: err?.response?.data, loading: false });
    }
  },
}));
