import CodeMirror from "@uiw/react-codemirror";
import { xcodeLight } from "@uiw/codemirror-theme-xcode";

interface Props {
  code: string;
}

export default function AdvisesContainer({ code }: Props) {
  const code1 = code.split(":")[1].replaceAll('```','').trim()  ;

  return (
    <div className="form-container">
      <div className="carbon">
        <div className="carbon-header">
          <div className="carbon-title">GPT's code</div>
          <div className="carbon-actions">
            <button className="carbon-action">Copy</button>
          </div>
        </div>
        <div className="carbon-input-container">
          <CodeMirror
            value={code1}
            theme={xcodeLight}
            editable={false}
            width="100%"
            basicSetup={{
               lineNumbers:false
            }}
          />
        </div>
      </div>
    </div>
  );
}
