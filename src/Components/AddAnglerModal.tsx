import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useAnglerModal } from "../Context/AddAnglerModalContext";
import { useCompetition } from "../Context/CompetitionContext";

export const AddAnglerModel = () => {
    const [anglerName, setAnglerName] = useState<string>('');
    const [competition, setCompetition] = useCompetition();
    const x = useAnglerModal()

    const handleClose = () => {
        setCompetition({...competition, anglers:[...competition.anglers, {name:anglerName, fish:[]}]})
        x.hideModal()
        setAnglerName('');
    }

    return <Modal show={x.show} backdrop='static' >
                <Modal.Header>Add Angler</Modal.Header>
                <Modal.Body>
                    <Form.Control type='text' 
                        onChange={(e)=>setAnglerName(e.target.value)} 
                        onKeyDown={(e)=>{if(e.key === "Enter"){handleClose()} }} 
                        value={anglerName} placeholder='Name'/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}
                >Add</Button>
                    <Button onClick={()=> {x.hideModal(); setAnglerName('');}} >Cancel</Button>
                </Modal.Footer>
            </Modal>
}

