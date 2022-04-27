import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemList from "./components/Checkout/ItemList";
import PaymentModal from "./components/Checkout/PaymentModal";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useEffect, useState, createContext } from "react";
import { getItems } from "./services/itemServices";
import CheckoutContext from "./contexts/CheckoutContext";

function App() {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    getItems().then((res) => {
      setItems(res.data);
    });
  }, []);

  useEffect(() => {
    setTotalAmount(items.reduce((total, obj) => total + obj.price * obj.qty, 0));
  }, [items]);

  const incrementQty = (id) => {
    setItems((items) => {
      return items.map((i) => {
        const item = { ...i };
        if (item.id === id) item.qty++;
        return item;
      });
    });
  };
  const descrementQty = (id) => {
    setItems((items) => {
      return items.map((i) => {
        const item = { ...i };
        if (item.id === id) item.qty--;
        return item;
      });
    });
  };

  return (
    <CheckoutContext.Provider
      value={{
        descrementQty: (id) => descrementQty(id),
        incrementQty: (id) => incrementQty(id),
        setShowModal: (val) => setShowModal(val),
        totalAmount,
        items,
        showModal,
      }}
    >
      <Container fluid="md" className="mt-3">
        <Row>
          <Col md="9">
            <ItemList />
          </Col>
          <Col md="3">
            <div className="d-grid gap-2">
              <div className="d-flex justify-content-between">
                <p>VAT:</p>
                <p>
                  <strong>0$</strong>
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Total:</p>
                <p>
                  <strong>{totalAmount}$</strong>
                </p>
              </div>
              <Button variant="primary" size="lg" onClick={() => setShowModal(true)}>
                Checkout
              </Button>
            </div>
          </Col>
        </Row>
        <PaymentModal />
      </Container>
    </CheckoutContext.Provider>
  );
}

export default App;
