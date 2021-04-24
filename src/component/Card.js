import React, { Component } from 'react'
import {connect} from 'react-redux'
import Rating from '../component/Rating'
import {edit,rating,remove} from '../actions/index'
import {Link} from 'react-router-dom'
import Edit from '../component/Edit'
import Descriptionimg from '../assests/descriptionimg.png'
import Deleteimg from '../assests/deleteimg.png'

class Card extends Component {
    constructor(props){
        super(props)
        this.state={
           
        }
      }
      
         
         render() {
            return (
            <div className="container">
                {this.props.cards.filter(el=>el.Rating>= this.props.stars && el.Title.toLowerCase().includes(this.props.search.toLowerCase())).map(el=>
                <div className="movie-card">
                <img className="movie-header" src={el.Image}></img>

                <div className="movie-content">
                    <div className="movie-content-header">
                        <h3 className="movie-title">{el.Title} </h3>
                        <span id="time"> {el.Runtime} </span>
                        <Rating number={el.Rating}/>
                    </div>
                    
                        
                        {/* <div className="info-section">
                            <label>Released</label>
                            <span>{el.Released}</span>
                        </div> */}
                        {/* <div className="info-section">
                            <label>Runtime</label>
                            <span>{el.Runtime}</span>
                        </div> */}

                        
                        <div>
                            <Link to={`/desc/${el.id}`} >
                        <button className="cerclebtn"> <img src={Descriptionimg} /> </button>
                        </Link>
                        </div>
                        
                        <Edit   />
                        <button className="cerclebtn" onClick={() => this.props.remove(el.id)}> <img src={Deleteimg} /> </button>
                        
                      
                    
                </div>
            </div>
                  )}
        </div>

        )
    }
}
    const s = state => {
        return{ ...state,stars:state.rating}
      }
      const d = dispatch => {
        return {
        edit:payload => dispatch(edit(payload)),
        remove:payload => dispatch(remove(payload)),
        rating:payload => dispatch(rating(payload))
        }
     }
      
export default connect (s,d) (Card);