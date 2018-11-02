// Apply breakpoints to element
// Applies breakpoints to default classes if needed, which makes these classes
// scale with the current settings of the framework and also keeps the workflow
// DRY.
// N.B. Just works with set breakpoints, no loose numbers allowed.
@mixin breakpoints-to-element($element: '', $global: true, $breakpoints: $base-breakpoints-min-keys) {

  @if $global {
    // Includes the element as default element first, which applies the setting global if
    // needed. If the settings needs to be customized the responsive classes will override
    // this class.
    #{$element} {
      @content;
    }
  }

  $k: 1;
  @while ($k <= length($breakpoints)) {

    $breakpoint: nth($breakpoints, $k);

    // Applies range to the element
    @include breakpoint($breakpoint, $breakpoint) {

      $breakpoint: \@ + $breakpoint;

      #{$element}#{unquote($breakpoint)} {
        @content;
      }
    }
    $k: $k + 1;
  }

}
