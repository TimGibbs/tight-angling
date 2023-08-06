import { Button } from "react-bootstrap";
import { useAnglerModal } from "../Context/AddAnglerModalContext";
import { useCompetition } from "../Context/CompetitionContext";
import AnglerComponent from "./AnglerComponent";

export const AnglersComponent = () => {
    const [competition] = useCompetition();
    const x = useAnglerModal();
    return <div style={{ paddingTop: "15px" }}>

        <h4>Anglers</h4>
        {competition.anglers.map((o, i) => <AnglerComponent key={'angler' + i} angler={o} />)}
        <Button onClick={() => x.showModal()}>+</Button>
    </div>;
};
