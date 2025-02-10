interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function Modal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    // Overlay background
    <div
      className="
        fixed inset-0 flex items-center justify-center 
      bg-black/75"
    >
      <div className="w-80 bg-white text-pri-darkcyan p-6 rounded-lg shadow-lg text-center">
        <h2 className="mb-3 text-lg font-bold">Item Added to Cart</h2>

        <p className="mb-4 text-base text-gray-600">
          <span className="font-bold">Gabrielle Essence Eau De Parfum</span> has
          been added to your cart.
        </p>

        <button onClick={onClose} className="button mt-3 mx-auto py-2 w-24">
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
