import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  toggleModalBottomSheetAnimation,
  toggleModalBottomSheetHandler,
} from "../../../store/slice/modal_bottom_sheet_slice";
import Overlay from "../overlay/overlay";

import classes from "./modal_bottom_sheet.module.scss";

interface ModalBottomSheetProps {
  children: any;
  className?: string;
}

const ModalBottomSheet: React.FC<ModalBottomSheetProps> = (props) => {
  const modalBottomSheetVars = useAppSelector(
    (state) => state.modalBottomSheetSlice
  );

  const dispatch = useAppDispatch();

  const closeModelBottomSheet = () => {
    if (modalBottomSheetVars.isCloseAnimationDone) {
      dispatch(toggleModalBottomSheetHandler(false));
    }
  };

  return (
    <>
      {modalBottomSheetVars.toggleModalBottomSheet && (
        <Overlay
          useBackdrop={true}
          onBackdropClick={() => {
            dispatch(toggleModalBottomSheetAnimation(true));
          }}
        >
          <div
            className={`
            ${props.className}
            ${
              modalBottomSheetVars.isCloseAnimationDone
                ? classes["modal-bottom-sheet__close"]
                : classes["modal-bottom-sheet__open"]
            }
            ${classes["modal-bottom-sheet"]}`}
            onTransitionEnd={closeModelBottomSheet}
          >
            {props.children}
          </div>
        </Overlay>
      )}
    </>
  );
};

export default ModalBottomSheet;
