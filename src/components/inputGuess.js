import React from 'react';



export default class InputGuess extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
    }


    onSubmit(event) {
        event.preventDefault();
        const text = event.target.guess.value.trim();
        // const text = this.textInput.value.trim();
        if (text) {
            this.props.onAction(text);
        }
        event.target.guess.value = '';
    }
    

    render() {
        return (
            <form className=" inputGuess-form" onSubmit={(e) => this.onSubmit(e)}>

            <label htmlFor={this.props.id}>{this.props.label}</label>

            <input name="guess" type="number" 
            id={this.props.id} min={this.props.min} max={this.props.max}  
                value={this.props.value} />

           <button>Guess! </button>
            
            </form>
        )
       
    };
}
