function LeftContainer() {
  return (
    <section className="__col-1 col-12 col-md-5 col-lg-5 p-0">
      <picture>
        <source
          className="__image-2 img-fluid rounded-4"
          media="(max-width:768px)"
          srcSet="images/image-product-mobile.jpg"
        />
        <img
          className="__image-1 img-fluid rounded-4"
          src="images/image-product-desktop.jpg"
          alt="Perfume Product"
        />
      </picture>
    </section>
  );
}

export default LeftContainer;
