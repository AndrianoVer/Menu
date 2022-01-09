import React from 'react';
import './alcoholDrinks.scss';
import logo from '../../../assets/img/alcoholic-drink.png';


const AlcoholDrinks = () => {
    let money = 'грн';
    return (
        <div className='main'>
            <div className='main-item'>
                <img className='pictogram' src={logo} alt='alchogol.png'></img>
                <h1>АЛКОГОЛЬНІ НАПОЇ</h1>
            </div>
                       
            <article className='item'>
                <p className='item-name'>Горілка</p>
                <p className='gram'>за 50гр.</p>
                <p className='price'>3.50{money}</p>
            </article>
            <article className='item'>
                <p className='item-name'>Ром</p>
                <p className='gram'>за 50гр.</p>
                <p className='price'>6.50{money}</p>
            </article>
            <article className='item'>
                <p className='item-name'>Джин</p>
                <p className='gram'>за 50гр.</p>
                <p className='price'>4.50{money}</p>
            </article>           
        </div>  
    )
}
export default AlcoholDrinks;