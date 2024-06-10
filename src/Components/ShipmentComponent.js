//Shipment component.js.
import React, { useState } from "react";
import { Dropdown, DropdownButton, Button, Form } from "react-bootstrap";

export default function ShipmentMethod({ onSelect }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedShipping, setSelectedShipping] = useState(null);
  const [address, setAddress] = useState("");
  const [submittedAddress, setSubmittedAddress] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setSelectedShipping(option);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = () => {
    setSubmittedAddress(address);
  };

  return (
    <div className="shipment">
      <div className="shipment-adress">
        <h4>Enter Shipping Address:</h4>
        <Form.Control
          className="shipment-adress-form"
          type="text"
          placeholder="Enter your shipping address"
          value={address}
          onChange={handleAddress}
        />
      </div>
      <Button className="address-button" type="button" onClick={handleSubmit}>
        Submit
      </Button>
      {submittedAddress && <p>Confirmed Adress: {submittedAddress}</p>}
      <h4>Select Shipping Method:</h4>
      <DropdownButton
        id="dropdown-shipping-options"
        title={
          selectedShipping
            ? `Selected Option: ${selectedShipping}`
            : "Select Shipping Option"
        }
      >
        <Dropdown.Item
          onClick={() => handleSelect("standard")}
          active={selectedOption === "standard"}
        >
          Standard Shipping - 3 to 5 business days
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => handleSelect("express")}
          active={selectedOption === "express"}
        >
          Express Shipping - 1 to 2 business days
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
}
