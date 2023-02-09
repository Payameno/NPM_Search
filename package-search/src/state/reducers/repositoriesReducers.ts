interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface SearchRepositoriesSearchAction {
  type: 'search_repositories';
}

interface SearchRepositoriesSuccessAction {
  type: 'search_repositories_success';
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: 'search_repositories_error';
  payload: string;
}

const reducer = (state: RepositoriesState, action: SearchRepositoriesSearchAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction): RepositoriesState => {

  switch(action.type) {
    case 'search_repositories':
      return {loading: true, error: null, data: []}
    case 'search_repositories_success':
      //bsc of Switch typescript is 100% sure that action here is of type SearchRepositoriesSuccessAction
      return {loading: false, error: null, data: action.payload}
    case 'search_repositories_error':
      return {loading: false, error: action.payload, data: []}
    default:
      return state;
  }

}

export default reducer;