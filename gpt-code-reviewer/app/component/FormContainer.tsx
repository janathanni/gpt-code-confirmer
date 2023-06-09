import { useState, useEffect, useRef, useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { xcodeLight } from "@uiw/codemirror-theme-xcode";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";

interface Props {
  codeHandler: Function;
}

export default function FormContainer({ codeHandler }: Props) {
  const [code, setCode] = useState("Write your Code");

  const onChange = (value: string) => {
    console.log(value);
    setCode(prev => value);
  };

  const submitCode = () => {
    console.log("submitted code is : " + code);
    codeHandler(code);
  };

  return (
    <div className="form-container">
      <div className="carbon">
        <div className="carbon-header">
          <div className="carbon-title">Your Code</div>
          <div className="carbon-actions">
            <button className="carbon-action" onClick={submitCode}>
              Review
            </button>
            <button className="carbon-action">Copy</button>
          </div>
        </div>
        <div className="carbon-input-container">
          <CodeMirror onChange={onChange} value={code} theme={xcodeLight} width= "auto"
            basicSetup={{
              lineNumbers: false
            }} />
        </div>
      </div>
    </div>
  );
}
