import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"));

interface IProps {
  value: string;
  onChange: (value: string) => void;
}

const TextEditor = ({ value, onChange }: IProps) => {
  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={onChange}
      style={{ height: "200px" }}
    />
  );
};

export default TextEditor;
