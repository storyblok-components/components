import React from 'react';
import classNames from 'classnames';
import { getSpacingClass } from '../helpers/general';
/*
    Documentation:
        To use WithSpacing HOC
        1) wrap component you like to have box model spacing,
        2) add spacing-plugin schema to component
        3) add props.spacing variable to component className prop

        example for Row component:
        1. export default WithSpacing(Row)
        2.
            box_model: {
                type: 'custom',
                field_type: 'sbp-spacing-plugin',
                options: []
            },
        3. <div className={`${alignmentClass} ${props.spacing && props.spacing}`}>
*/
const withSpacing = (WrappedComponent) => {
  return (props) => {
    const { box_model } = props.blok;
    const getClasses = (size) =>
      box_model && box_model[size]
        ? Object.entries(box_model[size])
          .filter((item) => item[0] !== '_uid')
          .map((item) =>
            item[1] !== '-' ? getSpacingClass(item[1], size, item[0]) : false
          )
        : [false];

    // getting spacing for s / m / l breakpoints
    const spacing_s = getClasses('s');
    const spacing_m = getClasses('m');
    const spacing_l = getClasses('l');
    const classesToApply = [...spacing_s, ...spacing_m, ...spacing_l];
    const spacing = classNames(...classesToApply);
    return <WrappedComponent {...props} spacing={spacing} />;
  };
};

export default withSpacing;
