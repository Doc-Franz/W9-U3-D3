import { Component } from "react";
import CommentList from "./Commentlist";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    reviews: []
  };
  fetchComments = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MGVmZThhZDEyOTAwMTU4NzZiY2MiLCJpYXQiOjE3MzI4MDU0MDEsImV4cCI6MTczNDAxNTAwMX0.2twewSFvDE-W-xMJm5eskZP3vVV_ix-G-1ld8yY8cNk"
      }
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("errore nella chiamata");
        }
      })
      .then((reviews) => {
        this.setState({ reviews });
      });
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    return (
      <>
        <CommentList reviews={this.state.reviews} />
        <AddComment id={this.props.asin} />
      </>
    );
  }
}

export default CommentArea;
