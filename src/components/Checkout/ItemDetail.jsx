import { FormControl, ListGroup, Row, Col, Image, InputGroup, Button } from "react-bootstrap";
import CheckoutContext from "../../contexts/CheckoutContext";
import { useContext } from "react";

const ItemDetail = (props) => {
  const { descrementQty, incrementQty } = useContext(CheckoutContext);

  const descrement = (id) => {
    descrementQty(id);
  };
  const increment = (id) => {
    incrementQty(id);
  };

  return (
    <ListGroup.Item>
      <Row>
        <Col md={3}>
          <Image src={props.item.avatar} width={100} />
        </Col>
        <Col md={7}>
          <p>
            <strong>{props.item.title}</strong>
          </p>
          <p>{props.item.description}</p>
          <p>{props.item.type}</p>
        </Col>
        <Col md={2}>
          <p>
            Price: <strong>{props.item.price}$</strong>
          </p>
          <InputGroup className="mb-3" size="sm">
            <Button variant="outline-secondary" id="button-addon1" onClick={() => descrement(props.item.id)} disabled={props.item.qty <= 1}>
              -
            </Button>
            <FormControl disabled value={props.item.qty} />
            <Button variant="outline-secondary" id="button-addon1" onClick={() => increment(props.item.id)} disabled={props.item.qty >= 10}>
              +
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default ItemDetail;
