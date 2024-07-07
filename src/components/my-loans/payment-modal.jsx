import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { navigationActions } from "../../store/navigation";
import CustomInput from "../../widget/custom-input";
import { Bitcoins } from "../../icon-component/Icons";

const PaymentModal = ({ title }) => {
  const isOpen = useSelector((state) => state.navigate.payment.isOpen);

  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(navigationActions.onPayment(false));
  };

  const isCentered = useBreakpointValue({ base: false, md: true });
  const motionPreset = useBreakpointValue({
    base: "slideInBottom",
  });

  const modalStyles = useBreakpointValue({
    base: { position: "absolute", bottom: 0, marginBottom: 0 },
    md: {},
  });

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset={motionPreset}
      isCentered={isCentered}
    >
      <ModalOverlay />
      <ModalContent bgColor={"#191A1F"} {...modalStyles}>
        <ModalHeader fontWeight={600} color={"#F2F4F5"}>
          {title}
        </ModalHeader>
        <ModalCloseButton color={"#9BA6B7"} />
        <ModalBody>
          <Box className="border-y border-[#212228] font-Inter py-7">
            <Box>
              <CustomInput title={"Assets"} Icon={Bitcoins} coin={"BUSD"} />
              <p className="font-Inter text-[12px] text-[#6D7A86] font-[500] flex gap-3 mt-1">
                <span>Withdrawable Balance</span>
                <span>
                  <Bitcoins />
                </span>
                <span className="text-[#F2F4F5] font-[600]">32,000 BUSD</span>
              </p>
            </Box>
            <Box className="relative mt-4">
              <p className="font-Inter font-[500] text-[#6D7A86] text-[12px]">
                {"Deposit Quantity"}
              </p>
              <input
                type="number"
                placeholder="0,00"
                className="w-full h-11 bg-[#212228] rounded-md px-3 outline-none mt-1"
              />
              <button className="w-[70px] h-8 rounded-md bg-[#1F3E85] absolute top-7 right-1 text-[14px]">
                max
              </button>
            </Box>
          </Box>
        </ModalBody>
        <ModalFooter>
          <button className="w-full h-10 rounded-md bg-[#1F3E85] text-[14px]">
            Confirm
          </button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PaymentModal;
