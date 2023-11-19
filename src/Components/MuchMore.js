import React from 'react'
import './CSS/form.css'
import Firefliesanimation from './Firefliesanimation'
import Card from './Card'
import { Link } from 'react-router-dom'

function Form() {
    return (
        <div className='main_body'>
            <Firefliesanimation />


            <div className='section1'>
                <div className='content_section'>
                    <div className='content_section_text'>Select the one you like the most</div>
                    <div className='content_section_card'>
                        <Card />
                    </div>
                </div>


                <div className='sidepanel_section'>
                    <div className='center_sidepanel'>
                        <div className='sidepanel_title'>Content List</div>
                        <hr style={{ width: "150px" }} />
                        <ul>
                            <li><Link to="/form">Form</Link></li>
                            <ul>
                                <li><Link to="">Fox Login Page</Link></li>
                                <li><Link to="">Blue Deer Login Page</Link></li>
                                <li><Link to="">Login Page 3</Link></li>
                                <li><Link to="">Login Page 4</Link></li>
                            </ul>
                            <li><Link to="/button">Buttons</Link></li>
                            <ul>
                                <li><Link to="">Neon Button</Link></li>
                                <li><Link to="">Button 1</Link></li>
                                <li><Link to="">Button 2</Link></li>
                            </ul>
                            <li><Link to="/muchmore">Something More</Link></li>
                            <ul>
                                <li><Link to="">Frontend Mentor</Link></li>
                                <li><Link to="">C Programms</Link></li>
                            </ul>
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Form
