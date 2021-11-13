import React from "react";
import { ResetButtonStyles } from "./ResetButtonElements";
import { Reset } from "../../pages/api/index";

export default function ResetButton({ selectedList }) {
  const handleReset = async () => {
    let token = localStorage.getItem("token");
    let list = { filingFrequency: selectedList };
    try {
      let response = await Reset(list);
      alert("committees reset");
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ResetButtonStyles onClick={() => handleReset()}>Reset</ResetButtonStyles>
  );
}
