import React, { Component } from "react";
import Header from "../../components/Header";
import Section1 from "../../components/Section1";
import Footer from "../../components/Footer";
import ContainerCard from "../Contents/ContainerCard";
// statefull component
class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Section1 />
        <ContainerCard />
        <Footer />
      </div>
    );
  }
}
export default Home;
