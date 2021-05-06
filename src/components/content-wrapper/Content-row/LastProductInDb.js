import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class LastProductInDb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: false,
            data: []
        }
    }
    componentDidMount() {
        fetch("/api/products/dashboardLastproduct")
            .then((res) => {
                return res.json()
            })
            .then((lastProduct) => {
                return this.setState({data: lastProduct.data, isLoaded: true })
            })
            .catch((err) => {
                return this.setState({error: err, isLoaded: true})
            })
    }

    render(){
        {    if (!this.state.isLoaded) {
            return(
                <div className="col-lg-6 mb-4">
                     <div className="card shadow mb-4">
                        <div className="card-header py-3">
                                <h5 className="m-0 font-weight-bold text-gray-800">Last product in Data Base</h5>
                        </div>
                        <h3 className="p-5">Cargando...</h3>
                    </div>
                </div>
            )
            } else if (this.state.error && this.state.isLoaded) {
                return (
                    <div className="col-lg-6 mb-4">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h5 className="m-0 font-weight-bold text-gray-800">Last product in Data Base</h5>
                            </div>
                            <h2>{`${this.state.error}`}</h2>
                        </div>
                    </div>
                )
            } else if(this.state.isLoaded && this.state.data){
                return (
                    <div className="col-lg-6 mb-4">
                        <div className="card shadow mb-4">
                        <div className="card-header py-3">
                                <h5 className="m-0 font-weight-bold text-gray-800">Last product in Data Base</h5>
                        </div>
                            <div className="card-body">
                                <h6>{ this.state.data.name }</h6>
                                <div className="text-center">
                                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "40rem" }}
                                        src={`https://grupo-14-geek-studio.herokuapp.com/img/products/${this.state.data.image}`}
                                        alt={this.state.data.name} />
                                </div>
                                <p>{`${this.state.data.features}`}</p>
                                <div className="flex-row d-flex justify-content-around">
                                    <a className="btn btn-danger" rel="nofollow" href={`https://grupo-14-geek-studio.herokuapp.com/productos/${this.state.data.id}`}>View product detail</a>
                                    <Link className="btn btn-primary" rel="nofollow" to="/product">
                                        Create product
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        }
    }
}

export default LastProductInDb