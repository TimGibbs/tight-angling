import { Accordion, Button, Card, Table } from "react-bootstrap";
import { useFishModal } from "../Context/AddFishModelContext";
import { useCompetition } from "../Context/CompetitionContext";
import { getAnglerScore } from "../Functions/getAnglerScore";
import { Angler } from "../Types/Types";
import FishComponent from "./FishComponent";
import { ReactComponent as DeleteIcon} from "../Images/delete.svg"
import { ReactComponent as FishIcon} from "../Images/fish2.svg";

interface AnglerComponentProps {
  angler: Angler;
}

const AnglerComponent: React.FC<AnglerComponentProps> = ({ angler }) => {
  const [competition, setCompetition] = useCompetition();
  const fishModalOptions = useFishModal();

  return (
    <Card className="anglerComponent">
        <Accordion>
        <Accordion.Header>
            <div className="anglerComponentHeader">
                <Button variant="danger" className="deleteButton"
                onClick={()=>setCompetition({...competition, anglers:competition.anglers.filter(o=>o!==angler)})}>
                    <DeleteIcon stroke='white'/>
                </Button>
                <h5 className="heading">
                    {angler.name} - {getAnglerScore(angler, competition.limitations, competition.region)}
                </h5>
            </div>
        </Accordion.Header>
        <Accordion.Body className="anglerComponentBody">
            <Table>
                <thead>
                    <tr>
                        <th>Fish</th>
                        <th>Weight</th>
                        <th>Score</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {angler.fish.map((fish, index) => (
                    <FishComponent key={`fish-${index}`} fish={fish} />
                ))}
                </tbody>
            </Table>

            <Button onClick={() => fishModalOptions.showModal(angler.name)}>
                + <FishIcon stroke="white" fill="white"/>
            </Button>
        </Accordion.Body>
        </Accordion>
    </Card>
  );
};

export default AnglerComponent;
