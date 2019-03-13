import { getMockText, getSynonyms } from '../text.service';

const fetchInitialText = () =>
    dispatch => {
        dispatch({
            type: 'FETCH_TEXT',
        });

        return getMockText()
            .then(text => dispatch({
                type: 'FINISHED_FETCHING_TEXT',
                text,
            }))
            .catch((error) => {
                dispatch({
                    type: 'ERROR_FETCHING_TEXT',
                    error,
                });
            });
    };

const fetchSynonyms = word =>
    dispatch => {
        dispatch({
            type: 'FETCH_SYNONYMS',
        });

        return getSynonyms(word).then((payload) => {
            payload.json()
                .then(synonyms => dispatch({
                    type: 'FINISHED_FETCHING_SYNONYMS',
                    word,
                    synonyms
                }))
                .catch((error) => {
                    dispatch({
                        type: 'ERROR_FETCHING_SYNONYMS',
                        error,
                    });
                });
        })
    };

const replaceWord = synonym =>
    (dispatch, getState) => {
        console.log('synonym: ', synonym);
        const state = getState();
        const asArray = state.words.value.split(' ');
        asArray[state.words.selectedIndex] = synonym;

        dispatch({
            type: 'REPLACE_SYNONYM',
            selectedIndex: -1,
            value: asArray.join(' ')
        });
    };

const selectWord = (index, word) =>
    (dispatch) => {
        dispatch({
            type: 'SELECT_WORD',
            index,
            word
        });
    };

const applyStyle = style =>
    (dispatch, getState) => {
        const selectedIndex = getState().words.selectedIndex;
        const state = getState();
        let styles = state.words.styles[selectedIndex] || [];
        if (styles && styles.includes(style) ) {
            styles = styles.filter(elem => elem !== style)
        }
        else if (styles) {
            styles.push(style)
        }

        dispatch({
            type: 'APPLY_STYLE',
            selectedIndex,
            styles
        });
    };

export {
    fetchInitialText,
    applyStyle,
    selectWord,
    fetchSynonyms,
    replaceWord
}
