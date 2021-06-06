export const getSpacingClass = (prop, breakpoint, spacingType) => {
  if (prop === 'none') {
    return `u-${breakpoint}-${spacingType}-0`;
  }
  return `u-${breakpoint}-${spacingType}-${prop}`;
};
