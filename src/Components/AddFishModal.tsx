import { useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useFishModal } from "../Context/AddFishModelContext";
import { useCompetition } from "../Context/CompetitionContext";
import { FishType, fishTypesArray, isFishType } from "../Types/FishType";
import { Fish } from "../Types/Types";
import { isUnit, Unit, unitsArray } from "../Types/Units";

const AddFishModal = () => {
  const fishModalOptions = useFishModal();
  const [fishType, setFishType] = useState<FishType>("ANGLER FISH");
  const [fishWeightKg, setFishWeightKg] = useState<number>(0);
  const [fishWeightLb, setFishWeightLb] = useState<number>(0);
  const [fishWeightOz, setFishWeightOz] = useState<number>(0);
  const [units, setUnits] = useState<Unit>("Imperial");
  const [competition, setCompetition] = useCompetition();

  const handleAddFish = () => {
    const fish: Fish =
      units === "Metric"
        ? {
            fishType,
            units: "Metric",
            weightKg: fishWeightKg,
            location: competition.isShore ? "Shore" : "Boat",
            angler: fishModalOptions.anglerName,
          }
        : {
            fishType,
            units: "Imperial",
            weightLb: fishWeightLb,
            weightOz: fishWeightOz,
            location: competition.isShore ? "Shore" : "Boat",
            angler: fishModalOptions.anglerName,
          };

    const updatedCompetition = { ...competition };
    const angler = updatedCompetition.anglers.find((o) => o.name === fish.angler);
    if (angler) {
        angler.fish.push(fish);
    }
    setCompetition(updatedCompetition);
    fishModalOptions.hideModal();
    setFishType("ANGLER FISH");
  };

  return (
    <Modal show={fishModalOptions.show} backdrop="static">
      <Modal.Header>Add Fish</Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Form.Select
              onChange={(e) => {
                if (isFishType(e.target.value)) {
                  setFishType(e.target.value);
                }
              }}
              value={fishType}
            >
              {fishTypesArray.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </Form.Select>
          </Row>
          <Row>
            <Form.Select
              onChange={(e) => {
                if (isUnit(e.target.value)) {
                  setUnits(e.target.value);
                }
              }}
              value={units}
            >
              {unitsArray.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </Form.Select>
          </Row>

          {units === "Metric" && (
            <Row>
              <Form.Control
                type="number"
                onChange={(e) => setFishWeightKg(parseFloat(e.target.value))}
                placeholder="kg"
                min={0}
              />
            </Row>
          )}
          {units === "Imperial" && (
            <Row>
              <Col>
                <Form.Control
                  type="number"
                  onChange={(e) => setFishWeightLb(parseFloat(e.target.value))}
                  placeholder="lb"
                  min={0}
                />
              </Col>
              <Col>
                <Form.Control
                  type="number"
                  onChange={(e) => setFishWeightOz(parseFloat(e.target.value))}
                  placeholder="oz"
                  min={0}
                  max={16}
                />
              </Col>
            </Row>
          )}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleAddFish}>Add</Button>
        <Button onClick={() => fishModalOptions.hideModal()}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddFishModal