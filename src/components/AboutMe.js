import {Col, Container, Row} from "react-bootstrap";
import imgMe from "../assets/img/me.jpeg";

export const AboutMe = () => {
    return (
        <section className="aboutMe">
            <Container>
                <Row>
                    <Col>
                        <h2>About Me</h2>
                        <img className="me-img img-fluid rounded-circle" src={imgMe}  alt="image url"/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}