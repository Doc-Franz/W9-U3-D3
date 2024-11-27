import { Component } from "react";
import { Button, Card, Col } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false
  };

  handleSelected = () => {
    this.setState({ selected: true });
  };

  render() {
    return (
      <Col className="mb-3">
        <Card style={{ height: "800px" }} onClick={this.handleSelected} className={this.state.selected && "border border-danger"}>
          <Card.Img variant="top" src={this.props.src} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>Some quick example text to build on the card title and make up the bulk of the content.</Card.Text>
            <Button variant="primary" className="pb-2">
              Go somewhere
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
