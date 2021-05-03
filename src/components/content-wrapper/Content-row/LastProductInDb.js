import React, { Component } from 'react'

class LastProductInDb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            data: []
        }
    }
    componentDidMount() {
        fetch("/api/products/dashboardLastproduct")
            .then((res) => {
                return res.json()
            })
            .then((lastProduct) => {
                console.log(lastProduct);
                return this.setState({data: lastProduct.data, isLoaded:true})
            })
            .catch((err) => {
                return this.setState({error: err, isLoaded: true})
            })
    }

    render(){
        {
            if (this.state.error && this.state.isLoaded) {
                return (
                    <h2>{`${this.state.error}`}</h2>
            ) 
            } else if (!this.state.isLoaded) {
                return <h1>Cargando...</h1>
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
                                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "40rem" }} src={this.state.data.image} alt={ this.state.data.name }/>
                                </div>
                                <p>{ `${this.state.data.features}` }</p>
                                <a className="btn btn-danger" rel="nofollow" href={`https://grupo-14-geek-studio.herokuapp.com/productos/${this.state.data.id}`}>View product detail</a>
                            </div>
                        </div>
                    </div>
                )
            }
        }
    }
}

export default LastProductInDb