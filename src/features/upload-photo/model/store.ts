import { filesApi } from "@/shared/api/files";
import { ErrorResponse } from "@/shared/types/api/errors";
import { create } from "zustand";

interface UploadPhotoState {
  photo: string;
  loading: boolean;
  error: ErrorResponse | null;
  uploadPhoto: (file: File) => Promise<void>;
}

export const useUploadPhotoStore = create<UploadPhotoState>((set) => ({
  photo: "",
  loading: false,
  error: null,
  uploadPhoto: async (file) => {
    set({ loading: true, error: null });
    try {
      const data = await filesApi.uploadFile(file);
      set({ photo: data.location, loading: false });
    } catch (err: any) {
      set({ error: err?.response?.data, loading: false });
    }
  },
}));
