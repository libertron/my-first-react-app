import React, {Component} from 'react';
import Filters from './Filters.js';
import ProductTable from './ProductTable.js';
import ProductForm from './ProductForm.js';

var PRODUCTS = {
    '1': {id: 1, category: 'Musical Instruments', price: '$459.99', stocked: true, name: 'Clarinet'},
    '2': {id: 2, category: 'Musical Instruments', price: '$5,000', stocked: true, name: 'Cello'},
    '3': {id: 3, category: 'Musical Instruments', price: '$11,000', stocked: false, name: 'Fortepiano'},
    '4': {id: 4, category: 'Furniture', price: '$799', stocked: true, name: 'Chaise Lounge'},
    '5': {id: 5, category: 'Furniture', price: '$1,300', stocked: false, name: 'Dining Table'},
    '6': {id: 6, category: 'Furniture', price: '$100', stocked: true, name: 'Bean Bag'}
  };

class Products extends Component{

    filterHandler(filterInput){
        this.setState(filterInput);
    }

    saveProduct(product){
        product.id=new Date().getTime();
        this.setState((prevState)=>{
            let products=prevState.products;
            products[product.id]=product;
            return {products};
        });
    }

    constructor(props){
        super(props);
        this.state={
            filterText:'',
            inStockOnly:false,
            products:PRODUCTS
        }
        this.filterHandler=this.filterHandler.bind(this);
        this.saveProduct=this.saveProduct.bind(this);
        this.handleDestroy=this.handleDestroy.bind(this);
    }

    handleDestroy(productId){
        this.setState((prevState)=>{
            let products=prevState.products;
            delete products[productId];
            return {products};
        });
    }

    render(){
        return(
            <div>
                <Filters
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilter={this.filterHandler}
                />
                <ProductTable 
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    products={this.state.products}
                    onDestroy={this.handleDestroy}
                />
                <ProductForm 
                    onSave={this.saveProduct}
                />
            </div>
        );
    };
}

export default Products;