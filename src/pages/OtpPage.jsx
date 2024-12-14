import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import mainLogo from "../assets/images/icon/mainLogo1.png"
import OtpForm from "../components/OtpForm";
import OtpTimer from "../components/OtpTimer";

const OtpPage = () => {

  return (
    <div className="main-bg">
      <Container
        style={{ height: "100%", marginTop: "50px" }}
      >

        <Row className="w-100">
          <Col xs={1}>
            <Button as={Link} to="/login" variant="light" style={{
                backgroundColor: "transparent",
                border: "2px solid black"
            }}>
              &#8592;
            </Button>

          </Col>
          <Col className="d-flex">
            <img src={mainLogo} alt="main alt"
            style={{ width: "40px", marginLeft: "800px" }} />
            
            <h3 className="fw-bold">KIYAY KOKI</h3>
          </Col>
        </Row>

        <Row className="text-center mt-4">
          <Col>
            <h1 className="fw-bold">Enter Code</h1>
            <p>
              Kami telah mengirim SMS dengan kode aktivasi ke no WhatsApp Anda
            </p>
          </Col>
        </Row>

        {/* Form */}
        <OtpForm />

        {/* Timer */}
        <OtpTimer />
      </Container>
    </div>
  );
};

export default OtpPage;
