import React, { useContext } from "react";
import ColorPicker from "./ColorPicker";

//This file is already perfect
//You dont have too edit this file
export default function ColorPickerContainer() {
  return (
    <div>
      <div className="d-flex gap-2 mb-2 justify-content-center">
        <ColorPicker color="#495C83" />
        <ColorPicker color="#7A86B6" />
        <ColorPicker color="#A8A4CE" />
        <ColorPicker color="#C8B6E2" />
        <ColorPicker color="#7858A6" />
        <ColorPicker color="#5B4B8A" />
      </div>
      <div className="d-flex gap-2 justify-content-center">
        <ColorPicker color="#4C3575" />
        <ColorPicker color="#371B58" />
        <ColorPicker color="#AFB4FF" />
        <ColorPicker color="#9C9EFE" />
        <ColorPicker color="#AFB4FF" />
        <ColorPicker color="#5534A5" />
      </div>
    </div>
  );
}
