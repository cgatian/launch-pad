import { componentPlugin } from './components';
import { blocksPlugin } from './blocks';
import { basicsPlugin } from './blocks/basics';
import { binderPlugin } from './binder';

declare let require: any;
require('grapesjs-blocks-basic/src/index.js');
require('grapesjs-blocks-flexbox/src/index.js');

const htmlStart = `
<div>
  <nav>
    <ul>
      <img style="width: 110px" src="/assets/company-logo.png" />
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Products</a></li>
    </ul>
  </nav>
</div>
<div style="max-height:800px;">

</div>
<style>
a {
  color: white;
  text-decoration: none;
}

nav {
  background: blue;
  height: 60px;
}
nav li {
  display: inline-block;
  padding: 22px 0px;
}
nav li:hover {
  background: rgba(0, 0, 0, 0.5);
}
nav a {
  padding: 27px;
}

</style>
`;


export const config = {
  autorender: 0,
  storageManager: { type: 'none' },
  height: '100%',
  components: htmlStart,
  canvas: {
    scripts: ['./assets/ob-elements.js'],
    styles: ['./assets/ob-elements.styles.css']
  },
  plugins: [
    // 'gjs-blocks-basic',
    // 'gjs-blocks-flexbox',
    componentPlugin(),
    basicsPlugin(),
    blocksPlugin(),
    binderPlugin()
  ],
  pluginsOpts: {
    'gjs-blocks-basic': {/* ...options */}
  }
};
