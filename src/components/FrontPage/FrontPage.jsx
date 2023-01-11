import React from 'react'

import Greeting from '../Greeting/Greeting'
import AppName from '../AppName/AppName';
import Explanation from '../Explanation/Explanation';

import './style.css'


const FrontPage = () => {

    return (
        <div className="front-page">
            
            <div className='content'>
                <AppName />
                <Greeting />
                <Explanation />
            </div>
        </div>
    )

}

export default FrontPage