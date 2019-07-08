import React, {Component} from 'react';

class Filters extends Component{
    render(){
        return(
            <div>
                <input type="text" placeholder="Search..." />
                <p>
                    <label>
                        <input type="checkbox" /> Only show product in stock
                    </label>
                </p>
            </div>
        ); 
    };
}

export default Filters;