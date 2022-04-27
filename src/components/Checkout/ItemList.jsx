import { ListGroup } from "react-bootstrap";
import ItemDetail from "./ItemDetail";
import CheckoutContext from "../../contexts/CheckoutContext";
import { useContext } from "react";

const ItemList = () => {
  const { items, totalAmount } = useContext(CheckoutContext);
  return (
    <ListGroup>
      {items.map((item, key) => {
        return <ItemDetail item={item} key={key} />;
      })}
      <ListGroup.Item>
        <div className="d-flex justify-content-end">
          <p>
            Total: <strong>{totalAmount}$</strong>
          </p>
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default ItemList;
