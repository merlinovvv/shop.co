import axios from "axios";
import { UploadFileResponse } from "../types/api/upload";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STORE_API,
});

export const filesApi = {
  uploadFile: (file: File) =>
    api
      .post<UploadFileResponse>(`files/upload`, file, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((r) => r.data),
};
