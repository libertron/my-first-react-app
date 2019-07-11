import React, {Component} from 'react';

class Filters extends Component{
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(e){
        let value=e.target[e.target.type==='checkbox'?"checked":"value"];
        let name=e.target.name;
        this.props.onFilter({
            [name]:value
        });
    }

    render(){
        return(
            <div>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={this.props.filterText}
                    name="filterText"
                    onChange={this.handleChange}
                />
                <p>
                    <label>
                        <input 
                            type="checkbox"
                            checked={this.props.inStockOnly}
                            name="inStockOnly"
                            onChange={this.handleChange}    
                        /> Only show product in stock
                    </label>
                </p>
            </div>
        ); 
    };
}

export default Filters;