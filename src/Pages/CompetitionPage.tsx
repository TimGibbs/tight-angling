import { Col, Container, Row } from "react-bootstrap";
import { CompetitionComponent } from "../Components/CompetitionComponent";
import ResultsComponent from "../Components/ResultsComponent";
import { AddAnglerModalProvider } from "../Context/AddAnglerModalContext";
import { AddFishModalProvider } from "../Context/AddFishModelContext";
import { CompetitionProvider } from "../Context/CompetitionContext";
import useViewport from "../Hooks/useViewPort";

export default function CompetitionPage() {
  const viewport = useViewport();
  const doHorizontal = viewport.width >= viewport.height;

  return (
    <CompetitionProvider>
      <AddAnglerModalProvider>
        <AddFishModalProvider>
          <Container>
            {doHorizontal ? (
              <Row>
                <Col>
                  <CompetitionComponent />
                </Col>
                <Col>
                  <ResultsComponent />
                </Col>
              </Row>
            ) : (<>
                  <CompetitionComponent />
                  <ResultsComponent />
                </>
            )}
          </Container>
        </AddFishModalProvider>
      </AddAnglerModalProvider>
    </CompetitionProvider>
  );
}
