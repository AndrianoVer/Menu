import React from 'react';
import './main-dishes.scss';
import logo from '../../../assets/img/varenuk.svg';


const Main = () => {
    let money = 'грн';
    return (
        <div className='main'>
            <div className='main-item'>
                <img className='pictogram' src={logo} alt='varenuk.svg'></img>
                <h1>ВАРЕНИКИ</h1>
            </div>                       
            <article className='item'>
                <p className='item-name'>Вареники з картоплею</p>
                <p className='gram'>за 300гр.</p>
                <p className='price'>3.50{money}</p>                              
            </article>
            <article className='item'>
                <p className='item-name'>Вареники з м'ясом</p>
                <p className='gram'>за 300гр.</p>
                <p className='price'>6.50{money}</p>
            </article>
            <article className='item'>
                <p className='item-name'>Вареники з сиром</p>
                <p className='gram'>за 300гр.</p>
                <p className='price'>4.50{money}</p>
            </article>           
        </div>  
    )
}
export default Main;