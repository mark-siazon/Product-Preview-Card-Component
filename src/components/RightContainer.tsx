import PriButton from "./PriButton";

function RightContainer() {
  return (
    <section className="mx-auto md:ms-[30px] mt-[30px] max-w-[85%] md:max-w-[260px] font-sans text-neu-darkgrayishblue">
      <div className="md:max-w-[80%]">
        <h3 className="text-sm uppercase mb-3 tracking-[0.3rem] ">Perfume</h3>
        <h1 className="text-4xl mb-4 md:tracking-wide md:leading-9 font-bold font-serif text-neu-verydarkblue">
          Gabrielle Essence Eau De Parfum
        </h1>
      </div>

      <div className="text-base md:max-w-[87.5%]">
        <p>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
      </div>

      <div className="flex my-8 font-serif gap-x-4">
        <p className="text-4xl font-bold text-pri-darkcyan">$149.99</p>
        <p className="text-base font-medium my-auto line-through">$169.99</p>
      </div>

      <PriButton />
    </section>
  );
}

export default RightContainer;
