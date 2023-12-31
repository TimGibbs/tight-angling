import { Button } from "react-bootstrap";
import { useAnglerModal } from "../Context/AddAnglerModalContext";
import { useCompetition } from "../Context/CompetitionContext";
import { ReactComponent as RodIcon} from "../Images/rod.svg";
import AnglerComponent from "./AnglerComponent";
import './AnglersComponent.css'


const AnglersComponent = () => {
  const [competition] = useCompetition();
  const x = useAnglerModal();

  return (
    <div className="anglersComponent">
      {competition.anglers.map((angler, index) => (
        <AnglerComponent key={"angler" + index} angler={angler} />
      ))}
      <Button onClick={() => x.showModal()}>+ <RodIcon fill='white' stroke='white'/></Button>
    </div>
  );
};

export default AnglersComponent;
