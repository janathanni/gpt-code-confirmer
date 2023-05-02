import { useState, useEffect, useRef, useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { xcodeLight } from "@uiw/codemirror-theme-xcode";

interface Props{
    codeHandler: Function
}

export default function FormContainer({ codeHandler }: Props) {

    const [code, setCode] = useState("Write your Code");

    const onChange=(value : string)=>{
        console.log(value);
        setCode((prev) => value);
    }

    const submitCode=()=>{
        console.log("submitted code is : " + code);
        codeHandler(code);
    }


    return (
        <div className="form-container">
            <div className="carbon">
                <div className="carbon-header">
                    <div className="carbon-title">Your Code</div>
                    <div className="carbon-actions">
                        <button className="carbon-action" onClick={submitCode}>Let's Review</button>
                        <button className="carbon-action">Export</button>
                    </div>
                </div>
                <div className="carbon-input-container">
                    <div id="carbon-input" className="carbon-input"></div>
                    <CodeMirror onChange={onChange} value={code} theme={xcodeLight}/>
                </div>
            </div>
        </div>
    )
}