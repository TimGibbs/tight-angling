import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useAnglerModal } from "../Context/AddAnglerModalContext";
import { useCompetition } from "../Context/CompetitionContext";

export const AddAnglerModel = () => {
    const [anglerName, setAnglerName] = useState<string>('');
    const [competition, setCompetition] = useCompetition();
    const x = useAnglerModal()

    return <Modal show={x.show} backdrop='static' >
                <Modal.Header>Add Angler</Modal.Header>
                <Modal.Body>
                    <Form.Control type='text' onChange={(e)=>setAnglerName(e.target.value)} value={anglerName} placeholder='Name'></Form.Control>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={()=>{
                        setCompetition({...competition, anglers:[...competition.anglers, {name:anglerName, fish:[]}]})
                        x.hideModal()
                        setAnglerName('');
                    }
                }>Add</Button>
                    <Button onClick={()=> {x.hideModal(); setAnglerName('');}} >Cancel</Button>
                </Modal.Footer>
            </Modal>
}

