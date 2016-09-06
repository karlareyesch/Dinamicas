  /**
     * System configuration for Angular 2 samples
     * Adjust as necessary for your application needs.
     */
    (function(global) {
      // map tells the System loader where to look for things
      var map = {
        'app':                        'app', // 'dist',
        'rxjs':                       'node_modules/rxjs',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        '@angular':                   'node_modules/@angular',
        '@angular2-material':         'node_modules/@angular2-material',        
        'angular2-jwt': 'node_modules/angular2-jwt/angular2-jwt.js',  

        
      };
      // packages tells the System loader how to load when no filename and/or no extension
      var packages = {
        'app':                        { main: 'main.js',  defaultExtension: 'js' },
        'rxjs':                       { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
      };
      var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'upgrade',
        'forms'
      ];

     var materialPackages=[
        'core',
        'button',
        'button-toggle',
        'card',
        'list',
        'input',
        'sidenav',
        'toolbar',
        'checkbox',
        'radio',
        'progress-circle',
        'progress-bar',
        'grid-list',    
        'icon',
        'button-toggle',
        'tooltip',
        'tabs',
        'icon',
        'toolbar',
        'tooltip',
        'menu',
        'slider',
        'slide-toggle'
      ];
      
      materialPackages.forEach((pkg) => {
      packages[`@angular2-material/${pkg}`] = {format:'cjs', main: `${pkg}.umd.js`};
       });

      // Individual files (~300 requests):
      function packIndex(pkgName) {
        packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
      }
      // Bundled (~40 requests):
      function packUmd(pkgName) {
        packages['@angular/'+pkgName] = { main:'bundles/'+ pkgName + '.umd.js', defaultExtension: 'js' };
      }//t environments should use UMD; some (Karma) need the individual index files
      var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
      // Add package entries for angular packages
      ngPackageNames.forEach(setPackageConfig);
      var config = {
        map: map,
        packages: packages
      }
      System.config(config);
    })(this);