import "./Previewer.css";
import Window from "./Window";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { marked } from "marked";

const Previewer = (props) => {
  marked.setOptions({
    breaks: true,
  });
  return (
    <Window icon={<FontAwesomeIcon icon={faEye} />} title="Previewer">
      <div
        className="preview"
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked.parse(props.inputText) }}
      ></div>
    </Window>
  );
};

export default Previewer;
