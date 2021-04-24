import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addCard} from '../actions/index'
import Addbutton from './Addbutton'
import {v1 as uuid} from "uuid";
class Add extends Component {

    constructor() {
        super();
        this.state = {
            id: uuid(),
            Image: "",
            Title: "",
            Released: "",
            Runtime: "",
            Rating:"",
            description:"",
            Video:""
        }
    }

    handleAdd = e => {
        e.preventDefault();
        this.props.addCard({
            id: uuid(),
            Image: this.state.Image,
            Title: this.state.Title,
            Released: this.state.Released,
            Runtime: this.state.Runtime,
            Rating: this.state.Rating,
            description: this.state.description,
            Video: this.state.Video
        });
        
    };


    render() {
        return (
            <div className="add" >
                <div class="container">

                    <div   data-toggle="modal" data-target="#myModal">
                        <Addbutton /> 
                    </div>
                    <div class="modal" id="myModal">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <h4> Ajouter un nouveau film </h4>
                                <div>
                                    <div class="modal-body">
                                         <input placeholder="Entrer l'image du film"
                                            value={this.state.Image}
                                            onChange={event => {
                                                this.setState({
                                                    Image: event.target.value
                                                })
                                            }} />
                                        
                                    </div>
                                    <div class="modal-body">
                                       <input placeholder="Entrer le nom du film "
                                            value={this.state.Title}
                                            onChange={event => {
                                                this.setState({
                                                    Title: event.target.value
                                                })
                                            }} />
                                        
                                    </div>
                                    <div class="modal-body">
                                        <input placeholder="Enter la date du film"
                                            value={this.state.Released}
                                            onChange={event => {
                                                this.setState({
                                                    Released: event.target.value
                                                })
                                            }} />
                                        
                                    </div>
                                    <div class="modal-body">
                                        <input placeholder="Enter la durée du film"
                                            value={this.state.Runtime}
                                            onChange={event => {
                                                this.setState({
                                                    Runtime: event.target.value
                                                })
                                            }} />
                                        
                                    </div>
                                    <div class="modal-body">
                                        <input placeholder="Entrer le rating du film"
                                            value={this.state.Rating}
                                            onChange={event => {
                                                this.setState({
                                                    Rating: event.target.value
                                                })
                                            }} />
                                        
                                    </div>
                                    <div class="modal-body">
                                        <input placeholder="Entrer la description du film"
                                            value={this.state.description}
                                            onChange={event => {
                                                this.setState({
                                                    description: event.target.value
                                                })
                                            }} />
                                        
                                    </div>
                                    <div class="modal-body">
                                        <input placeholder="Entrer lien du BD du film"
                                            value={this.state.Video}
                                            onChange={event => {
                                                this.setState({
                                                    Video: event.target.value
                                                })
                                            }} />
                                        
                                    </div>
                                    
                                </div>
                                <div class="modal-footer">
                                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" onClick={el => this.handleAdd(el)}>Ajoutez Votre Film</button>
                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Fermer</button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
const d = dispatch => ({
    addCard : (payload) => dispatch (addCard(payload))
 })
export default connect(null,d) (Add)