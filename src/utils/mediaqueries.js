import config from '~/site.config.js';

// Setup media query mixins for the following Media features
// (http://www.w3.org/TR/2012/REC-css3-mediaqueries-20120619/#media1):
//
// - Width
// - Height
// - Resolution
//
// The width and height mixins are for applying styles based on the width or
// height of the viewport, this can either be a minimum width or height or a
// maximum width or height, or a minimum width or height range or a maximum
// width or height range. The defaults are "width" and "minimum".
// The framework has a mobile first approach which means that the media queries
// are open to infinite rather than to zero. Therefor all breakpoints starting
// from `mobile` apply on every other higher breakpoint.
// If you want to scope a range you have to set the default value and also the
// max size with the same breakpoint, then the media query will be scoped.
// Default min and max breakpoints can be found here Core -> Settings -> Breakpoints.
// All sizes for mediaqueries are in em.
//
// @credit
// http://zellwk.com/blog/media-query-units/
//
// `$default-value` (min-breakpoint based) accepts:
// - numbers
//   - the number zero:
//     - literally zero
//     - infinite
//     - unset
//     N.B. If min and max result in zero a @warn will be shown which tells that
//     the media query is obsolete.
// - strings (breakpoints)
//     N.B. only known breakpoints other strings result in @error.
// - lists
//   - lists with numbers
//   - lists with breakpoints
//     N.B Currently its only possible to pass an ordered list with smallest
//     value first and the biggest value last. Mixed lists including numbers and
//     breakpoints are not possible at the moment but planned.
//
// `$max-value` (max-breakpoint based) accepts:
// - numbers
// - breakpoints
//   N.B. If the $default-value is using a range the default $max-value will be ignored.
//
// `$axis` accepts:
// - "width"
// - "height"

// Breakpoints
// Due to the huge usage of this mixin and the common understanding of the topic
// it gets the name breakpoint, even if its capable of applying ranges, but
// `ranges` is very generic and difficult to understand and `media-query` also and
// any additional word makes it really annoying to use regarding its high usage.
export default function media(valueDefault = 0, valueMax = 0, axis = 'width') {
  // Holds min breakpoints in this manner:
  // mobile: 0
  // tablet: 481
  // tabletFluid: 737
  // laptop: 977
  // desktop: 1441
  const baseBreakpointsMin = config?.responsive?.breakpoints;
  const isValueDefaultNumber = typeof valueDefault === 'number';

  if (baseBreakpointsMin === undefined)
    return console.error('The config object was not found.');

  // Creates max breakpoints in this manner:
  // mobile: 480
  // tablet: 736
  // tabletFluid: 976
  // laptop: 1440
  // desktop: 0

  const baseBreakpointsMax = {};
  const baseBreakpointsMinKeys = Object.keys(baseBreakpointsMin);
  const baseBreakpointsMinValues = Object.values(baseBreakpointsMin);

  baseBreakpointsMinValues.push(baseBreakpointsMinValues.shift());

  baseBreakpointsMinKeys.forEach((key, i) => {
    if (baseBreakpointsMinValues[i] !== 0)
      baseBreakpointsMax[key] = baseBreakpointsMinValues[i] - 1;
    else baseBreakpointsMax[key] = baseBreakpointsMinValues[i];
  });

  // Decrypts list/range based breakpoints
  if (typeof valueDefault === 'object') {
    // Determine difference between additional and compound queries
    // Additional: Adding up serial range after range with one min one max value
    // Compound : Ranges can have a gap between each other which can result in
    //   more than one min and max value in< mediaquery

    /* so by now just additional lists are possible */

    // Additional queries e.g. media([tablet,tabletFluid]), so still just one min and
    // one max value.

    // Get min values for additional query
    let additionalMediaqueryMin = [];

    valueDefault.map(value => {
      additionalMediaqueryMin.push(baseBreakpointsMin[value]);
      return null;
    });

    if (
      additionalMediaqueryMin.length !== valueDefault.length ||
      additionalMediaqueryMin === undefined
    )
      console.warn(
        'There is at least one named breakpoint that does not exist!',
      );

    // Determine smallest value and push into final var
    // N.B This just works if the list in the breakpoint arguments is sorted
    additionalMediaqueryMin = additionalMediaqueryMin.shift();

    // Push both values into $default-value and $max-value
    valueDefault = additionalMediaqueryMin;

    if (typeof valueMax === 'object') {
      // Get max values for additional query
      let additionalMediaqueryMax = [];

      valueMax.map(value => {
        additionalMediaqueryMax.push(baseBreakpointsMax[value]);
        return null;
      });

      // Determine biggest value and push into final var
      // N.B This just works if the list in the breakpoint arguments is sorted
      additionalMediaqueryMax = additionalMediaqueryMax.pop();

      // Push both values into $default-value and $max-value
      valueMax = additionalMediaqueryMax;
    }

    /* future compound condition goes here */

    // Compound queries (e.g. mobile + tablet + (tablet-fluid would follow but is missing) + laptop)
    // which ultimatly mean more than one min and one max value.

    /* here needs to be one more exit which generates the compound media query */
    // @media (min-#{$axis}: 1px) and (max-#{$axis}: 1px) {
    //   @content;
    //
  }

  // Decrypts name based max-breakpoint to numeric value.
  if (typeof valueMax === 'string') valueMax = baseBreakpointsMax[valueMax];

  // Decrypts name based min-breakpoint to numeric value.
  if (typeof valueDefault === 'string')
    valueDefault = baseBreakpointsMin[valueDefault];

  // console.log(valueDefault, valueMax);

  // If the range is impossible send out a warning
  if (isValueDefaultNumber && valueDefault > valueMax) {
    console.warn('Min value is larger than max value!');
    return '';
  }

  // If both name based breakpoints have zero values the usage of the mixin is obsolete.
  if (valueDefault === 0 && valueMax === 0) {
    console.warn(
      `Min and max values both result in zero, which makes the breakpoint usage obsolete.
E.g. using breakpoint 'mobile' is useless since this is a mobile first approach.
So everything is initially visible to mobile devices!`,
    );
    return '';
  }

  // Choosing a suitable media query for passed breakpoints.

  // Numeric min-based media query.
  if (typeof valueDefault === 'number' && valueDefault !== 0 && valueMax === 0)
    return `@media (min-${axis}: ${valueDefault}px)`; // Includes only min breakpoint.

  // Numeric max-based media query.
  if (typeof valueMax === 'number' && valueDefault === 0 && valueMax !== 0)
    return `@media (max-${axis}: ${valueMax}px)`; // Includes only max breakpoint.

  // Numeric range(min&max)-based media query.
  if (
    typeof valueDefault === 'number' &&
    typeof valueMax === 'number' &&
    valueDefault !== 0 &&
    valueMax !== 0
  )
    return `@media (min-${axis}: ${valueDefault}px) and (max-${axis}: ${valueMax}px)`; // Includes min and max breakpoint (range).
}

// console.log(`'mobile'             `, media('mobile'));
// console.log(`'mobile', 'mobile'   `, media('mobile', 'mobile'));
// console.log(`['mobile', 'mobile'] `, media(['mobile', 'mobile']));
// console.log(`['tablet', 1200]     `, media(['tablet', 1200]));
// console.log(`'tablet', 1200       `, media('tablet', 1200));
// console.log(`1200, 'tablet'       `, media(1200, 'tablet'));
