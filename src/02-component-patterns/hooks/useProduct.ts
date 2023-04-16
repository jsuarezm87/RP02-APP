import { useEffect, useRef, useState } from 'react';
import { InitialValues, Product, onChangeArgs } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValue?: InitialValues;
}

export const useProduct = ( { onChange, product, value = 0, initialValue }: useProductArgs) => {

    const [counter, setCounter ] = useState<number>( initialValue?.count || value );
    const isMounted = useRef(false);

    console.log('useProduct');

    const increaseBy = ( value: number ) => {  
        console.log('increaseBy');
        
        if ( value > 0 && initialValue?.maxCount === counter ) return;

        const newValue = Math.max( counter + value, 0);
        setCounter( newValue );

        onChange && onChange({ count: newValue, product });
    }

    const reset = () => {
        setCounter( initialValue?.count || value );
    }

    // const increaseBy = ( value: number ) => {  
    //     let newValue = Math.max( counter + value, 0);
    //     if ( initialValue?.maxCount ) newValue = Math.min( newValue, initialValue.maxCount )
    //     setCounter( newValue );
    //     onChange && onChange({ count: newValue, product });
    // }


    useEffect(() => {
        if ( !isMounted.current ) return;        
        setCounter( value );     
    }, [ value ]);

    useEffect(() => {
        isMounted.current = true;   
    }, []);    

    return {
        counter,
        increaseBy,
        maxCount: initialValue?.maxCount,
        isMaxCountReached: !!initialValue?.count && initialValue.maxCount === counter,
        reset
    }
}