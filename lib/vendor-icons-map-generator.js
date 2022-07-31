const fs = require('fs');
const iconsMap = require('../map.json');

let iconsMapScssContent = '';

iconsMap.forEach((icon) => {
  let rule = '';
  icon.classNames[0] = '&.' + icon.classNames[0];
  let selector = icon.classNames.join(', &.');

  rule =
    rule +
    `${selector} {
      @include filter-icon('/assets/vendor-icons/${icon.path}', ${icon.size});
  }
  `;

  iconsMapScssContent = iconsMapScssContent + rule;
});

iconsMapScssContent = `/*
============================================================
GENERATED FILE !!!
------------------------------------------------------------
If you need to make any changes, do it in:
  * vendor-icons-map.json
  * vendor-icons-map-generator.js
============================================================
*/

@mixin filter-icon($src, $width, $height) {
  background-image: url($src);
  background-size: $width $height;
  background-repeat: no-repeat;
  display: inline-block;
  width: $width;
  height: $height;
}

i {
  ${iconsMapScssContent}
}

`;

fs.writeFileSync('./dist/vendor-icons-map.scss', iconsMapScssContent);
