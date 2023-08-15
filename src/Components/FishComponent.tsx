import { Button } from "react-bootstrap";
import { useCompetition } from "../Context/CompetitionContext";
import { scoreFish } from "../Functions/scoreFish";
import { ReactComponent as DeleteIcon} from "../Images/delete.svg";
import { Fish } from "../Types/Types";

interface FishComponentProps {
  fish: Fish;
}

const FishComponent: React.FC<FishComponentProps> = ({ fish }) => {
  const [competition, setCompetition] = useCompetition();
  const score = scoreFish(fish, competition.region);

    const deleteFish = () =>{
        const updatedCompetition = { ...competition };
        const angler = updatedCompetition.anglers.find((o) => o.name === fish.angler);
        if (angler) {
            angler.fish = angler.fish.filter(f=>f!==fish);
        }
        setCompetition(updatedCompetition);
    }

  return (
    <tr>
      <td>{fish.fishType}</td>
      <td>
      {fish.units === "Metric" 
      ? fish.weightKg +'kg'
      : `${fish.weightLb}lb ${fish.weightOz}oz`}
      </td>
      <td>{score}</td>
      <td>
        <Button variant="danger" className="deleteButton"
            onClick={deleteFish}>
              <DeleteIcon stroke='white'/>
        </Button>
      </td>
    </tr>
  );
};

export default FishComponent;
