import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import classes from "./overlay.module.scss";

const Backdrop = ({ onclick }: { onclick: () => void }) => {
  return <div className={classes["backdrop"]} onClick={onclick}></div>;
};

const RootOverlay = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: any;
}) => {
  return (
    <div className={`${className} ${classes["root-overlay"]}`}>{children}</div>
  );
};

const Overlay = ({
  children,
  useBackdrop,
  onBackdropClick,
  className,
}: {
  children: React.ReactNode;
  useBackdrop: boolean;
  onBackdropClick?: () => void;
  className?: any;
}) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  if (!mounted) {
    return;
  }

  return (
    <>
      {useBackdrop &&
        createPortal(
          <Backdrop onclick={onBackdropClick as () => void} />,
          document.getElementById("backdrop") as HTMLDivElement
        )}
      {createPortal(
        <RootOverlay className={className}>{children}</RootOverlay>,
        document.getElementById("overlay") as HTMLDivElement
      )}
    </>
  );
};

export default Overlay;
