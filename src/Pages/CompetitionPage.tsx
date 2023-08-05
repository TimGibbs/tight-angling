import { Col, Container, Row } from "react-bootstrap"
import { CompetitionComponent } from "../Components/CompetitionComponent"
import { ResultsComponent } from "../Components/ResultsComponent"
import { CompetitionProvider } from "../Context/CompetitionContext"
import useViewport from "../Hooks/useViewPort"

export default function CompetitionPage() {
    var viewport = useViewport();
    var doHorizontal = viewport.width>=viewport.height
    return <div>
        <CompetitionProvider>
            {doHorizontal && 
            <Container>
                <Row>
                    <Col>
                        <CompetitionComponent/>
                    </Col>                    
                    <Col>
                        <ResultsComponent/>
                    </Col>
                </Row>
            </Container>}
            {!doHorizontal &&
                <Container>
                    <CompetitionComponent/>
                    <ResultsComponent/>
                </Container>
            }

        </CompetitionProvider>
    </div>


}



