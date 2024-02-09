import './App.css'
import Button from './components/Button';
import Product from './components/Product';
import products from './constants/products';

function App() {

  return (
    <>
      <h1>Handbags & Purses</h1>
      <nav>
        <Button disabled={false}>to the collection</Button>
        <Button disabled={false}>shop all bags</Button>
        <Button disabled={true}>pre-orders</Button>
      </nav>
      <main>
        {
          products.map((product) => {
            return <Product key={product.pText} label={product.label} img={product.img} pText={product.pText} price={product.price} />   
          })
        }
      </main>
    </>
  )
}

export default App
