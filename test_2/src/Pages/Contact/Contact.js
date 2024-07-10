import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Contact.scss";
class Contact extends Component {
  render() {
    return (
      <Container>
      <Row className="mb-2 br-y">
        <Col md={4}>
          <h3><b>ERP</b></h3>
          <p>Startup ini pun menyediakan System TIER, dimana customer dapat
          membeli produk mereka per kategori/Level</p>
        </Col>
        <Col md={8}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.0651588747905!2d110.36450077455397!3d-7.782916477224522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a591a4d553bd5%3A0xc0f964003add568b!2sTugu%20Jogja!5e0!3m2!1sid!2sid!4v1720535491680!5m2!1sid!2sid" 
         className={"map"}  title="map"></iframe>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <h3 className="mb-3"><b>Direct Contact</b></h3>
          <label><b>Address :</b></label>
          <p className="mb-2">Jl. Jend. Sudirman, Gowongan, Kec. Jetis, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55233</p>
          <Row>
            <Col sm={2}><b>Tel</b></Col>
            <Col sm={10}><span className="px-2">: +5645667657</span></Col>
          </Row>
          <Row>
            <Col sm={2}><b>Email</b></Col>
            <Col sm={10}><span className="px-2">: jogja@gmail.com</span></Col>
          </Row>
        </Col>
        <Col md={4}>
          <h3 className="mb-3"><b>Media Contact</b></h3>
          <div id="social">
            <a href="https://www.facebook.com/facebook" ><svg viewBox="0 0 64 64"><g fill="#134d8b"><path d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"></path></g></svg></a>
            <a href="https://twitter.com/Twitter" ><svg viewBox="0 0 64 64"><g fill="#134d8b"><path d="M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"></path></g></svg></a>
            <a href="https://www.instagram.com/instagram/" ><svg viewBox="0 0 64 64" ><g fill="#134d8b"><path d="M43.5,29.7h-2.6c0.2,0.7,0.3,1.5,0.3,2.3 c0,5.1-4.1,9.2-9.2,9.2c-5.1,0-9.2-4.1-9.2-9.2c0-0.8,0.1-1.6,0.3-2.3h-2.6v12.7c0,0.6,0.5,1.2,1.2,1.2h20.8c0.6,0,1.2-0.5,1.2-1.2 V29.7z M43.5,21.6c0-0.6-0.5-1.2-1.2-1.2h-3.5c-0.6,0-1.2,0.5-1.2,1.2v3.5c0,0.6,0.5,1.2,1.2,1.2h3.5c0.6,0,1.2-0.5,1.2-1.2V21.6z  M32,26.2c-3.2,0-5.8,2.6-5.8,5.8c0,3.2,2.6,5.8,5.8,5.8s5.8-2.6,5.8-5.8C37.8,28.8,35.2,26.2,32,26.2 M43.5,47H20.5 c-1.9,0-3.5-1.6-3.5-3.5V20.5c0-1.9,1.5-3.5,3.5-3.5h23.1c1.9,0,3.5,1.5,3.5,3.5v23.1C47,45.4,45.5,47,43.5,47"></path></g></svg></a>
            <a href="https://www.linkedin.com/company/linkedin/" ><svg viewBox="0 0 64 64" ><g fill="#134d8b"><path d="M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"></path></g></svg></a>
          </div>
          </Col>
        <Col md={4}>
          <h3 className="mb-3"><b>Contact Person</b></h3>
          <Card>
            <Card.Body>
              <Form.Label htmlFor="name">Name</Form.Label>
              <Form.Control
                type="text"
                id="name"
              />
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                type="email"
                id="email"
              />
              <Form.Label htmlFor="message">Message</Form.Label>
              <Form.Control as="textarea" rows={3}
                id="message"
              />
              <div class="d-grid gap-3 mt-3">
                <Button variant="outline-primary">Submit</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    );
  }
}

export default Contact;