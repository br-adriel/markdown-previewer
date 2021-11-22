import css from "./Window.css";

const Window = (props) => {
  return (
    <section className={css.window}>
      <div className={css.header}>
        <div>
          {props.icon}
          <span>{props.title}</span>
        </div>
      </div>
      <div className={css.content}>{props.children}</div>
    </section>
  );
};

export default Window;
