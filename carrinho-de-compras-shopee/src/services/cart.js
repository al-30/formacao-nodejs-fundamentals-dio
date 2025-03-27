async function additem(userCart, item) {
  userCart.push(item);
}

async function calculateTotal(userCart) {
  return userCart.reduce((total, item) => total + item.subtotal, 0);
}

async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);
  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

async function removeItem(userCart, item) {
  const index = userCart.findIndex((cartItem) => cartItem.name === item.name);

  if (index === -1) {
    console.log(`Item not found in the cart`);
    return;
  }

  if (userCart[index].quantity > 1) {
    userCart[index].quantity -= 1;
    return;
  }

  if (userCart[index].quantity === 1) {
    userCart.splice(index, 1);
    return;
  }
}

async function displayCart(userCart) {
  console.log(`Welcome to the your Shopee cart list:`);

  userCart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name}. ${item.quantity} x R$ ${item.price.toFixed(2)} | subtotal: R$ ${item.subtotal}`);
  });
}

export { additem, calculateTotal, deleteItem, displayCart, removeItem };
