import React from "react";
import './button.css';

const sayLabel = () => {
    alert(`A label desse botão é Clique Aqui `)
}

class Button extends React.Component {
    render(index) {
        return (
            <button key={index} className="btn" onClick={sayLabel}>{this.props.label}</button>
        )
    }
}

Button.defaultProps = {
    label: 'Clique Aqui'
}

export default Button