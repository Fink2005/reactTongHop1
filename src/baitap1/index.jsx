import React, { Component } from "react";
import Header from "./header";
import Navigation from "./navigation";
import Content from "./content";
import Footer from "./footer";

class Baitap1 extends Component {
    // render la method cua class component dung de hien thi giao dien
    render(){
        return (
            <div>
                <Header />
                <div className="main">
                    <Navigation />
                    <Content />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Baitap1;