

export const fetchOrders = () => (
  $.ajax({
    method: "GET",
    url: "/api/orders"
  })
);

export const fetchOrder = (orderId) => (
  $.ajax({
    method: "GET",
    url: `/api/orders/${orderId}`
  })
);

export const createOrder = (order) => {
  return(
    $.ajax({
      method: "POST",
      url: "/api/orders",
      data: { order }
    })
  )
};

export const fetchOrdersByShop = (id) => (
  $.ajax({
    method: "GET",
    url: '/api/orders/by_shop',
    data: { id }
  })
)