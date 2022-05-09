import DropZoneComponent from "@components/DropZoneComponent";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState(null);
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="my-4 text-3xl font-medium">
        Got a file ? Share It Like Fake News
      </h1>
      <div className="flex flex-col items-center justify-center bg-gray-800 shadow-xl w-96 rounded-xl">
        {/* dropzone component */}
        <DropZoneComponent setFile={setFile} />
        {/* render file */}
        {file?.name}
        {/* upload button */}
      </div>
    </div>
  );
}
