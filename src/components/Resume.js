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

  return <button id="downloadBtn">Download PDF</button>;
}
