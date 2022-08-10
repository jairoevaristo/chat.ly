import { ChangeEvent, useState } from "react";
import { uploadImageFile } from "../utils/uploadImageFile";

export function useUploadImageProfile() {
  const [previewUploadFile, setPreviewUploadFile] = useState<string | null>(null);
  const [avatar, setAvatar] = useState<File[]>();
  const [loadingUploadFile, setLoadingUploadFile] = useState(false);
  const [errorImage, setErrorImage] = useState(false);

  function handleUploadFile(event: ChangeEvent<HTMLInputElement>) {
    setPreviewUploadFile(null);
    setLoadingUploadFile(true);
    setErrorImage(false);
    
    const { error, files, imageUrlConvert } = uploadImageFile(event);

    setErrorImage(error);
    setAvatar(files);
    setPreviewUploadFile(imageUrlConvert);
    
    setTimeout(() => {
      setLoadingUploadFile(false);
    }, 500);
   }

  return {
    errorImage,
    loadingUploadFile,
    avatar,
    handleUploadFile,
    previewUploadFile
  }
}
