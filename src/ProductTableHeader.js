import React, {Component} from 'react';
import './ProductTableHeader.css';

class ProductTableHeader extends Component{
    render(){
        return(
            <th>
                {this.props.column}
                <button className={this.props.currentSort.direction==='asc'?"ProductTableHeader-current":""}>&#x25B2;</button>
                <button className={this.props.currentSort.direction==='desc'?"ProductTableHeader-current":""}>&#x25BC;</button>
            </th>
        );
    };
}

export default ProductTableHeader; 