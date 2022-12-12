import React from "react"

const Navbar = ({ brand }) => {
    return(
        <nav className="navbar navbar-dark bg-dark">
            <di className ="container" >
                <a className="navbar-brand text-uppercase" href="/">{brand}</a>
            </di>
            
    </nav>
    )
}

export default Navbar