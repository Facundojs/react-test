import React, {Component} from 'react';

class Products extends Component {
    constructor(props){
        super(props);
        this.state ={
            error: null,
            isLoaded: false,
            products: ''
        }
    };
    
    componentDidMount() {
        fetch("/api/products")
            .then((res) => {
                return res.json();
            })
            .then((products) => {
                return this.setState({ isLoaded: true, products: products.data.length });
            })
            .catch((err) => {
                return this.setState({ isLoaded: true, error: err });
            })
    }
    

    render() {
    return(
        <div className="col-md-4 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                PRODUCTS IN DATABASE
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                                {this.state.isLoaded && this.state.products ?
                                    <>{`${this.state.products}`}</> : 'Cargando...'    
                                }
                                {this.state.isLoaded && this.state.error ?
                                    <>{`Ocurrio un error de conexión`}</> : ''    
                                }
                            </div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-laptop fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>)}
}

export default Products
