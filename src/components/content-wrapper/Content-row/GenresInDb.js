function GenresInDb({generos}) {
    return (
        <div className="col-lg-6 mb-4">						
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
            </div>
            <div className="card-body">
                <div className="row">
                    {generos.map((item, i) =>     
                    <div class="col-lg-6 mb-4">
                        <div class="card bg-dark text-white shadow">
                            <div key={item + i} class="card-body">
                                {item}
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    </div>
    )
}

export default GenresInDb