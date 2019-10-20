import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  onMessageReceivedSuccess,
  onMessageReceivedFailed
} from "../redux/actionTypes";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import "./ShowMessage.css";

const api = "http://localhost:8000";

//Renders Text Input & Button
//Sends message to server and renders Toast with the message response

const ShowMessage = () => {
  const { receivedMessage, error } = useSelector(state => ({
    receivedMessage: state.messageReducer.message,
    error: state.messageReducer.error
  })); //Vars from redux
  const dispatch = useDispatch();

  //State vars
  const [messageInput, setMessageInput] = useState("");
  const [showMessage, setShowMessage] = useState(false); //Toggle toast with message

  const fetchData = message => {
    fetch(`${api}/text?message=${message}`)
      .then(response => response.json())
      .then(data => {
        setShowMessage(true);
        dispatch(onMessageReceivedSuccess(data.message)); //dispatch Action
      })
      .catch(err => {
        dispatch(onMessageReceivedFailed(err)); //dispatch Action
        setShowMessage(false);
      });
  };
  return (
    <Container className="p-3">
      <h1 className="header">Text APP</h1>
      {error && (
        <Alert variant="danger">
          An error has ocurred, please try again. ErrorMessage: {error.message}
        </Alert>
      )}
      {!showMessage && (
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Text to send"
            value={messageInput}
            onChange={e => setMessageInput(e.target.value)}
            data-testid="message-input"
          />
          <Button
            disabled={!messageInput.length > 0}
            onClick={() => fetchData(messageInput)}
          >
            Send Message
          </Button>
        </Form.Group>
      )}
      {!error && (
        <Toast show={showMessage} onClose={() => setShowMessage(false)}>
          <Toast.Header>
            <strong className="mr-auto">Message Received</strong>
          </Toast.Header>
          <Toast.Body data-testid="toast-body">{receivedMessage}</Toast.Body>
        </Toast>
      )}
    </Container>
  );
};

export default ShowMessage;
