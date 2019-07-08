import React, {Component} from 'react';
import ProductRow from './ProductRow.js';
import ProductTableHeader from './ProductTableHeader.js';

class ProductTable extends Component{
    render(){
        let productsArray=Object.keys(this.props.products).map((pid)=>this.props.products[pid]);
        let rows=productsArray.map((product)=>{
            return (
                <ProductRow product={product} key={product.id} />
            );
        });

        return(
            <table>
                <thead>
                    <tr>
                        <ProductTableHeader column="name" />
                        <ProductTableHeader column="price" />
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    };
}

export default ProductTable;