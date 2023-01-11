import React from 'react'

import Greeting from '../Greeting/Greeting'
import AppName from '../AppName/AppName';
import Menu from '../Menu/Menu';
import Explanation from '../Explanation/Explanation';

import './style.css'


const FrontPage = () => {

    return (
        <div className="front-page">
            <Menu />
            <div className='content'>
                <AppName />
                <Greeting />
                <Explanation />
            </div>
        </div>
    )

}

export default FrontPage