import { Container, Row, Col, CardBody, Card, CardSubtitle, CardText, CardTitle, Button } from "reactstrap";
import product1 from "./../images/product_1.jpg";
import product2 from "./../images/product_2.jpg";
import product3 from "./../images/product_3.jpg";
import product4 from "./../images/product_4.jpg";
export default function Layout() {
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        fontFamily: "Arial",
    };
    return (
        <div>
            <Container>
                <Row>
                    <Col sm="4" md="3" xs="6">
                        <Card>
                            <img alt="Sample" src={product1} />
                            <CardBody className="text-center">
                                <CardTitle tag="h5">Fossil</CardTitle>

                                <CardText>Bering rose gold steal mess</CardText>
                                <p>Price: 100$</p>
                                <Button>Add to card</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="4" md="3" xs="6">
                        <Card>
                            <img alt="Sample" src={product2} />
                            <CardBody className="text-center">
                                <CardTitle tag="h5">Fossil</CardTitle>

                                <CardText>Bering rose gold steal mess</CardText>
                                <p>Price: 100$</p>
                                <Button>Add to card</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="4" md="3" xs="6">
                        <Card>
                            <img alt="Sample" src={product3} />
                            <CardBody className="text-center">
                                <CardTitle tag="h5">Fossil</CardTitle>

                                <CardText>Bering rose gold steal mess</CardText>
                                <p>Price: 100$</p>
                                <Button>Add to card</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="4" md="3" xs="6">
                        <Card>
                            <img alt="Sample" src={product4} />
                            <CardBody className="text-center">
                                <CardTitle tag="h5">Fossil</CardTitle>

                                <CardText>Bering rose gold steal mess</CardText>
                                <p>Price: 100$</p>
                                <Button>Add to card</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
