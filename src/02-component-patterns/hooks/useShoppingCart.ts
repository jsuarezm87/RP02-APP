import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';

export const useShoppingCart = () => {
    const [ shoppingCart, setShoppingCart ] = useState<{ [key:string]: ProductInCart }>({});

    const onProductCountChange = ({ count, product }: { count:number, product:Product }) => {
  
        setShoppingCart( oldShoppingCart => {
  
        const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 }
  
        // Se aumenta la cantidad de producto
        if ( Math.max( productInCart.count + count, 0) > 0 ) {
          productInCart.count += count;
          return {
            ...oldShoppingCart,
            [product.id]: productInCart
          }
        }
  
        // Se resta la cantidad del producto
        const { [product.id] : deleteProduc, ...newShoppingCart } = oldShoppingCart;
        return newShoppingCart;
  
      }); 
    }  

    return {
        shoppingCart,
        onProductCountChange
    }
}


 // setShoppingCart( oldShoppingCart => {  
//   if ( count === 0 ) {
//     const { [product.id] : deleteProduc, ...newShoppingCart } = oldShoppingCart;
//     return newShoppingCart;
//   }

//   return {
//     ...oldShoppingCart,
//     [product.id] : { ...product, count }
//   }
// });    