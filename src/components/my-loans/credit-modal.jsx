// import React from "react";

import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { Cancel } from "../../icon-component/Icons";
import { useDispatch, useSelector } from "react-redux";
import { navigationActions } from "../../store/navigation";

const CreditModal = () => {
  const isOpen = useSelector((state) => state.navigate.payment);
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(navigationActions.onPayment(false));
  };
  return (
    <Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen} size={"sm"}>
      <DrawerOverlay />
      <DrawerContent bgColor="blue" width="20rem" marginX="auto">
        <DrawerHeader borderBottomWidth="1px">
          <div>
            <p>Deposit</p>
            <button>
              <Cancel />
            </button>
          </div>
        </DrawerHeader>
        <DrawerBody>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default CreditModal;
