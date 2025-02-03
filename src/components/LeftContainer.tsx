import productImg_Desktop from "/image-product-desktop.jpg";
import productImg_Mobile from "/image-product-mobile.jpg";

function LeftContainer() {
  return (
    <section>
      <picture>
        <source
          media="(max-width:768px)"
          srcSet={productImg_Mobile}
          width={400}
        />
        <img
          className="img-fluid rounded-4 rounded-t-2xl md:rounded-r-none md:rounded-l-xl md:h-full"
          src={productImg_Desktop}
          width={300}
          alt="Perfume Product"
        />
      </picture>
    </section>
  );
}

export default LeftContainer;
