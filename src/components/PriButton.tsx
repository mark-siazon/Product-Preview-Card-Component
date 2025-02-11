interface PriButtonProps {
  onClick: () => void;
}

function PriButton({ onClick }: PriButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="button flex gap-x-2 justify-center self-center py-3 w-full md:max-w-[87.5%] mb-7"
    >
      <img src="icon-cart.svg" className="my-auto" alt="Add to Cart Icon" />
      <span className="text-light">Add to Cart</span>
    </button>
  );
}

export default PriButton;
