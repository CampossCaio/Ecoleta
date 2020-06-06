import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";
import "./styles.css";

interface Props {
  onFileUpload: (file: File) => void;
}

const Dropzone: React.FC<Props> = ({ onFileUpload }) => {
  const [selectedUrl, setSelectedUrl] = useState<string>("");

  const onDrop = useCallback(
    (acceptedFiles) => {
      // Do something with the files

      const file = acceptedFiles[0];
      const fileUrl = URL.createObjectURL(file);
      setSelectedUrl(fileUrl);
      onFileUpload(file);

      console.log(acceptedFiles);
    },
    [onFileUpload]
  );
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
      {selectedUrl ? (
        <img src={selectedUrl} alt="Point thumbnail" />
      ) : (
        <p>
          <FiUpload />
          Imagem do estabelecimento.
        </p>
      )}
    </div>
  );
};

export default Dropzone;
