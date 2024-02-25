import React from "react";
import { Toast, Button } from "react-bootstrap";

//we declared the type of the function and the children prop (subcomponents)
const ExampleToast: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [show, toggleShow] = React.useState(false);
  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

export default ExampleToast;
