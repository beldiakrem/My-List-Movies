import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { edit } from "../actions";
import Editimg from '../assests/editimg.png'
import {v1 as uuid} from "uuid";

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      Image: "",
      Title: "",
      Released: "",
      Runtime: "",
      Rating:"",
      
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this)
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  handleUpdate = () => {
    this.props.edit(this.props.cards.id, {
        Image: this.state.Image,
        Title: this.state.Title,
        Released: this.state.Released,
        Runtime: this.state.Runtime,
        Rating: this.state.Rating
    });
    this.toggle();
    console.log(this)
  };

  render() {
    
    return (
      <div>
        <button
          className="cerclebtn"
          onClick={() => {
            this.setState({
                Image: this.state.Image,
                Title: this.state.Title,
                Released: this.state.Released,
                Runtime: this.state.Runtime,
                Rating: this.state.Rating
            });
            this.toggle();
          }}
        >
          <img src={Editimg} />
        </button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Update Movie</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="image">Image</Label>
                <Input
                  type="text"
                  value={this.state.Image}
                  name="Image"
                  id="image"
                  placeholder="movie image"
                  onChange={e => this.handleChange(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input
                  type="text"
                  value={this.state.Title}
                  name="Title"
                  id="title"
                  placeholder="movie title"
                  onChange={e => this.handleChange(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="released">Released</Label>
                <Input
                  type="text"
                  value={this.state.Released}
                  name="Released"
                  id="released"
                  placeholder="Relesed"
                  onChange={e => this.handleChange(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="runtime">Runtime</Label>
                <Input
                  type="text"
                  value={this.state.Runtime}
                  name="Runtime"
                  id="runtime"
                  placeholder="Runtime"
                  onChange={e => this.handleChange(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="rating">Rating</Label>
                <Input
                  type="text"
                  value={this.state.Rating}
                  name="Rating"
                  id="rating"
                  placeholder="Rating"
                  onChange={e => this.handleChange(e)}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleUpdate}>
              SAVE
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
const d = dispatch => ({
  edit: (id, cards) => dispatch(edit(id, cards)),
});

export default connect( null,d)(Edit);
