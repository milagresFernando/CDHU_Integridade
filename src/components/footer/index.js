// Css
import "./index.scss";

// Components
import { Container, Image } from "react-bootstrap";
import LogoCurso from "../../screens/assets/images/logoCurso.svg";

function Footer(props) {
  return (
    <footer
      className={`footerComponent ${props.className} ${
        props.fixed ? "fixed" : ""
      }`}
    >
      <Container>
        <Image
          src={LogoCurso}
          className={"mx-auto d-block logo"}
          loading="lazy"
          alt=""
          fluid
        />
      </Container>
    </footer>
  );
}

export default Footer;
