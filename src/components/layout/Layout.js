import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
    return (
        <>
            <Header />
            <div className="page-container">
                <Sidebar />
                <div className="page-content-wrapper">
                    <div className="page-content" style={{minHeight:"1599px"}}>
                    <div class="page-bar">
                        <div class="page-title-breadcrumb">
                            <div class=" pull-left">
                                <div class="page-title">Dashboard</div>
                            </div>
                            <ol class="breadcrumb page-breadcrumb pull-right">
                                <li><i class="fa fa-home"></i>&nbsp;<a class="parent-item" href="index.html">Home</a>&nbsp;<i class="fa fa-angle-right"></i>
                                </li>
                                <li class="active">Dashboard</li>
                            </ol>
                        </div>
                    </div>
                    
                    {children}
                     
                    </div>
                    </div>
            </div>
            <Footer />
        </>
    )
}

export default Layout
