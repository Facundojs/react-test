// function GenresInDb({generos}) {
//     return (
//     <div className="col-lg-6 mb-4">						
//         <div className="card shadow mb-4">
//             <div className="card-header py-3">
//                 <h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
//             </div>
//             <div className="card-body">
//                 <div className="row">
//                     {generos.map((item, i) =>     
//                     <div class="col-lg-6 mb-4">
//                         <div class="card bg-dark text-white shadow">
//                             <div key={item + i} class="card-body">
//                                 {item}
//                             </div>
//                         </div>
//                     </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     </div>
//     )
// }
import React, {Component} from 'react';

class GenresInDb extends Component{
    constructor(props){
        super(props);
        this.state ={
            categoriesList: [],
            error: null,
            isLoaded: false
        }
    }
    componentDidMount(){
        fetch('/api/categories')
        .then(respuesta => {
        return respuesta.json()
        })
        .then(categories => {
        console.log(categories);    
        this.setState({categoriesList: categories.data})
        })
        .catch(error => {
        this.setState({isLoaded: true, error: error})
            
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
                        
                        {this.state.categoriesList ? 
                            <div className="row">
                                {this.state.categoriesList.map((item, i) =>{
                                    return <div class="col-lg-6 mb-4">
                                        <div class="card bg-dark text-white shadow">
                                            <div key={item.name + i} class="card-body">
                                                {item.name}
                                            </div>
                                        </div>
                                    </div>}
                                )}
                            </div> : <div>Cargando ...</div>}
                
                    {/* <div className="row">
                        {generos.map((item, i) =>     
                        <div class="col-lg-6 mb-4">
                            <div class="card bg-dark text-white shadow">
                                <div key={item + i} class="card-body">
                                    {item}
                                </div>
                            </div>
                        </div>
                        )}
                    </div> */}



                </div>
            </div>
        </div>
        )
    }
}

export default GenresInDb