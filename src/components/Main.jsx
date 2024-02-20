import Product from "./Product";
import products from '../constants/products';

function Main() {
    return (
        <main>
            {
                products.map((product) => {
                    return <Product key={product.pText} label={product.label} img={product.img} pText={product.pText} price={product.price} />
                })
            }
        </main>
    );
}

export default Main;