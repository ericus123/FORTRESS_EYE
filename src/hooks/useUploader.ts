import axios from "axios";
import { useState } from "react";
import { Readable } from "stream";

export interface UploadFile {
  /** Name of the form field associated with this file. */
  fieldname: string;
  /** Name of the file on the uploader's computer. */
  originalname: string;
  /**
   * Value of the `Content-Transfer-Encoding` header for this file.
   * @deprecated since July 2015
   * @see RFC 7578, Section 4.7
   */
  encoding: string;
  /** Value of the `Content-Type` header for this file. */
  mimetype: string;
  /** Size of the file in bytes. */
  size: number;
  /**
   * A readable stream of this file. Only available to the `_handleFile`
   * callback for custom `StorageEngine`s.
   */
  stream: Readable;
  /** `DiskStorage` only: Directory to which this file has been uploaded. */
  destination: string;
  /** `DiskStorage` only: Name of this file within `destination`. */
  filename: string;
  /** `DiskStorage` only: Full path to the uploaded file. */
  path: string;
  /** `MemoryStorage` only: A Buffer containing the entire file. */
  buffer: Buffer;
}

type Response = {
  isLoading: boolean;
  uploadFile: (file: File, type?: string) => Promise<UploadFile>;
};

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_FILE_UPLOADER_API,
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `${process.env.NEXT_PUBLIC_FILE_UPLOADER_API_KEY}`
  }
});
export const useUpload = (): Response => {
  const [isLoading, setLoading] = useState(false);

  const uploadFile = async (file: File, type?: string): Promise<UploadFile> => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    const response = await axiosInstance
      .post("/upload", formData, {
        url: axiosInstance.defaults.url,
        params: {
          type: type
        }
      })
      .then((res) => {
        return res.data.file;
      })
      .catch((err) => {
        throw new Error(err);
      })
      .finally(() => {
        setLoading(false);
      });

    return response;
  };

  return {
    isLoading,
    uploadFile
  };
};
