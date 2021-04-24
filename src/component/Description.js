import React from "react";
import { connect } from "react-redux";
import { remove } from "../actions/index";
import Rating from '../component/Rating'
import Dateimg from '../assests/dateimg.png'
import Timeimg from '../assests/timeimg.png'



const Description = props => {
  const { id } = props.match.params;
  const { cards } = props;

  return (
    <div >
      {/* <i className="row">
        <Link to="/">
          <i class="fas fa-arrow-left"></i>
        </Link>
      </i> */}
      {!cards.filter(el => el.id == id).length ? (
        <div class="oops ">
          <h1 >Oops!!</h1>
          <p >On Ne Trouve Pas Ce Film ...</p>
        </div>
      ) : (
        cards
          .filter(el => el.id === id)
          .map(el => (
            <div className="descr">
              <div className="movie-card">
                <img className="movie-header" src={el.Image}></img>
              </div>
              <div className="droit">
                <h1 className="movie-title">{el.Title} </h1>
                <Rating number={el.Rating} />
                <div className="description">
                  <h4> Description: </h4>
                  <p> {el.description} </p>
                  <div className="timedate"> <img src={Timeimg} /> <h6> {el.Runtime} </h6> </div>
                  <div className="timedate" > <img src={Dateimg} /> <h6> {el.Released} </h6> </div>
                  <iframe width="900" height="500" src={el.Video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                </div>
              </div>
            
            </div>
          ))
      )}
    </div>
  );
};
const mapStateToProps = state => ({
  cards: state.cards,
});
const mapDispatchToProps = dispatch => ({
  remove: cards => dispatch(remove(cards)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Description);