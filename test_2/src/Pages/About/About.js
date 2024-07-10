import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import "./About.scss";
import imgUrl from "../../assets/img/chart-busines.png";
class About extends Component {
  render() {
    return (
      <Container fluid id="about">
        <div id="bg-bottom"></div>
        <Container>
          <p className="text-center fs-4 text1 mb-5">
          Sistem ERP untuk memudahkan
            seorang pengusaha dalam mencatat setiap barang yang keluar masuk dan
            mencatat setiap keuntungan yang mereka dapatkan setiap harinya.
          </p>
          <div className="text2 mt-2">
            <p className="mb-4"><i>*Pengerjaan Test menggunakan GitHub dan mohon untuk melampirkan</i></p>
            <img src={imgUrl} alt=""/>
          </div>
        </Container>
        
      </Container>
    );
  }
}

export default About;