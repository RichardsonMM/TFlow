import React from 'react';
import TopBar from './NavBar';

function Layout({children}) {
    return (
        <div style={{backgroundColor:"#2b2b2b"}} className="min-w-full min-h-screen  h-screen overflow-hidden bg-blue-100">
            <TopBar/>
            <main className="p50 pt-16">
                {children}
            </main>
        </div>
    );
}

export default Layout;