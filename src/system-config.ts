/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const packages: any = {
  '@angular2-material': 'vendor/@angular2-material',
};

/** User packages configuration. */

const materialPkgs:string[] = [
  'core',
  'button',
  'card',
  'sidenav',
  'toolbar',
  'checkbox',
  'radio',
  'progress-circle',
  'progress-bar',
  'input',
  'list',
  'icon',
  'tabs',
];

materialPkgs.forEach((pkg) => {
  packages[`@angular2-material/${pkg}`] = {main: `${pkg}.js`};
});


