// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col, Form } from "react-bootstrap";
import Title from "../../../../../components/texts/title";
import Check from "../../../../../components/forms/check";

//Imagens

function BlocoSwtichs(props) {
  const checkItems = [
    {
      label: "Switch 1 exemplo",
      value: 0,
    },
    {
      label: "Switch 2 exemplo",
      value: 1,
    },
    {
      label: "Switch 3 exemplo",
      value: 2,
    },
  ];

  let initialState = checkItems.map(() => false);
  const [checked, setChecked] = useState(initialState);

  return (
    <Col lg="4">
      <Title typeH="4" className="" content={<Fragment>Switch</Fragment>} />
      <Form.Group className="mb-3">
        <Check
          className="switch-option"
          type="switch"
          checkItems={checkItems}
          setChecked={setChecked}
          checked={checked}
          checkedInitial={initialState}
        />
      </Form.Group>
    </Col>
  );
}

export default BlocoSwtichs;
