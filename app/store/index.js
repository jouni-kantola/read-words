import { createStore } from "redux";
import reducer from "../reducer";

export default (data) => {
  const initialState = {
    words: data.map(item => ({ value: item, displayValue: item.toLowerCase().replace(/[^\A-zåäö]/g, ''), filtered: false }))
  };
  return createStore(reducer, initialState);
};