function InfoCards({cards}) {    
    return (
        <div className="row">
                {cards.map((elemento, i) => {
                    return(
                    <div key={elemento + i} className="col-md-4 mb-4">
                        <div className={`card border-left-${elemento.style} shadow h-100 py-2`}>
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className={`text-xs font-weight-bold text-${elemento.style} text-uppercase mb-1`}>{elemento.title}</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{elemento.number}</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className={`${elemento.icon}`}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                })}
        </div>
    )
}

export default InfoCards