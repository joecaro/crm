import React, { useContext, useState } from "react";
import { ResetButtonStyles, Toast } from "./ResetButtonElements";
import { Reset } from "../../pages/api/index";
import { CSSTransition } from "react-transition-group";
import { useListContext } from "../../Context/ListContext";

export default function ResetButton({ selectedList }) {
  const { allCommittees, setAllCommittees, list, setList, isLoading } =
    useListContext();
  const [isToastActive, setIsToastActive] = useState(false);

  const handleReset = async () => {
    let list = { filingFrequency: selectedList };
    try {
      let response = await Reset(list);
      handleToast(response);
      resetStatuses();
    } catch (err) {
      console.log(err);
    }
  };

  const resetStatuses = () => {
    const newList = list.map((item) => {
      const updatedItem = {
        ...item,
        status: 1,
      };
      return updatedItem;
    });
    const newAllCommittees = allCommittees.map((item) => {
      if (item.filingFrequency === selectedList) {
        const updatedItem = {
          ...item,
          status: 1,
        };
        return updatedItem;
      }
      return item;
    });

    setList(newList);
    setAllCommittees(newAllCommittees);
  };

  const handleToast = (res) => {
    setIsToastActive(true);
    setTimeout(() => {
      setIsToastActive(false);
    }, 3000);
  };

  return (
    <>
      <CSSTransition
        in={isToastActive}
        classNames='toast'
        timeout={0}
        unmountOnExit>
        <Toast>{selectedList} committees reset</Toast>
      </CSSTransition>
      <ResetButtonStyles onClick={() => handleReset()}>Reset</ResetButtonStyles>
    </>
  );
}
