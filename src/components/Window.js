import "./Window.css";

const Window = (props) => {
  return (
    <section className="window">
      <div className="header">
        <div>
          {props.icon}
          <span>{props.title}</span>
        </div>
      </div>
      <div className="content">{props.children}</div>
    </section>
  );
};

export default Window;
