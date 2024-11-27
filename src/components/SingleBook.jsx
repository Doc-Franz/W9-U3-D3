import { Component } from "react";
import { Button, Card, Col } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false
  };

  handleCardClick = () => {
    if (!this.state.selected) {
      this.setState({ selected: true });
    }
  };

  handleImageClick = () => {
    if (this.state.selected) {
      this.setState({ selected: false });
    }
  };

  render() {
    return (
      <Col className="mb-3">
        <Card style={{ height: "800px" }} onClick={this.handleCardClick} className={this.state.selected ? "border border-danger" : ""}>
          <Card.Img variant="top" src={this.props.src} onClick={this.handleImageClick} />
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
