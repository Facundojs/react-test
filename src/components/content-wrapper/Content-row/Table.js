import React, { Component } from 'react'
import UsersTable from './UsersTable'
import ProductsTable from './ProductsTable'
import 'bootstrap/dist/css/bootstrap.min.css'

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table: 'products',
            error: null,
        }
    }

    render() {
            if (this.state.table === 'products') {
                return (
                    <>
                        <div className="p-3 table-responsive card shadow" id="table">
                            <p href="/#table" className="h3 text-center btn "
                                onClick={() => this.setState({ table: 'users' })}
                            >Ver usuarios</p>
                            <ProductsTable />
                        </div>
                    </>
                )
            } else if (this.state.table === 'users') {
                return (
                    <>
                        <div className="p-3 table-responsive card shadow mb-4" id="table">
                            <p href="/#table" className="h3 text-center btn"
                                onClick={() => this.setState({ table: 'products' })}>Ver productos</p>
                            <UsersTable/>
                        </div>
                    </>
                )
            } else {
                <div>Ha ocurrido un error</div>
            }
        }
}

export default Table