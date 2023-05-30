import React from "react";

function Resume() {
  return (
<div className="card card-side bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">My Resume</h2>
    <p>Please feel free to download a copy of my resume 📄</p>
    <div className="card-actions justify-end">
      <a href="https://drive.google.com/file/d/1MfZQGlk7EFF_nY22_eTxwROZnBKdSh6g/view?usp=share_link" >
      <button className="btn btn-outline btn-info">Link to Download</button>
      </a>
    </div>
  </div>
</div>
)}

export default Resume;