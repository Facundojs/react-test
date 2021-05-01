import Title from './Title'
import DatabaseInfo from './DatabaseInfo'
import Table from './Table'
import Stars from './cards/Stars'
import Product from './cards/Product'
import Users from './cards/Users'
function ContainerFluid() {
    return (
        <div className="container-fluid">
            <Title />
            <div className="row">
                <Stars />
                <Product />
                <Users />
            </div>
            <DatabaseInfo />
            <Table />
        </div>
    )
}

export default ContainerFluid