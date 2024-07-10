import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./Princing.scss";
import basic from '../../assets/img/basic.png'
import busines from '../../assets/img/busines.png'
import entrepreneur from '../../assets/img/entrepreneur2.png'
class Princing extends Component {
  render() {
    return (
      <Container id="princing">
        <div className="text-center" id="title-princing">
          <h2><b>Princing</b></h2>
          <p className="fs-4">Inspirational designs, illustrations, and graphic elements from the world’s best designers.
          Want more inspiration? Browse our search results</p>
        </div>
        <Row>
          <Col md={4} className="mb-2">
            <Card className="card-pricing">
              <Card.Body>
                <Card style={{ position:"relative",top:"-50px",width:"70%",margin:"0 auto",background:"rgb(47 152 226)",color:"white" }}>
                  <Card.Body className="text-center">
                    <img src={basic} width={35} alt=""/>
                    <h5 className="mt-2 text-center"><b>Basic</b></h5>
                  </Card.Body>
                </Card>
                <div className="mb-5">
                  <div className="text-center mb-5">
                    <span className=" text-secondary fs-5 mx-2"><del>$2000</del></span>
                    <span className="mb-5 text-primary fs-2"><b>$150</b></span>
                  </div>
                  <hr/>
                  <b>Feature:</b>
                  <ol type="number">
                    <li>Mencatat barang masuk</li>
                    <li>Mencatat barang keluar</li>
                    <li>Mencatat hasil keuntungan</li>
                  </ol>
                </div>
                
              </Card.Body>
              <Card.Footer className="bg-light">
                <div className="text-center d-grid gap-3">
                   <Button variant="outline-primary" className="btn-block btn-rd">Purcase</Button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col md={4} className="mb-2">
            <Card className="card-pricing">
              <Card.Body>
                <Card style={{ position:"relative",top:"-50px",width:"70%",margin:"0 auto",background:"rgb(104 222 239)",color:"white" }}>
                  <Card.Body className="text-center">
                    <img src={busines} width={35} alt=""/>
                    <h5 className="mt-2 text-center"><b>Busines</b></h5>
                  </Card.Body>
                </Card>
                <div className="mb-5">
                  <div className="text-center mb-5">
                    <span className=" text-secondary fs-5 mx-2"><del>$2500</del></span>
                    <span className="mb-5 text-primary fs-2"><b>$1200</b></span>
                  </div>
                  <hr/>
                  <b>Feature:</b>
                  <ol type="number">
                    <li>Mencatat barang masuk dan keluar</li>
                    <li>Mencatat Keuntungan</li>
                    <li>Dapat menganalisa hasil penjualan dengan CHART</li>
                    <li>Support 7x24 Jam</li>
                  </ol>
                </div>
               
              </Card.Body>
              <Card.Footer className="bg-light">
                <div className="text-center d-grid gap-3">
                   <Button variant="outline-primary" className="btn-block btn-rd">Purcase</Button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col md={4} className="mb-2">
            <Card className="card-pricing">
              <Card.Body>
                <Card style={{ position:"relative",top:"-50px",width:"70%",margin:"0 auto",background:"rgb(200 71 245)",color:"white" }}>
                  <Card.Body className="text-center">
                    <img src={entrepreneur} width={35} alt=""/>
                    <h5 className="mt-2 text-center"><b>Entrepreneur</b></h5>
                  </Card.Body>
                </Card>
                <div className="mb-5">
                  <div className="text-center mb-5">
                    <span className=" text-secondary fs-5 mx-2"><del>$3000</del></span>
                    <span className="mb-5 text-primary fs-2"><b>$2200</b></span>
                  </div>
                  <hr/>
                  <b>Feature:</b>
                  <ol type="number">
                    <li>Mencatat barang masuk dan keluar</li>
                    <li>Mencatat Keuntungan</li>
                    <li>Dapat menganalisa hasil penjualan dengan CHART</li>
                    <li>Support 7x24 Jam</li>
                    <li>Export data ke Excel</li>
                    <li>AI Prediksi penghasilan</li>
                  </ol>
                </div>
                
              </Card.Body>
              <Card.Footer className="bg-light">
                <div className="text-center d-grid gap-3">
                   <Button variant="outline-primary" className="btn-block btn-rd">Purcase</Button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Princing;