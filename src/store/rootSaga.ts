import { useDispatch } from "react-redux";
import { all } from "redux-saga/effects";
import { designerAction } from "./designer/designerSlice";

function* hello() {

}

export default function* rootSaga() {
  yield all([hello()]);
}
