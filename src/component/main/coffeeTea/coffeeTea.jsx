import React from 'react';
import './coffeeTea.scss';
import logo from '../../../assets/img/coffee.png';


const CoffeeTea = () => {
    let money = 'грн';
    return (
        <div className='main'>
            <div className='main-item'>
                <img className='coffee-png' src={logo} alt='varenuk.svg'></img>
                <h1>КАВА</h1>
            </div>                       
            <article className='item'>
                <div className='item-hot-drinks'>
                    <p className='item-name'>Espresso</p>
                    <p className='price'>3.50{money}</p>
                </div>                
            </article>
            <article className='item'>
                <div className='item-hot-drinks'>
                    <p className='item-name'>Кава з молоком</p>
                    <p className='price'>6.50{money}</p>
                </div>                
            </article>
            <article className='item'>
                <div className='item-hot-drinks'>
                    <p className='item-name'>Чай з лимоном</p>
                    <p className='price'>4.50{money}</p>
                </div>                
            </article>           
        </div>  
    )
}
export default CoffeeTea;