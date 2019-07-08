import React, {Component} from 'react';
import './ProductRow.css';

class ProductRow extends Component{
    render(){
        return(
            <tr>
                <span className={this.props.product.stocked ? '':'ProductRow-out-of-stock'}><td>{this.props.product.name}</td></span>
                <td>{this.props.product.price}</td>
                <td><button onClick={this.destroy} style={{backgroundColor:'red'}}>x</button></td>
            </tr>
        );
    };
}

export default ProductRow;