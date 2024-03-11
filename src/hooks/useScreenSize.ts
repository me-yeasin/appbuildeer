import { useEffect, useState } from "react";

interface DeviceSize {
  height: number;
  width: number;
}

export const useScreenSize = (): number[] => {
  const [deviceSize, setDeviceSize] = useState<DeviceSize>({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    const resizeHandler = () => {
      setDeviceSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    resizeHandler();

    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return [deviceSize.height, deviceSize.width];
};
