import React from 'react'
import { Button, Card } from "antd";
import { useDispatch } from "react-redux";

const ItemList = ({ item }) => {
    const dispatch = useDispatch();
    // update cart handler
    const handleAddTOCart = () => {
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...item, quantity: 1 },
      });
    };
    const { Meta } = Card;
    return (
      <div>
        <Card
          style={{ width: 240, marginBottom: 15, marginTop: 15, border: '2px solid blue' }}
          cover={<img alt={item.name} src={item.image} style={{ height: 200, padding: 2 }} />}
        >
          <Meta title={item.name} />
          <div className="item-button">
            <Button onClick={() => handleAddTOCart()}>Add to cart</Button>
          </div>
        </Card>
      </div>
    );
  };

export default ItemList