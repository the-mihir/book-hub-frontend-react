import React from 'react';
import Header from "./Components/Header/Header.jsx";
import SideBar from "./Components/SideBar/SideBar.jsx";
import Shorting from "./Components/Shorting/Shorting.jsx";
import BookList from "./Components/Books/BoookList.jsx";
import Footer from "./Components/Footer/Footer.jsx";

const App = () => {
    return (
        <>
            <Header/>
            <main>
                <section className="container mt-2">
                    <div className="row">
                     <SideBar />
                        <div className="col-9">
                        <Shorting/>
                        <BookList/>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>

        </>
    );
};

export default App;