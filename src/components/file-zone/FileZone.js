import React, { Component } from 'react';
import { Text } from '../text/Text';
import './FileZone.css';

class FileZone extends Component {
    
    renderText = () => {
        const { text, styles, selectWord } = this.props;
        return text.split(' ').map((value, index) => {
            const onClick = () => selectWord(index, value);
            return <Text    
                        key={index} 
                        styles={styles[index]}
                        onClick={onClick}
                        value={`${value}`}
                    />
        })
    }
    
    render() {
        return (
            <div id="file-zone">
                <div id="file"> 
                    {this.renderText()}
                </div>
            </div>
        );
    }
}

export default FileZone;
