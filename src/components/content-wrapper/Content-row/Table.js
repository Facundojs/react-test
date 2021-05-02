import React, { Component } from 'react'
import DataTable from 'react-data-table-component'
import 'bootstrap/dist/css/bootstrap.min.css'
const columnas = [
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
class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table: 'products',
            isLoaded: false,
            error: null,
            data: [],
        }
    }
    componentDidMount() {
        fetch("/api/products/dashboardList")
            .then((res) => {
                return res.json()
            })
            .then((products) => {
                console.log(products.data);
                return this.setState({ isLoaded: true, data: products.data });
            })
            .catch((err) => {
                return this.state({isLoaded: true, error:err})
            })
    }
    render() {
        return (
            <div className="table-responsive card shadow mb-4" id="table">
                <DataTable
                    columns={columnas}
                    data={this.state.data}
                    title={'Productos'}
                    pagination={5}
                    paginationComponentOptions={paginationConfig}
                    paginationRowsPerPageOptions = {[5, 10, 15, 20, 25, 30]}
                    fixedHeader
                    fixedHeaderScrollHeight = '475px'
                />
            </div>
        )}
}

export default Table