import React, {Component} from 'react';

class Filters extends Component{
    render(){
        return(
            <div>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={this.props.filterText}
                />
                <p>
                    <label>
                        <input 
                            type="checkbox"
                            checked={this.props.inStockOnly}    
                        /> Only show product in stock
                    </label>
                </p>
            </div>
        ); 
    };
}

export default Filters;