import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const OtpTimer = () => {
  const [timer, setTimer] = useState(20);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive]);

  const resetTimer = () => {
    setTimer(20);
    setIsActive(true);
  };

  return (
    <div>
      <Row className="text-center mt-3">
        <Col>
          <Button variant="link" onClick={resetTimer} disabled={isActive && timer > 0} className="text-dark">
            Send code again
          </Button>{' '}
          <span className="fw-bold">00:{timer < 10 ? `0${timer}` : timer}</span>
        </Col>
      </Row>
    </div>
  );
};

export default OtpTimer;
