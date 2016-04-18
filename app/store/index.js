import { createStore } from "redux";
import reducer from "../reducer";

export default (data = {words: []}) => {
  return createStore(reducer, data);
};