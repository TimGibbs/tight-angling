import { Button } from "react-bootstrap";
import { useAnglerModal } from "../Context/AddAnglerModalContext";
import { useCompetition } from "../Context/CompetitionContext";
import AnglerComponent from "./AnglerComponent";

const AnglersComponent = () => {
  const [competition] = useCompetition();
  const x = useAnglerModal();

  return (
    <div style={{ paddingTop: "15px" }}>
      <h4>Anglers</h4>
      {competition.anglers.map((angler, index) => (
        <AnglerComponent key={"angler" + index} angler={angler} />
      ))}
      <Button onClick={() => x.showModal()}>+</Button>
    </div>
  );
};

export default AnglersComponent;