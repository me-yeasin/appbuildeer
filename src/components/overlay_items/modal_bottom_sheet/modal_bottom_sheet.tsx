import Overlay from "../overlay/overlay";

import classes from "./modal_bottom_sheet.module.scss";

interface ModalBottomSheetProps {
  children: any;
  className?: string;
  toggleModalBottomSheet: boolean;
  onBackdropClick?: () => void;
}

const ModalBottomSheet: React.FC<ModalBottomSheetProps> = (props) => {
  return (
    <>
      <Overlay
        useBackdrop={props.toggleModalBottomSheet}
        onBackdropClick={props.onBackdropClick}
      >
        <div
          className={`
            ${props.className}
            ${
              props.toggleModalBottomSheet
                ? classes["modal-bottom-sheet__open"]
                : classes["modal-bottom-sheet__close"]
            }
            ${classes["modal-bottom-sheet"]}`}
        >
          {props.children}
        </div>
      </Overlay>
    </>
  );
};

export default ModalBottomSheet;
