import React, {Component} from 'react';
import ChangeColorButton from './ChangeColorButton';

class ColoredBlock extends Component{
    constructor(props){
        super(props);
        this.state={
            backgroundColor:"red"
        };
        this.changeColor=this.changeColor.bind(this);
    };

    changeColor(){
        this.setState((prevState)=>{
            let newColor=prevState.backgroundColor==='red'?'blue':'red';
            return {
                backgroundColor:newColor
            };
        });
    };

    render(){
        return(
            <div style={{width:"200px",height:"200px",backgroundColor: this.state.backgroundColor}}>
                <ChangeColorButton onClick={this.changeColor} currentColor={this.state.backgroundColor}/>
            </div>
        );
    };
}

export default ColoredBlock;