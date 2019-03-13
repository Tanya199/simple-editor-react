import React, {Component} from 'react';
import { connect } from 'react-redux';
import Editor from './components/editor/Editor';
import { fetchInitialText, applyStyle, selectWord, fetchSynonyms, replaceWord } from './actions/index';
import './App.css';

class App extends Component {
    state = {
        loading: true,
        text: undefined
    }

    componentDidMount() {
        this.props.getInitialText();
    }

    render() {

        const { words, styles, selectWord, selectedWord, selectedIndex, applyStyle, appliedStyles, synonyms, loadingSynonyms, replaceWord } = this.props;

        return (
            <div className="App">
                <header>
                    <span>Simple Text Editor</span>
                </header>
                <main>
                    { words ?
                    <Editor 
                        text={words}
                        styles={styles}
                        selectWord={selectWord}
                        selectedIndex={selectedIndex}
                        selectedWord={selectedWord}
                        applyStyle={applyStyle}
                        appliedStyles={appliedStyles}
                        synonyms={ synonyms }
                        loadingSynonyms={ loadingSynonyms }
                        replaceWord={ replaceWord }
                    /> : <span>Loading...</span>}
                </main>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    words: state.words.value,
    selectedIndex: state.words.selectedIndex,
    selectedWord: state.words.selectedWord,
    styles: state.words.styles,
    synonyms: state.synonyms.dictionary,
    appliedStyles: state.words.selectedIndex ? state.words.styles[state.words.selectedIndex] : undefined,
    loadingSynonyms: state.synonyms.loading
})

const mapDispatchToProps = dispatch => ({
    getInitialText: () => dispatch(fetchInitialText()),
    applyStyle: style => dispatch(applyStyle(style)),
    replaceWord: synonym => dispatch(replaceWord(synonym)),
    selectWord: (index, word) => {
        dispatch(fetchSynonyms(word));
        dispatch(selectWord(index, word));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
