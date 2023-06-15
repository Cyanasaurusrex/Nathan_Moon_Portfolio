import React from 'react';

const RESUME_URL = '/Nathan_Moon_Resume.docx'

export default function Resume() {
  const downloadFileAtURL = (url) => {
    const filename = url.split("/").pop()
    const link = document.createElement("a")
    link.href = url
    link.setAttribute("download", filename)
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  return (
    <div>
      <button onClick={() => {downloadFileAtURL(RESUME_URL)}}>Download</button>
    </div>
  );
};