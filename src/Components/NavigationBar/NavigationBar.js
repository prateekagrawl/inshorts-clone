import React from 'react'
import './NavigationBar.css'
import HamburgerDrawer from '../HamburgerDrawer'

const NavigationBar = ({setCategory}) => {
    return (
        <div className="nav">
            <div className="icon">
                <HamburgerDrawer setCategory={setCategory} />
            </div>
            <img 
            style={{cursor: "pointer"}}
            src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="logo" height="80%" />
        </div>
    )
}

export default NavigationBar
