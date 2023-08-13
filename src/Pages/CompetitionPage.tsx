import { Carousel, Col, Container, Row } from "react-bootstrap";
import { CompetitionComponent } from "../Components/CompetitionComponent";
import ResultsComponent from "../Components/ResultsComponent";
import { AddAnglerModalProvider } from "../Context/AddAnglerModalContext";
import { AddFishModalProvider } from "../Context/AddFishModelContext";
import { CompetitionProvider } from "../Context/CompetitionContext";
import useViewport from "../Hooks/useViewPort";
import './CompetitionPage.css'


export default function CompetitionPage() {
  const viewport = useViewport();
  const doHorizontal = viewport.width >= viewport.height;

  return (
    <CompetitionProvider>
      <AddAnglerModalProvider>
        <AddFishModalProvider>
          <div className="competitionPage" >
            {doHorizontal ? (
              <Container>
                <Row >
                  <Col>
                    <CompetitionComponent />
                  </Col>
                  <Col>
                    <ResultsComponent />
                  </Col>
                </Row>
              </Container>
            ) : (<Carousel controls={true} indicators={false} interval={null} touch={true} variant={'dark'}>
                  <Carousel.Item>
                    <CompetitionComponent />
                  </Carousel.Item>
                  <Carousel.Item>
                    <ResultsComponent />
                  </Carousel.Item>
                </Carousel>
            )}
          </div>
        </AddFishModalProvider>
      </AddAnglerModalProvider>
    </CompetitionProvider>
  );
}
