import { InputFile, InputFileProps } from "@/shared/ui/input-file/InputFile";
import { FC, useEffect } from "react";
import { useUploadPhotoStore } from "../model/store";
import Image from "next/image";

export const UploadPhoto: FC<{ onChange: (photo: string) => void; className?: string; label?: string }> = ({
  onChange,
  className,
  label,
}) => {
  const { photo, uploadPhoto, loading } = useUploadPhotoStore();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files?.length) {
      uploadPhoto(event.target.files[0]);
    }
  }

  useEffect(() => {
    if (photo && onChange) {
      onChange(photo);
    }
  }, [photo]);

  return (
    <div className={className}>
      {photo ? (
        <Image src={photo} width={96} height={96} alt="Uploaded" className="mb-2 object-cover rounded-3xl" />
      ) : (
        <InputFile label={label} loading={loading} onChange={handleChange} />
      )}
    </div>
  );
};
