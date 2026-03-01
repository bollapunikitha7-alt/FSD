import { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div>
      <h2>My Orders</h2>

      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        orders.map((order) => (
          <div key={order.id}>
            <h4>Order Date: {order.date}</h4>

            {order.items.map((item) => (
              <p key={item.id}>
                {item.name} × {item.quantity} (₹{item.price})
              </p>
            ))}

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;
