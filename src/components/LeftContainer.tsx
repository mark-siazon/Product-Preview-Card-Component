import productImg_Desktop from "/image-product-desktop.jpg";
import productImg_Mobile from "/image-product-mobile.jpg";

function LeftContainer() {
  return (
    <section>
      <h2 className="sr-only">Product Perfume Image: Gabrielle CHANEL PARIS</h2>
      <picture>
        <source media="(max-width:768px)" srcSet={productImg_Mobile} />
        <img
          className="img-fluid w-[400px] md:w-[300px] rounded-4 rounded-t-xl md:rounded-r-none md:rounded-l-xl md:h-full"
          src={productImg_Desktop}
          alt="Perfume Product"
        />
      </picture>
    </section>
  );
}

export default LeftContainer;
