import LastProductInDb from './LastProductInDb'
import CategoriesInDb from './CategoriesInDb'

function DatabaseInfo() {
    return (
        <div className="row">
            <LastProductInDb />
            <CategoriesInDb />
        </div>
    )
}
export default DatabaseInfo