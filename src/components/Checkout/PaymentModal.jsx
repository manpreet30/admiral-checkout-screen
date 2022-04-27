import { Modal, Button } from "react-bootstrap";
import { useContext } from "react";
import CheckoutContext from "../../contexts/CheckoutContext";

const PaymentModal = () => {
  const { setShowModal, showModal, totalAmount } = useContext(CheckoutContext);

  const onClickCancel = () => {
    setShowModal(false);
  };

  return (
    <Modal show={showModal} onHide={onClickCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Payment</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div>Please Pay: {totalAmount}$</div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" size="sm" onClick={onClickCancel}>
          Close
        </Button>
        <Button variant="primary" size="sm" onClick={onClickCancel}>
          Pay
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default PaymentModal;
