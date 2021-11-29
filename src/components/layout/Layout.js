import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
    return (
        <div>
            <Header />
            <Sidebar />
                {children}
            <Footer />
        </div>
    )
}

export default Layout
