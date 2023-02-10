import { ActionType } from '../action_types'

interface SearchRepositoriesSearchAction {
  type: ActionType.SEARCH_REPOSITORIES;
}``

interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action = SearchRepositoriesSearchAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction;