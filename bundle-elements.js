// const concat = require('concat');
// concat([
//   './dist/gg-components/runtime.js',
//   './dist/gg-components/scripts.js',
//   './dist/gg-components/polyfills.js',
//   './dist/gg-components/main.js'
// ], './src/components.js');


const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
      './dist/ob-elements/runtime.js',
      './dist/ob-elements/scripts.js',
      './dist/ob-elements/polyfills.js',
      './dist/ob-elements/main.js'
    ]

    await concat(files, 'src/assets/ob-elements.js');

    await fs.copyFile('./dist/ob-elements/styles.css', 'src/assets/ob-elements.styles.css')

    //await fs.copy('./dist/ob-elements/assets/', 'src/assets/' )

})()
