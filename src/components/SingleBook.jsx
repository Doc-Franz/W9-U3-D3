import { Component } from "react";
import { Button, Card, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false
  };

  render() {
    const { book } = this.props;
    return (
      <Col className="mb-3">
        <Card className={this.state.selected ? "border border-danger" : ""}>
          <Card.Img variant="top" src={book.img} onClick={() => this.setState({ selected: !this.state.selected })} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>Some quick example text to build on the card title and make up the bulk of the content.</Card.Text>
            <Button variant="success" className="pb-2">
              Buy it!
            </Button>
            {this.state.selected && <CommentArea asin={book.asin} />}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
