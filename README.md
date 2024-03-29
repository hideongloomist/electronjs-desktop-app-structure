# ElectronJS Desktop App Structure

### Resources for Learning

- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation
- [Electron Fiddle](https://electronjs.org/fiddle) - create, play, and share small Electron experiments
- [electronjs.org/community#boilerplates](https://electronjs.org/community#boilerplates) - sample starter apps created by the community
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - a very basic starter Electron app
- [electron/simple-samples](https://github.com/electron/simple-samples) - small applications with ideas for taking them further
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - small demo apps for the various Electron APIs
- [Electron Builder](https://www.electron.build/auto-update.html) - a packager
- Note: electron-builder is a packager, so any environment variables that you set during build process does not inject anything into the app bundle itself. For something like that, I think you need to use a bundler, such as via webpack's define plugin, or something similar.
- [TypeOrm](https://typeorm.io/) and [Sqlite](https://www.npmjs.com/package/sqlite3) - TypeOrn and Sqlite for save desktop app data
- [Bootstrap 5](https://getbootstrap.com/docs/5.2/getting-started/introduction/)
- [FontAwesome](https://docs.fontawesome.com/web/)
- [SASS](https://sass-lang.com/documentation/)

### Base Structure

```markdown
your-electron-app/
│
├── bin/     // Support JS file
├── build/     // Sub project to build app (https://www.electron.build/tutorials/two-package-structure.html)
│   ├── electron-builder.json     // Electron Builder configuration
│   ├── package.json     // Electron App Base Library
│   └── ...
├── public/     // font-end view js,css,html,svg
│   ├── css     // App.css
│   ├── fonts     // Use bin/google-fonts.js to download your font
│   ├── img     // Use bin/google-fonts.js to download your font
│   ├── js     // Your custom js file
│   ├── lang     // [lang].json  example: en.json, jp.json, vi.json, ...
│   ├── dynamic.js     // load to <div id="content"><script>loadPage('home.html');</script>
│   ├── *.html
│   └── ...
├── src/
│   ├── events/     // Because of Security, I turn off nodeIntegration (nodeIntegration: false). They will bundle by webpack and build to public/events or you can understand it is renderer folder
│   │   ├── *.event.ts         // Event interact with font side
│   │   └── ...
│   ├── shared/
│   │   └── ...
│   └── windows/               // Windows Manger
│   │   └── ...
│   ├── env.constant.ts
│   ├── main.ts
│   ├── preload.ts     // Preload, config contextBridge, ipcRenderer
│   └── ...
├── typings/
│   ├── global.d.ts
│   └── ...
├── package.json
├── tsconfig.json     // Typescript configuration
├── webpack.config.js     // Webpack configuration
└── ...
```

### Version

##### 1. Major Version (X.y.z):

Increment the major version (X) when you make incompatible API changes.
This usually indicates significant changes or new features that might break compatibility with previous versions.

##### 2. Minor Version (x.Y.z):

Increment the minor version (Y) when you add functionality in a backward-compatible manner.
This typically includes new features or enhancements that don't break existing functionality.

##### 3. Patch Version (x.y.Z):

Increment the patch version (Z) when you make backward-compatible bug fixes.
This includes fixes for issues that don't affect the existing functionality or API compatibility.

### License

[MIT](LICENSE)

### To Use CMD

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

##### Clone this repository

```bash
git clone https://github.com/hideongloomist/electronjs-desktop-app-structure
```

##### Install

```bash
npm i
```

##### Auto update FE library after install

```bash
npm run postinstall
```

##### Remove dist and public/events which generate by code

```bash
npm run prebuild
```

##### Tsc build dist and Tsc-alias for paths tsconfig.json

```bash
npm run build:ts
```

##### Obfuscator JS code to make app hard to read and hide some safety file

##### You can edit /bin/javascript-obfuscator.js to run as many times as you want, but the price you pay is that the application's processing speed will be slower.

```bash
npm run build:obfuscator:js
```

##### Build develop

```bash
npm run build
```

##### Build product

```bash
npm run build:prod
```

##### Watch dist folder change, if it change, re-run

```bash
npm run watch
```

##### Normal Start

```bash
npm run start
```

##### Dev Start, if you edit src folder, your app will update

```bash
npm run start:dev
```

##### Build app.css

```bash
npm run view:sass
```

##### If you edit your css folder, your css file will update

```bash
npm run view:watch
```

##### Dev start full

```bash
npm run start:view:dev
```

##### Prepare to build package

```bash
npm run package:prepare
```

##### Format

```bash
npm run format
npm run format:all
```

### Note

- https://www.electronjs.org/docs/latest/tutorial/sandbox#disabling-chromiums-sandbox-testing-only

- If you have trouble with node-gyp on Window:
```txt
1. Remove lock file and node_modules then reinstall
2. Try to remove choco chocolatey and run "C:\Program Files\nodejs\install_tools.bat"
3. If not work check you vsbuildtools
4. Check your python and node-gpy rebuild
5. downgrade node version then use npm install --global windows-build-tools
```
- Env: 
electron-builder is a packager, so any environment variables that you set during build process does not inject anything into the app bundle itself. For something like that, I think you need to use a bundler, such as via webpack's define plugin, or something similar. Easier to understand, the `process.env` lines in the folder you use to build the app will not work (for example, here are `src/` and `public`) so you have to find another way to add them if you still want to use or you can also try to encode them with `javascript-obfuscator`.

- ElectronBuilder for win: open PowerShell as Administrator cd to your folder then run