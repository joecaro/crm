import { useReducer, useState } from "react";

const initialState = {
  committeeName: "",
  filingFrequency: "",
  poc: "",
  pocEmail: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "toggleModal":
      return action.payload;
    case "closeModal":
      return {
        committeeName: "",
        filingFrequency: "",
        poc: "",
        pocEmail: "",
      };
    default:
      throw new Error("no valid action provided");
  }
}

const useModal = () => {
  const [modalState, dispatch] = useReducer(reducer, initialState);
  const [isModal, setIsModal] = useState(false);

  function toggleModal(item) {
    dispatch({ type: "toggleModal", payload: item });
    setIsModal(!isModal);
  }

  return [isModal, modalState, toggleModal];
};

export default useModal;
