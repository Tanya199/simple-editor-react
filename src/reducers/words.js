const words = (state = { styles: {} }, action) => {
  switch (action.type) {
      case 'APPLY_STYLE':
          return {
              ...state,
              styles: {
                  ...state.styles,
                  [action.selectedIndex]: action.styles
              }
          }
      case 'SELECT_WORD':
          return {
              ...state,
              selectedIndex: action.index,
              selectedWord: action.word,
          }
      case 'REPLACE_SYNONYM':
          return {
              ...state,
              value: action.value,
          }
      case 'FETCH_TEXT':
          return {
              ...state,
              loading: true,
          }
      case 'FINISHED_FETCHING_TEXT':
          return {
              ...state,
              loading: false,
              value: action.text
          }
      case 'ERROR_FETCHING_TEXT':
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