import React, {Component} from 'react';
import ProductRow from './ProductRow.js';
import ProductTableHeader from './ProductTableHeader.js';

class ProductTable extends Component{

    constructor(props){
        super(props);
        this.sortByKeyAndOrder=this.sortByKeyAndOrder.bind(this);
        this.state={
            sort:{
                column:'price',
                direction:'asc'
            }
        };
        this.handleDestroy=this.handleDestroy.bind(this);
        this.handleStort=this.handleStort.bind(this);
    }

    handleDestroy(id){
        this.props.onDestroy(id);
    }

    sortByKeyAndOrder(objectA, objectB) {
        let isDesc = this.state.sort.direction === 'desc' ? -1 : 1;
        let [a, b] = [objectA[this.state.sort.column], objectB[this.state.sort.column]];
        if (this.state.sort.column === 'price') {
          [a, b] = [a, b].map((value) => parseFloat(value.replace(/[^\d\.]/g, ''), 10));
        }
        if (a > b) {
          return 1 * isDesc;
        }
        if (a < b) {
          return -1 * isDesc;
        }
        return 0;
    }
      
    sortProducts() {
        let productsAsArray = Object.keys(this.props.products).map((pid) => this.props.products[pid]);
        return productsAsArray.sort(this.sortByKeyAndOrder);
    }

    handleStort(column,direction){
        this.setState({
            sort:{
                column:column,
                direction:direction
            }
        });
    }

    render(){
        var rows = [];
        this.sortProducts().forEach((product) => {
            if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
                return;
            }
            rows.push(<ProductRow product={product} key={product.id} onDestroy={this.handleDestroy}/>);
        });

        return(
            <table>
                <thead>
                    <tr>
                        <ProductTableHeader 
                            column="name"
                            currentSort={this.state.sort} 
                            onSort={this.handleStort}
                        />
                        <ProductTableHeader 
                            column="price"
                            currentSort={this.state.sort}
                            onSort={this.handleStort}
                        />
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    };
}

export default ProductTable;