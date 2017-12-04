import { combineEpics } from "redux-observable";
import { ADD_NODE, addNode } from "../actions";
import { Observable } from "rxjs";
import "rxjs/add/operator/do";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/ignoreElements";

function loadStoriesEpic(action$) {
  return action$
    .ofType(ADD_NODE)
    .do(action => console.log(action))
    .ignoreElements();
}

export const rootEpic = combineEpics(loadStoriesEpic);
