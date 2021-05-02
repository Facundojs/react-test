import React, {Component} from 'react';

class Actor extends Component {
    constructor(props){
        super(props);
        this.state ={
            error: null,
            isLoaded: false,
            stars: ''
        }
    };
    
    componentDidMount() {
        fetch("https://api.github.com/repos/Facundojs/grupo_14_Geek_Studio")
            .then((res) => {
                return res.json();
            })
            .then((repo) => {
                return this.setState({ isLoaded: true, stars: repo.watchers_count });
            })
            .catch((err) => {
                return this.setState({ isLoaded: true, error: err });
            })
    }
    

    render() {
    return(
        <div className="col-md-4 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                STARS IN REPO
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                                {this.state.isLoaded && this.state.stars ?
                                    <>{`${this.state.stars}`}</> : 'Cargando...'    
                                }
                                {this.state.isLoaded && this.state.error ?
                                    <>{`Ocurrio un error de conexión`}</> : ''    
                                }
                            </div>
                            <a href="https://github.com/Facundojs/grupo_14_Geek_Studio"
                                className="text-warning display-6">
                                Give me stars here
                            </a>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-star fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>)}
}

export default Actor