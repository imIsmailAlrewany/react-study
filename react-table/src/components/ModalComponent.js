import { createPortal } from "react-dom";

const ModalComponent = () => {
  return createPortal(
    <div>Hi from Modal</div>,
    document.getElementById('modal')
  );
};

export default ModalComponent;