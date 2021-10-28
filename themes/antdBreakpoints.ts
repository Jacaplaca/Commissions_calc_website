export const sizesAntdBreakpoints = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
};

const antdBreakpoints = {
  xs: `(min-width: ${sizesAntdBreakpoints.xs}px)`,
  sm: `(min-width: ${sizesAntdBreakpoints.sm}px)`,
  md: `(min-width: ${sizesAntdBreakpoints.md}px)`,
  lg: `(min-width: ${sizesAntdBreakpoints.lg}px)`,
  xl: `(min-width: ${sizesAntdBreakpoints.xl}px)`,
  xxl: `(min-width: ${sizesAntdBreakpoints.xxl}px)`,
  xsMax: `(max-width: ${sizesAntdBreakpoints.xs}px)`,
  smMax: `(max-width: ${sizesAntdBreakpoints.sm}px)`,
  mdMax: `(max-width: ${sizesAntdBreakpoints.md}px)`,
  lgMax: `(max-width: ${sizesAntdBreakpoints.lg}px)`,
  xlMax: `(max-width: ${sizesAntdBreakpoints.xl}px)`,
  xxlMax: `(max-width: ${sizesAntdBreakpoints.xxl}px)`,
};

export default antdBreakpoints;
