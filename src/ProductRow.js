import React, {Component} from 'react';
import './ProductRow.css';

class ProductRow extends Component{

    constructor(props){
        super(props);
        this.destroy=this.destroy.bind(this);
    }

    destroy(){
        this.props.onDestroy(this.props.product.id);
    }
    render(){
        var name = this.props.product.stocked ?
        this.props.product.name :
        <span style={{color: 'red'}}>
            {this.props.product.name}
        </span>;
        return(
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
                <td><button onClick={this.destroy} style={{backgroundColor:'red'}}>x</button></td>
            </tr>
        );
    };
}

export default ProductRow;