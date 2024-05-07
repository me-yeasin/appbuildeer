import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import classes from "./overlay.module.scss";

const Backdrop = ({ onclick }: { onclick: () => void }) => {
  return <div className={classes["backdrop"]} onClick={onclick}></div>;
};

const RootOverlay = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

const Overlay = ({
  children,
  useBackdrop,
  onBackdropClick,
}: {
  children: React.ReactNode;
  useBackdrop: boolean;
  onBackdropClick?: () => void;
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
        <RootOverlay>{children}</RootOverlay>,
        document.getElementById("overlay") as HTMLDivElement
      )}
    </>
  );
};

export default React.memo(Overlay);
