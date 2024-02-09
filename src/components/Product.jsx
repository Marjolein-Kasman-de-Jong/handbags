function Product({label, img, pText, price}) {

    return (
        <article>
            <span>{label}</span>
            <img src={img} alt={pText} />
            <p>{pText}</p>
            <h4>{`€${price},-`}</h4>
        </article>
    );
}

export default Product;