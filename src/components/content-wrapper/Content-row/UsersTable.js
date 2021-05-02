import React, { Component } from 'react'
import DataTable from 'react-data-table-component'
import 'bootstrap/dist/css/bootstrap.min.css'

const columnasUsuario = [
    {
        name: "id",
        selector:'id',
        sorteable: true
    },
    {
        name: "Nombre",
        selector:'nombre_completo',
        sorteable: true
    },
    {
        name: "Email",
        selector:'email',
        sorteable: true
    },
    {
        name: "País",
        selector:'pais',
        sorteable: true
    },
    {
        name: "Tipo de usuario",
        selector:'tipoDeUsuario',
        sorteable: true
    },
]
const paginationConfig = {
    rowsPerPageText : 'Filas por página',
    rangeSeparatorText : 'de',
    selectAllRowsItem : true,
    selectAllRowsItemText : 'Todos' 
}

class UsersTable extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            usersData: [],
        }
    }
    componentWillMount() {
        fetch("/api/users/dashboardList")
            .then((res) => {
                return res.json()
            })
            .then((users) => {
                console.log(users.data);
                return this.setState({ isLoaded: true, usersData: users.data });
            })
            .catch((err) => {
                return this.state({isLoaded: true, error:err})
            })
    }
    render() {
        return (
            <>
                {/* <div className="table-responsive card shadow mb-4" id="table"> */}
                        <DataTable
                            columns={columnasUsuario}
                            data={this.state.usersData}
                            title={'Usuarios'}
                            pagination={true}
                            paginationPerPage = {5}
                            paginationComponentOptions={paginationConfig}
                            paginationRowsPerPageOptions = {[5, 10, 15, 20, 25, 30]}
                            fixedHeader
                            fixedHeaderScrollHeight = '300px'
                        />
                {/* </div> */}
            </> 
        )
    }
}
export default UsersTable