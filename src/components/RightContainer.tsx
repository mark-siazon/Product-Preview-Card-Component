function RightContainer() {
  return (
    <section className="__col-2 col ms-3 my-4 my-md-1">
      <div className="__hero-header my-0 my-md-3 me-3">
        <h3 className="fs-5 mb-3">Perfume</h3>
        <h1 className="fs-1 mb-4">Gabrielle Essence Eau De Parfum</h1>
      </div>

      <div className="__hero-paragraph me-md-5 my-4">
        <p>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
      </div>

      <div className="__hero-prices col-12 col-md-8 col-lg-6 row mx-auto mx-md-0 my-4">
        <p className="fs-3 col-4 col-md-8 col-lg-7 m-auto">$149.99</p>
        <p className="fs-6 col-5 col-md-3 col-lg-2 my-auto mx-2 text-decoration-line-through text-muted">
          $169.99
        </p>
      </div>

      <div className="__hero-btns row">
        <button
          type="button"
          className="__main-btns col-9 col-md-6 mx-auto btn btn-primary mb-2 mb-md-3 mb-lg-4"
        >
          <img src="images/icon-cart.svg" alt="Add to Cart Icon" />
          <span className="ps-1 text-light">Add to Cart</span>
        </button>
      </div>
    </section>
  );
}

export default RightContainer;
