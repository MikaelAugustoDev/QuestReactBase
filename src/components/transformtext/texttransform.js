import React from "react";
import './texttransform.css';

class TextTransformation extends React.Component {
    render() {
        return (
            <div className="text">
                <p>{this.props.paragraph}</p>
            </div>
        )
    }
}

export default TextTransformation