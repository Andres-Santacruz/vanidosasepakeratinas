import { useState } from "react";

export const useModal = (initialState = false) => {
  const [isOpen, setOpen] = useState(initialState);

  const closeModal = () => {
    setOpen(false);
  };
  const openModal = () => {
    setOpen(true);
  };
  return [isOpen, closeModal, openModal];
};
