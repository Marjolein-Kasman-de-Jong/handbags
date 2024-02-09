function Tile({children, title, img}) {
   return (
        <section>
            {img ?  <img src={img}/> : <><h2>{title}</h2>{children}</>}
        </section>
    );
}

export default Tile;