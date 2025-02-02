function RightContainer() {
  return (
    <section className="mx-auto md:ms-[30px] mt-[30px] my-md-1 max-w-[275px] font-sans">
      <div className="__hero-header my-0 my-md-3 me-3">
        <h3 className="text-xs uppercase mb-3 tracking-[0.3rem] font-sans text-neu-darkgrayishblue ">
          Perfume
        </h3>
        <h1 className="text-3xl mb-4 font-bold font-serif">
          Gabrielle Essence Eau De Parfum
        </h1>
      </div>

      <div className="text-base text-neu-darkgrayishblue">
        <p>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
      </div>

      <div className="flex  my-4 font-serif">
        {/* __hero-prices */}
        <p className="text-4xl font-bold text-pri-darkcyan">$149.99</p>
        <p className="fs-6 col-5 col-md-3 col-lg-2 my-auto mx-2 line-through text-neu-darkgrayishblue text-semibold">
          $169.99
        </p>
      </div>

      <div className="__hero-btns row">
        <button
          type="button"
          className="flex justify-center mx-auto btn btn-primary mb-2 mb-md-3 mb-lg-4 bg-pri-darkcyan py-4 w-full rounded-xl text-neu-white"
        >
          <img src="icon-cart.svg" alt="Add to Cart Icon" />
          <span className="ps-1 text-light">Add to Cart</span>
        </button>
      </div>
    </section>
  );
}

export default RightContainer;
