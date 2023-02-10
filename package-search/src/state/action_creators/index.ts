import axios from 'axios';
import { ActionType } from '../action_types';
import { Dispatch } from 'redux';
import { Action } from '../actions';

interface APIResponse {
  objects: Array<{[key: string]: any}>
}

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES
    });

    try {
      const data = await axios.get('https://registry.npmjs.org/-/v1/search', {
        params: {
          text: term
        }
      }) as APIResponse;

      const names = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      })
    } catch(err: any) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message
      });
    }
  }
}