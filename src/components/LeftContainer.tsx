import productImg_Desktop from "/image-product-desktop.jpg";
import productImg_Mobile from "/image-product-mobile.jpg";

function LeftContainer() {
  return (
    <section className="__col-1 col-12 col-md-5 col-lg-5 p-0">
      <picture>
        <source
          className="__image-2 img-fluid rounded-4"
          media="(max-width:768px)"
          srcSet={productImg_Mobile}
        />
        <img
          className="__image-1 img-fluid rounded-4"
          src={productImg_Desktop}
          alt="Perfume Product"
          width={300}
        />
      </picture>
    </section>
  );
}

export default LeftContainer;
