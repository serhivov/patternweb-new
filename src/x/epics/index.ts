import { combineEpics } from "redux-observable";
import { REMOVE_NODE } from "../actions";
import { Observable } from "rxjs";
import "rxjs/add/operator/do";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/ignoreElements";

const removeRelatedEdgesEpic = action$ =>
  action$
    .ofType(REMOVE_NODE)
    .do(action => console.log(action))
    // .switchMap(({id}) => {
    //   console.log('removeEdge', id)
    // })
    .ignoreElements();

export const rootEpic = combineEpics(removeRelatedEdgesEpic);
