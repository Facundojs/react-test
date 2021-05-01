import LastMovieInDb from './LastMovieInDb'
import CategoriesInDb from './CategoriesInDb'

function DatabaseInfo() {
    return (
        <div className="row">
            <LastMovieInDb />
            <CategoriesInDb />
        </div>
    )
}
export default DatabaseInfo