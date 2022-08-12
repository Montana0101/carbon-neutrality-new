import "./button.less";
import { useHistory } from "react-router-dom";

export const NavigateButton = (props) => {
  const history = useHistory();

  return (
    <div
      className="navigate_button"
      onClick={() => {
   
        if (props.path != "news0") {
          window.location.href = props.path;
        // history.push(props.path)

        } else {
          window.open(
            "https://mp.weixin.qq.com/s/02SNGgy2hPyIGckaF6oz3g",
            "_blank"
          );
        }
      }}
      style={{ color: props.color, border: `1px solid ${props.color}` }}
    >
      {props.content}
    </div>
  );
};

export const ButtonCmt = (props) => {
  return (
    <button
      style={{
        background: props.bg,
        color: props.color,
        fontSize: "0.12rem",
        padding: "0.03rem 0.1rem",
        width: props.w ? props.w : '0.8rem',
        borderRadius: "0.05rem",
        cursor: "pointer",
        height:props.h,
        border: `0.01rem solid ${props.color}`,
      }}
    >
      {props.t}
    </button>
  );
};


// withRouter(NavigateButton)
