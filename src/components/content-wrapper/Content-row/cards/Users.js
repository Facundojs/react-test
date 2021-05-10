import React, {Component} from 'react';

class Users extends Component {
    constructor(props){
        super(props);
        this.state ={
            error: null,
            isLoaded: false,
            users: ''
        }
    };
    
    componentDidMount() {
        fetch("http://grupo-14-geek-studio.herokuapp.com/api/users")
            .then((res) => {
                return res.json();
            })
            .then((users) => {
                return this.setState({ isLoaded: true, users: users.data.length });
            })
            .catch((err) => {
                return this.setState({ isLoaded: true, error: err });
            })
    }
    

    render() {
    return(
        <div className="col-md-4 mb-4">
            <div className="card border-left-success shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                USERS IN DATABASE
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                                {this.state.isLoaded && this.state.users ?
                                    <>{`${this.state.users}`}</> : 'Cargando...'    
                                }
                                {this.state.isLoaded && this.state.error ?
                                    <>{`Ocurrio un error de conexión`}</> : ''    
                                }
                            </div>
                            {/* <Link className="btn btn-success active mt-2"  to="/user">
                                Sign up
                            </Link> */}
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-user fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>)}
}

export default Users
