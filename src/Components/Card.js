import React from 'react'
import './CSS/card.css'

function Card(props) {
    return (
        <div className='card_conatiner'>
            <div className='card'>
                <div className='front_card'>
                    <img src={props.background} alt='screenshot' />
                </div>
                <div className='back_card'>
                    <img className='back_card_image' src={props.background} alt='screenshot' />
                    <div className='card_text2'>Live Preview <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg></div>
                </div>
            </div>
            <div className='card_text1'>{props.title}</div>
        </div>
    )
}

export default Card
