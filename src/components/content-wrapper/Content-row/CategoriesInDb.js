import React, {Component} from 'react';

class CategoriesInDb extends Component{
    constructor(props){
        super(props);
        this.state ={
            categoriesList: [],
            error: null,
            isLoaded: false
        }
    }
    componentDidMount(){
        fetch('http://grupo-14-geek-studio.herokuapp.com/api/categories/dashboardList')
        .then(respuesta => {
        return respuesta.json()
        })
        .then(categories => {  
        this.setState({categoriesList: categories.data, isLoaded: true})
        })
        .catch(error => {
        this.setState({isLoaded: true, error: error.data})    
        })
    }
        
        
        

    render() {
        return (
        <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
                </div>
                <div className="card-body">        
                    {this.state.categoriesList && this.state.isLoaded ? 
                        <div className="row">
                            {this.state.categoriesList.map((item, i) =>{
                                return <div key={item.id + i + i} className="col-lg-6 mb-4">
                                    <div className="card bg-dark text-white shadow">
                                        <div className="card-body">
                                            {`${item.id}- ${item.nombre} (${item.cantidadDeProductos} 
                                                productos actualmente)`}
                                        </div>
                                    </div>
                                </div>}
                            )}
                            </div> : <div>Cargando ...</div>}
                    {this.state.isLoaded && this.state.error ?
                        <div>`${this.state.error}`</div> : ''
                    }
                </div>
            </div>
        </div>
        )
    }
}

export default CategoriesInDb