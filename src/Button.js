import React, {Component} from 'react';

class Button extends Component{
    constructor(props){
        super(props);
        this.state={
            foo:'Click me!'
        };
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({
            foo:'bar'
        });
    }
    render(){
        return(
          <button onClick={this.handleClick}>{this.state.foo}</button>  
        );
    };
}

export default Button;