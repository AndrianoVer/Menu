import React from 'react';
import './salads.scss';
import salad from '../../../assets/img/salad.png'


const Salads = () => {
    let money = 'грн';
    return (
        <div className='main'>
            <div className='main-item'>
                <img className='pictogram' src={salad} alt='salad.png'></img>
                <h1>САЛАТИ</h1>
            </div>                        
            <article className='item'>
                <p className='item-name'>Салат Дністер</p>
                <p className='gram'>за 200гр.</p>
                <p className='price'>13.50{money}</p>
            </article>
            <article className='item'>
                <p className='item-name'>Салат Цезар</p>
                <p className='gram'>за 200гр.</p>
                <p className='price'>16.50{money}</p>
            </article>
            <article className='item'>
                <p className='item-name'>Салат Грецький</p>
                <p className='gram'>за 200гр.</p>
                <p className='price'>14.50{money}</p>
            </article>           
        </div>
               
    )
}
export default Salads;