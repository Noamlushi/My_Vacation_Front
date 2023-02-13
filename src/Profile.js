import React, { useState } from "react";
export default function Profile() {
  return (
    <div>
      <button
        onClick={() => {
          console.log("change passward!!");
        }}
      >
        change your password
      </button>
    </div>
  );
}
