import Title from './Title'
import InfoCards from './InfoCards'
import DatabaseInfo from './DatabaseInfo'
import Table from './Table'
function ContainerFluid() {
    const cards = [
        {
            title: 'MOVIES IN DATABASE',
            number: 21,
            icon: "fas fa-film fa-2x text-gray-300",
            style: 'primary'
        },
        {
            title: 'TOTAL AWARDS',
            number: 79,
            icon: "fas fa-award fa-2x text-gray-300",
            style: 'success'
        },
        {
            title: 'ACTORS QUANTITY',
            number: 49,
            icon: "fas fa-user fa-2x text-gray-300",
            style: 'warning'
        }
    ]
    return (
        <div className="container-fluid">
            <Title />
            <div className="row">
            </div>
                <InfoCards cards={cards} />
            <DatabaseInfo />
            <Table />
        </div>
    )
}

export default ContainerFluid