import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ( { value } ) => {

    const [ counter, setCounter ] = useState( value );

    const handleAdd = () => { 
        //setCounter( counter + 1);
        setCounter( (c) => c + 1)
    }
    const handleLess = () => { 
        //setCounter( counter + 1);
        setCounter( (c) => c - 1)
    }
    const handleReset = () => { 
        //setCounter( counter + 1);
         setCounter (value)
    }

    return ( 
        <>   
           <h1>
        <div className='card-container'>
            <div className="card">
                    <div className="display-picture">
                        <img src="./public/img/gato.jfif" alt='...'></img>
                    </div>
                    <div className="banner">
                        <img src='./public/img/fondo.jfif' alt='...'></img>
                    </div>
                    <div className="content">
                        Hola, soy Luisa
                    </div>
                </div>
                <div className="card">
                    <div className="display-picture">
                        <img src="./public/img/gato2.jfif" alt='...'></img>
                    </div>
                    <div className="banner">
                        <img src='./public/img/fondo.jfif' alt='...'></img>
                    </div>
                    <div className="content">
                        Hola, soy Angela
                    </div>
                </div>
            </div>    
            </h1>
            
                <h2>Días de Casadas</h2>
                <h3> { counter } </h3>
                <button onClick={ handleAdd }> +1 </button>
                <button onClick={ handleLess }> -1 </button>
                <button onClick={ handleReset }> reset </button>
            
        </> 
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
  }
