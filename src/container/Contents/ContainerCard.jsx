import React, { Component } from "react";
import CardContent from "../../components/CardContent";
// statefull component
class ContainerCard extends Component {
  render() {
    return (
      <section class="d-flex align-items-center">
        <div className="container">
          <div className="row d-flex justify-content-around">
            <CardContent title="Belajar HTMl"/>
            <CardContent title="Belajar CSS"/>
            <CardContent title="Belajar Javascript"/>
            <CardContent title="Belajar PHP"/>
            <CardContent/>
          </div>
        </div>
      </section>
    );
  }
}
export default ContainerCard;
