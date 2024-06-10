import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function InstructionsModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Help
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shipment Methods</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Our company applies quantity-based pricing per order:</p>
          <ul>
            <li>R150 per order for 5 or fewer items</li>
            <li>R200 per order for 10 or fewer items</li>
            <li>R350 per order for more than 10 items</li>
          </ul>
          <h5>Standard Shipment Method</h5>{" "}
          <ul>
            <li>
              This option strikes a balance between affordability and delivery
              time.
            </li>
            <li>
              Standard shipping is dependable, typically arriving within five to
              seven business days.
            </li>
          </ul>
          <h5>Express Shipping Method</h5>
          <ul>
            <li>Enjoy expedited delivery with our express shipping service.</li>
            <li>
              Expect your package to arrive within two to three business days.
            </li>
          </ul>
          <h5>Overnight Shipping Method</h5>
          <ul>
            <li>
              Get your package by the next business day, unless otherwise
              specified.
            </li>
            <li>An additional fee of R100 applies for overnight delivery.</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default InstructionsModal;
