import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Competition } from "../Types/Types";

export const AddAnglerModel = ({show,onClose, competition, setCompetition} : {show:boolean, onClose:()=>void, competition:Competition, setCompetition:(competition:Competition)=>void}) => {
    const [anglerName, setAnglerName] = useState<string>('');
    

    return <Modal show={show} backdrop='static' >
                <Modal.Header>Add Angler</Modal.Header>
                <Modal.Body>
                    <Form.Control type='text' onChange={(e)=>setAnglerName(e.target.value)} value={anglerName} placeholder='Name'></Form.Control>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={()=>{
                        setCompetition({...competition, anglers:[...competition.anglers, {name:anglerName, fish:[]}]})
                        onClose();
                        setAnglerName('');
                    }
                }>Add</Button>
                    <Button onClick={()=> {onClose(); setAnglerName('');}} >Cancel</Button>
                </Modal.Footer>
            </Modal>
}

