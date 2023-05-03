import { useEffect, useRef, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { xcodeLight } from "@uiw/codemirror-theme-xcode";

interface Props {
  code: string;
  feedBack: string;
}

export default function AdvisesContainer({ code, feedBack }: Props) {
  const code1 = code.split(":")[1];
  const feedBack2 = code.split(":")[1];

  return (
    <div className="form-container">
      <div className="carbon">
        <div className="carbon-header">
          <div className="carbon-title">GPT's code</div>
          <div className="carbon-actions">
            <button className="carbon-action">Export</button>
          </div>
        </div>
        <div className="carbon-input-container">
          <div id="carbon-input" className="carbon-input"></div>
          <CodeMirror
            value={code1}
            theme={xcodeLight}
            editable={false}
          />
        </div>
      </div>
    </div>
  );
}
