import React from 'react'

import Greeting from '../Greeting/Greeting'
import AppName from '../AppName/AppName';
import Explanation from '../Explanation/Explanation';

import './style.css'
import ChartMaker from '../ChartMaker/ChartMaker';


const FrontPage = () => {

    return (
        <div className="front-page">
            
            <div className='content'>
                <AppName />
                <Greeting />
                <Explanation />
                <ChartMaker />
            </div>
        </div>
    )

}

export default FrontPage