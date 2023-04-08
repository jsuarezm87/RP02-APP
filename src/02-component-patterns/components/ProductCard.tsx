import { createContext, ReactElement, CSSProperties } from 'react';
import styles  from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, onChangeArgs } from '../interfaces/interfaces';

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?:  CSSProperties;
    onChange?: ( arg: onChangeArgs ) => void;
    value?: number;
}

export const ProductContext = createContext({} as ProductContextProps);


export const ProductCard = ({ children, product, className, style, onChange, value }: Props) => {

    const { counter, increaseBy } = useProduct({ onChange, product, value });

  return (
    <ProductContext.Provider 
        value={ {counter, increaseBy, product} }
    >
      <div 
        className={ `${styles.productCard} ${className}` }
        style={ style }
      >
        { children }        
      </div>

    </ProductContext.Provider>   
  )
}


