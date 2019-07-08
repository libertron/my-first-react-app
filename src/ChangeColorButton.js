import React, {Component} from 'react';

class ChangeColorButton extends Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        this.props.onClick(); 
    }

    render(){
        return(
            <button onClick={this.handleClick}>Change the Color</button>
        );
    };
}

export default ChangeColorButton;