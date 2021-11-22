import css from "./Previewer.css";
import Window from "./Window";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Previewer = () => {
  return (
    <Window icon={<FontAwesomeIcon icon={faEye} />} title="Previewer">
      <div
        className={css.preview}
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked.parse(props.inputText) }}
      ></div>
    </Window>
  );
};

export default Previewer;
