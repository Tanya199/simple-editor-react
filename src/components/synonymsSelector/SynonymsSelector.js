import React, { Component } from 'react';
import './SynonymsSelector.css';

class SynonymsSelector extends Component {
    renderPopUp = synonyms => {
        return (
            <div className="popup">
                <span> Synonyms: </span>
                {synonyms.map((synonym, index) => {
                    const onClick = () => this.props.replaceWord(synonym.word);
                    return (
                        <span
                            className="synonym"
                            key={index}
                            onClick={ onClick}
                        > {synonym.word}  </span>
                    )
                })}
            </div>
        )
    }

    render() {
        const { synonyms, loading } = this.props;
        if (!synonyms || !synonyms.length ) return null
        else if (loading) return <span> Loading ... </span>
        return (
            this.renderPopUp(synonyms)
        );
    }
}

export default SynonymsSelector;