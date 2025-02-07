function PriButton() {
  return (
    <button
      type="button"
      className="flex gap-x-2 justify-center self-center text-base bg-pri-darkcyan active:bg-pri-darkcyan-active  cursor-pointer hover:brightness-115 transition-all duration-500 py-3 w-full md:max-w-[87.5%] mb-7 rounded-xl text-neu-white"
    >
      <img src="icon-cart.svg" className="my-auto" alt="Add to Cart Icon" />
      <span className="text-light">Add to Cart</span>
    </button>
  );
}

export default PriButton;
