import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { Breakpoint } from "antd/lib/_util/responsiveObserve";
import { useEffect, useState } from "react";

type UseGetImageResponsiveSizeArgs = {
  xl: { width: number; height: number };
  lg: { width: number; height: number };
  md: { width: number; height: number };
  sm: { width: number; height: number };
  xs: { width: number; height: number };
  default: { width: number; height: number };
};

export const getImageResponsiveSize = (
  screen: Partial<Record<Breakpoint, boolean>>,
  sizes: UseGetImageResponsiveSizeArgs
) => {
  const { xs, sm, md, lg, xl } = screen;

  if (xl) {
    return sizes.xl;
  }

  if (lg) {
    return sizes.lg;
  }

  if (md) {
    return sizes.md;
  }

  if (!md && sm && !xs) {
    return sizes.sm;
  }

  if (!md && !sm && xs) {
    return sizes.xs;
  }

  return sizes.default;
};

const useGetImageResponsiveSize = (sizes: UseGetImageResponsiveSizeArgs) => {
  const screen = useBreakpoint();
  const [size, setSize] = useState({ width: 570, height: 570 });

  useEffect(() => {
    const size = getImageResponsiveSize(screen, sizes);
    setSize(size);
  }, [screen]);

  return size;
};

export default useGetImageResponsiveSize;
