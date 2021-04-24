import { ADD, SEARCH, RATING, EDIT, REMOVE } from "../const/actionType";

export const addCard = payload => {
  return {
    type: ADD,
    payload
  };
};

export const search = payload => {
  return {
    type: SEARCH,
    payload
  };
};

export const rating = payload => {
  return {
    type: RATING,
    payload
  };
};

export const edit = (payload, id) => {
  return{
      type: EDIT ,
      payload,
      id
  }
}


export const  remove = (payload, id) => {
  return{
      type: REMOVE ,
      payload,
      id
  }
}
