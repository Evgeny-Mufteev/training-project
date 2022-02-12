import React from "react";
import style from "./modal.module.scss";

type ModalPropsType = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: any;
};

const Modal: React.FC<ModalPropsType> = (props) => {
  const { active, setActive, children } = props;
  return (
    <div
      role="presentation"
      className={active ? `${style.active} ${style.modal}` : style.modal}
      onClick={() => setActive(false)}>
      <div
        role="presentation"
        className={
          active
            ? `${style.modal__content} ${style.modal}`
            : style.modal__content
        }
        onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
