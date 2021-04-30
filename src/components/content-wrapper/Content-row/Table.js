import React from 'react'
import DataTable from 'react-data-table-component'
import 'bootstrap/dist/css/bootstrap.min.css'
const columnas = [
    {
        name: "Título",
        selector:'titulo',
        sorteable: true
    },
    {
        name:"Duración",
        selector:'duracion',
        sorteable: true
    },
    {
        name:"Rating",
        selector:'rating',
        sorteable: true
    },
    {
        name:"Género",
        selector:'genero',
        sorteable: true
    },
    {
        name:"Premios",
        selector:'premios',
        sorteable: true
    },
    
]
const data = [
    {
        titulo: 'Billi Elliot',
        duracion: 123,
        rating: 5,
        genero: ['Drama', 'Comedia'],
        premios:2
    },
    {
        titulo: 'Alicia en el país de las maravillas',
        duracion: 142,
        rating: 4.8,
        genero: ['Drama','Acción', 'Comedia'],
        premios:3
    }
]
function Table() {

    return (
        <div className="table-responsive">
            <DataTable
                columns={columnas}
                data={data}
                title={'Peliculas'}
            />
        </div>
        )
}

export default Table