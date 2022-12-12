import React from "react";

const Pagination = ({prev, next, onPrevious, onNext, onAdd}) =>{

    const handlePrevious = () =>{
        onPrevious();
    }

    const handleNext = () => {
        onNext();
    }

    const handleAdd = () => {
        onAdd();
    }


    return(
        <nav className="my-5">
            <ul className="pagination justify-content-center">
                {prev ? (
                  <li className="page-item">
                    <button className="page-link" onClick={handlePrevious}>Anterior</button>
                  </li>  
                ): null }

                {next ? (
                    <li className="page-item">
                    <button className="page-link" onClick={handleNext}>Siguiente</button>
                </li> 

                    ):null}
                
                <li className="page-item">
                    <button className="page-link" onClick={handleAdd} href="https://photos.google.com/u/2/">Agregar</button>
                </li>

            </ul>
        </nav>
    )
}

export default Pagination