import "./Editor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const Editor = (props) => {
  const inputChange = (e) => {
    props.setInputText(e.target.value);
  };
  return (
    <Window icon={<FontAwesomeIcon icon={faEdit} />} title="Editor">
      <textarea id="editor" onChange={(e) => inputChange(e)}>
        {props.inputText}
      </textarea>
    </Window>
  );
};

export default Editor;
