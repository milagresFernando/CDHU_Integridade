// Css
import "./index.scss";

function Title(props) {
  // passe um valor de 1 a 6 em typeH pra setar as tag <h1>,<h2>,<h3,><h4>,<h5>ou<h6>
  let CustomTitle;
  for (let index = 1; index <= 6; index++) {
    if (parseInt(props.typeH) === index) {
      CustomTitle = `h${props.typeH}`;
    }
  }

  if (props.ballLeft) {
    return (
      <CustomTitle className={`title ${props.className}`}>
        <span className="ballTitle"></span>
        {props.content} {props.children}
      </CustomTitle>
    );
  } else {
    return (
      <CustomTitle className={`title ${props.className}`}>
        {props.content} {props.children}
      </CustomTitle>
    );
  }
}

export default Title;
