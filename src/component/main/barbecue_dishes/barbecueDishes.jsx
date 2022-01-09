import React from 'react';
import './barbecueDishes.scss';
import bbq from '../../../assets/img/bbq.png'


const BarbecueDishes = () => {
    let money = 'грн';
    return (
        <div className='main'>
        <div className='main-item'>
            <img className='pictogram' src={bbq} alt='bbq.png'></img>
            <h1>СТРАВИ НА МАНГАЛІ</h1>
        </div>                        
            <article className='item'>
                <p className='item-name'>Курячий стейк</p>
                <p className='gram'>за 100гр.</p>
                <p className='price'>13.50{money}</p>
            </article>
            <article className='item'>
                <p className='item-name'>Ребра на мангалі</p>
                <p className='gram'>за 100гр.</p>
                <p className='price'>16.50{money}</p>
            </article>
            <article className='item'>
                <p className='item-name'>Картопля печена на вуглях</p>
                <p className='gram'>за 2шт.</p>
                <p className='price'>4.50{money}</p>
            </article>           
        </div>
               
    )
}
export default BarbecueDishes;