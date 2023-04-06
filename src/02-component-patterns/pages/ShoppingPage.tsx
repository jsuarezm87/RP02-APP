import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';

const productCoffe = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}

const productCoffe2 = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: ''
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
          <ProductCard product={ productCoffe } > 
            <ProductCard.Image />
            <ProductCard.Title />
            <ProductCard.Buttons />          
          </ProductCard>

           <ProductCard product={ productCoffe2 } > 
            <ProductImage img={'./coffee-mug.png'}/>
            <ProductTitle title={'Tasa de Café'}/>
            <ProductButtons />          
          </ProductCard>
        </div>
    </div>
  )
}
