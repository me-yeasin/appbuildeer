import ModalBottomSheet from "@/components/overlay_items/modal_bottom_sheet/modal_bottom_sheet";

import classes from "./communication_option_modal_sheet.module.scss";

interface CommunicationOptionModalSheetProps {
  toggleModalBottomSheet: boolean;
  onBackdropClick: () => void;
  communicationList: any[];
  onItemClick: (id: string) => void;
  holdId: string;
}

const CommunicationOptionModalSheet: React.FC<
  CommunicationOptionModalSheetProps
> = (props) => {
  return (
    <ModalBottomSheet
      toggleModalBottomSheet={props.toggleModalBottomSheet}
      onBackdropClick={props.onBackdropClick}
      className={classes["heading-section__modal"]}
    >
      <div className={classes["heading-section__modal-heading"]}>
        <p className={classes["heading-section__modal-heading-text"]}>
          Change Communication Method
        </p>
      </div>
      <ul className={classes["heading-section__modal-list"]}>
        {props.communicationList.map((item, index) => {
          return (
            <CommunicationOptionItem
              key={index}
              name={item.name}
              shortDescription={item.description}
              icon={item.icon}
              onClick={() => props.onItemClick(item.id)}
              isActive={props.holdId === item.id}
            />
          );
        })}
      </ul>
    </ModalBottomSheet>
  );
};

export default CommunicationOptionModalSheet;

interface CommunicationOptionItemProps {
  name: string;
  shortDescription: string;
  icon: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
}

const CommunicationOptionItem: React.FC<CommunicationOptionItemProps> = (
  props
) => {
  return (
    <li className={classes["heading-section__modal-list-item"]}>
      <button
        onClick={props.onClick}
        className={classes["heading-section__modal-list-item-btn"]}
      >
        <div
          className={classes["heading-section__modal-list-item-btn-content"]}
        >
          <div
            className={
              classes["heading-section__modal-list-item-btn-content__row"]
            }
          >
            {props.icon}
            <div
              className={
                classes[
                  "heading-section__modal-list-item-btn-content__row-column"
                ]
              }
            >
              <p
                className={
                  classes[
                    "heading-section__modal-list-item-btn-content__row-text"
                  ]
                }
              >
                {props.name}
              </p>
              <p
                className={
                  classes[
                    "heading-section__modal-list-item-btn-content__row-sub-text"
                  ]
                }
              >
                {props.shortDescription}
              </p>
            </div>
          </div>
        </div>
        <div
          className={`${
            props.isActive ? classes["active"] : classes["deactive"]
          } ${
            classes["heading-section__modal-list-item-btn__activated-or-not"]
          }`}
        ></div>
      </button>
    </li>
  );
};
