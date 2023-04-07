import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffee Mug',
  img: './coffee-mug.png'
}


export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
        >
          <ProductCard 
            product={ product }
            className='bg-dark text-white' 
          > 
              <ProductCard.Image className='custom-image' />
              <ProductCard.Title  className='text-bold' />
              <ProductCard.Buttons className='custom-buttons' />          
          </ProductCard>

           <ProductCard 
              product={ product }
              className='bg-dark text-white'
           > 
              <ProductImage 
                img={'./coffee-mug.png'}
                className='custom-image'
                style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
              />
              <ProductTitle 
                title={'Tasa de Café'} 
                className='text-bold'
              />
              <ProductButtons className='custom-buttons' />  
          </ProductCard>

          <ProductCard 
              product={ product }
              style={{ backgroundColor: '#70D1F8' }}
           > 
              <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
              <ProductTitle style={{ fontWeight: 'bold' }} />
              <ProductButtons style={{ display: 'flex', justifyContent: 'end' }}/>  
          </ProductCard>
        </div>
    </div>
  )
}
