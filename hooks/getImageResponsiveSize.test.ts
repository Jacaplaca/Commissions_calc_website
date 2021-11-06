import { getImageResponsiveSize } from "./useGetImageResponsiveSize";

describe("getSize", () => {
  it("should count", async () => {
    const sizes = {
      xl: { width: 1, height: 1 },
      lg: { width: 2, height: 2 },
      md: { width: 3, height: 3 },
      sm: { width: 4, height: 4 },
      xs: { width: 5, height: 5 },
      default: { width: 6, height: 6 },
    };

    const screensSM = { xs: false, sm: true, md: false, lg: false, xl: false };
    const screensXS = { xs: true, sm: false, md: false, lg: false, xl: false };
    const resultSM = getImageResponsiveSize(screensSM, sizes);
    const resultXS = getImageResponsiveSize(screensXS, sizes);
    expect(resultSM).toBe(sizes.sm);
    expect(resultXS).toBe(sizes.xs);
  });
});
