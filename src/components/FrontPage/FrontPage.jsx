import React from 'react'

import Greeting from '../Greeting/Greeting'
import AppName from '../AppName/AppName';
import Menu from '../Menu/Menu';
import Explanation from '../Explanation/Explanation';


const FrontPage = () => {

    return (
        <div className="explanation">
            <Menu />
            <Greeting />
            <AppName />
            <Explanation />
        </div>
    )

}

export default FrontPage