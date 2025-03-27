import * as cartService from './services/cart.js';
import creatItem from './services/item.js';
const myCart = [];

const item1 = await creatItem('Apple', 1, 2);
const item2 = await creatItem('Banana', 2, 3);

await cartService.additem(myCart, item1);

await cartService.additem(myCart, item2);

// await cartService.deleteItem(myCart, item1.name);
// await cartService.removeItem(myCart, 1);
await cartService.removeItem(myCart, item1);
await cartService.displayCart(myCart);

console.log(`Total: ${await cartService.calculateTotal(myCart)}`);
