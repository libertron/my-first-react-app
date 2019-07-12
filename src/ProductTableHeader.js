import React, {Component} from 'react';
import './ProductTableHeader.css';

class ProductTableHeader extends Component{
    constructor(props){
        super(props);
        this.handleSort=this.handleSort.bind(this);
    }

    handleSort(e){
        this.props.onSort(this.props.column,e.target.name);
    }
    render(){
        let currentSort = this.props.currentSort.column === this.props.column ? this.props.currentSort.direction : false;
        return(
            <th>
                {this.props.column}
                <button 
                    className={this.props.currentSort.direction==='asc'?"ProductTableHeader-current":""}
                    onClick={this.handleSort}
                >&#x25B2;</button>
                <button 
                    className={this.props.currentSort.direction==='desc'?"ProductTableHeader-current":""}
                    onClick={this.handleSort}    
                >&#x25BC;</button>
            </th>
        );
    };
}

export default ProductTableHeader; 