import { createContext, ReactElement, CSSProperties } from 'react';
import styles  from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';



export interface Props {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children: ( args: ProductCardHandlers ) => JSX.Element;
    className?: string;
    style?:  CSSProperties;
    onChange?: ( arg: onChangeArgs ) => void;
    value?: number;
    initialValue?: InitialValues;
}

export const ProductContext = createContext({} as ProductContextProps);


export const ProductCard = ({ 
  children, 
  product, 
  className, 
  style, 
  onChange, 
  value, 
  initialValue 
}: Props ) => {


    const { counter, increaseBy, maxCount, 
            isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValue });

  return (
    <ProductContext.Provider 
        value={ {counter, increaseBy, product, maxCount } }
    >
      <div 
        className={ `${styles.productCard} ${className}` }
        style={ style }
      >
        {/* { children }             */}
        { 
          children({
            count: counter,
            isMaxCountReached,
            maxCount,
            product,
            increaseBy,
            reset 
          }) 
        }            
      </div>

    </ProductContext.Provider>   
  )
}


