import React, { Component } from 'react'
import DataTable from 'react-data-table-component'
import 'bootstrap/dist/css/bootstrap.min.css'

const columnasProducto = [
    {
        name: "ID",
        selector:'id',
        sorteable: true
    },
    {
        name: "Nombre",
        selector:'name',
        sorteable: true
    },
    {
        name:"Categoría",
        selector: 'categoria',
        sorteable: true,
    },
    {
        name:"Precio",
        selector:'precio',
        sorteable: true
    },
    {
        name:"Descuento",
        selector:'descuento',
        sorteable: true
    }
]
const paginationConfig = {
    rowsPerPageText : 'Filas por página',
    rangeSeparatorText : 'de',
    selectAllRowsItem : true,
    selectAllRowsItemText : 'Todos' 
}
class ProductsTable extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            productsData: []
        }
    }
    componentDidMount() {
        fetch("/api/products/dashboardList")
            .then((res) => {
                return res.json()
            })
            .then((products) => {
                console.log(products.data);
                return this.setState({ isLoaded: true, productsData: products.data });
            })
            .catch((err) => {
                return this.setState({isLoaded: true, error:err})
            })            
    }
    render() {
        return (
            <>
                {/* <div className="table-responsive card shadow mb-4" id="table"> */}
                    <DataTable
                        columns={columnasProducto}
                        data={this.state.productsData}
                        title={'Productos'}
                        pagination={true}
                        paginationComponentOptions={paginationConfig}
                        paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
                        fixedHeader
                        fixedHeaderScrollHeight='475px'
                    />
                {/* </div> */}
            </>
        )
    }
}

export default ProductsTable