import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';

export const useShoppingCart = () => {
    const [ shoppingCart, setShoppingCart ] = useState<{ [key:string]: ProductInCart }>({});

    const onProductCountChange = ({ count, product }: { count:number, product:Product }) => {
        
        setShoppingCart( oldShoppingCart => {  
            if ( count === 0 ) {
              const { [product.id] : deleteProduc, ...newShoppingCart } = oldShoppingCart;
              return newShoppingCart;
            }
          
            return {
              ...oldShoppingCart,
              [product.id] : { ...product, count }
            }
          });  
    }  

    return {
        shoppingCart,
        onProductCountChange
    }
}


 