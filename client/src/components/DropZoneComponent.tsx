import { Dispatch, FunctionComponent, useCallback } from "react";
import { useDropzone } from "react-dropzone";

const DropZoneComponent: FunctionComponent<{ setFile: Dispatch<any> }> = ({
  setFile,
}) => {
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
      multiple: false,
      accept: {
        "image/png": [".png"],
        "image/jpeg": [".jpg"],
        "audio/mpeg": [".mp3"],
      },
    });
  return (
    <div className="w-full p-4">
      <div
        className="w-full rounded-md cursor-pointer h-80 focus:outline-none"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <div
          className={
            "flex flex-col items-center justify-center h-full space-y-3 border-2 border-dashed border-yellow-light rounded-xl " +
            (isDragReject === true ? "border-red-500" : "") +
            (isDragAccept === true ? "border-green-500" : "")
          }
        >
          <img src="/images/folder.png" alt="folder" className="w-16 h-16" />
          {isDragReject ? (
            <p>Sorry, this app only supports images and mp3</p>
          ) : (
            <>
              <p>Drag & Drop Files Here</p>
              <p className="mt-2 text-base text-gray-300">
                Only jpeg, png & mp3 files supported
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropZoneComponent;
