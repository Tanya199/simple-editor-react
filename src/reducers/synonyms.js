const words = (state = { dictionary: {} }, action) => {
  switch (action.type) {
      case 'FETCH_SYNONYMS':
          return {
              ...state,
              loading: true,
          }
      case 'FINISHED_FETCHING_SYNONYMS':
          return {
              ...state,
              loading: false,
              dictionary: {
                  ...state.dictionary,
                  [action.word]: action.synonyms
              },
          }
      case 'ERROR_FETCHING_SYNONYMS':
          return {
              ...state,
              loading: false, 
              error: action.error
          }
      default:
          return state
  }
}

export default words;