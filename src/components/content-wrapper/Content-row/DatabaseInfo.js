import LastMovieInDb from './LastMovieInDb'
import GenresInDb from './GenresInDb'

function DatabaseInfo() {
    const generos = ['Acción', 'Animación', 'Aventura', 'Ciencia Ficción',
    'Comedia', 'Documental', 'Drama', ' Fantasia', 'Infantiles', 'Musical']
    return (
        <div className="row">
            <LastMovieInDb />
            <GenresInDb generos={ generos }/>
        </div>
    )
}

export default DatabaseInfo