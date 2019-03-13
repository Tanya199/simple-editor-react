import React, { Component } from 'react';
import classNames from 'classnames';
import './ControlPanel.css';

class ControlPanel extends Component {
    render() {

        const { applyStyle, appliedStyles = [] } = this.props;

        return (
            <div id="control-panel">
                <div id="format-actions">
                    <button 
                        className={classNames("format-action", {"selected": appliedStyles.includes('bold')})}
                        type="button" 
                        onClick={() => applyStyle('bold')}>
                        <b>B</b>
                    </button>
                    <button 
                        className={classNames("format-action", {"selected": appliedStyles.includes('italic')})}
                        type="button"
                        onClick={() => applyStyle('italic')}>
                        <i>I</i>
                    </button>
                    <button 
                        className={classNames("format-action", {"selected": appliedStyles.includes('underline')})}
                        type="button"
                        onClick={() => applyStyle('underline')}>
                        <u>U</u>
                    </button>
                </div>
            </div>
        );
    }
}

export default ControlPanel;
