import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useAnglerModal } from "../Context/AddAnglerModalContext";
import { useCompetition } from "../Context/CompetitionContext";

const AddAnglerModel = () => {
  const [anglerName, setAnglerName] = useState("");
  const [competition, setCompetition] = useCompetition();
  const { show, hideModal } = useAnglerModal();

  const addAngler = () => {
    const newAngler = { name: anglerName, fish: [] };
    setCompetition({ ...competition, anglers: [...competition.anglers, newAngler] });
  }

  const handleClose = () => {
    hideModal();
    setAnglerName("");
  };

  const ok = () => {
    addAngler();
    handleClose();
  };

  const cancel = () => {
    handleClose();
  }

  return (
    <Modal show={show} backdrop="static" onHide={cancel}>
      <Modal.Header closeButton>
        <Modal.Title>Add Angler</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          type="text"
          onChange={(e) => setAnglerName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              ok();
            }
          }}
          value={anglerName}
          placeholder="Name"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={ok}>
          Add
        </Button>
        <Button variant="secondary" onClick={cancel}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddAnglerModel;
