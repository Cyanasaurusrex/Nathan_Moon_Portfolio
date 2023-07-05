import { useEffect } from "react";
import { saveAs } from "file-saver";

export default function Resume() {
  useEffect(() => {
    const handleDownload = () => {
      const fileUrl = "/static/Nathan_Moon_Resume.pdf";
      saveAs(fileUrl, "resume.pdf");
    };

    const button = document.getElementById("downloadBtn");
    button.addEventListener("click", handleDownload);

    return () => {
      button.removeEventListener("click", handleDownload);
    };
  }, []);

  return(
    <div>
      <button id="downloadBtn" className=" bg-brand-primary text-brand-accent p-1 px-2 rounded-lg hover:bg-brand-teriary">Download Resume</button>
    </div>) 
}
