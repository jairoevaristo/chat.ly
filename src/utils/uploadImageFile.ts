import { ChangeEvent } from "react";
import { acceptImageUpload } from "./typeFileImage";

type UploadImageFileReturn = {
  error: boolean;
  files: File[] | undefined;
  imageUrlConvert: string | null;
}

export const uploadImageFile = (event: ChangeEvent<HTMLInputElement>): UploadImageFileReturn => {
  if (event.target.files && event.target.files[0]) {
    const { type } = event.target.files[0];        
    const imageUrlConvert = URL.createObjectURL(event.target.files[0]);

    if (!acceptImageUpload(type)) {
      return {
        error: true,
        files: undefined,
        imageUrlConvert: null,
      };
    }

    return {
      error: false,
      files: Array.from(event.target.files),
      imageUrlConvert
    };
  }

  return {
    error: false,
    files: undefined,
    imageUrlConvert: null,
  };
}