import { useState } from "react";
import { Container, Form, Table } from "react-bootstrap";
import RegionA from "../Data/RegionA";
import { Regions } from "../Data/Regions";
import { Region } from "../Types/Types";

export default function RegionDetailsPage() {
    const [region, setRegion] =useState<Region>(RegionA);

return (
    <Container>
         <Form.Select onChange={(e)=>{
                var r = Regions.find(o=>o.letter === e.target.value);
                if(r !== undefined) { setRegion(r)}}}
                value = {region.letter}
                style={{ textAlign: "center" }} >
            {Regions.map((o,i)=><option key={o.letter} value={o.letter}>{o.name}</option>)}
        </Form.Select>
        <Table>
            <thead>
                <tr>
                    <th>Species</th>
                    <th colSpan={2}>Boat</th>
                    <th colSpan={2}>Shore</th>
                </tr>
                <tr>
                    <th></th>
                    <th>Lb-Oz</th>
                    <th>kg-gm</th>
                    <th>Lb-Oz</th>
                    <th>kg-gm</th>
                </tr>
            </thead>
            <tbody>
                {region.values.map((fish,index)=>(<tr key={"regionRow"+index}>
                    <td>{fish.fishType}</td>
                    <td>{fish.boatLb}</td>
                    <td>{fish.boatKg}</td>
                    <td>{fish.shoreLb}</td>
                    <td>{fish.shoreKg}</td>
                </tr>))}
            </tbody>
        </Table>
    </Container>
);

}