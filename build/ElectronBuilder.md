# Electron Builder

```json
{
  "appId": "MyApp",
  "productName": "MyApp",
  "directories": {
    "output": "product"
  },
  "compression": "normal",
  "files": [
    "dist/**/*",// Logic folder
    "node_modules/**/*.{js,ts,json,map}",// File in node_modules need to use to run 
    "node_modules/sqlite3",// SQLite is a native addon module for Node.js, which means it includes compiled C or C++ code that interacts with the SQLite library. So that need to add all
    "!node_modules/electron-builder/**/*",
    "!node_modules/electron/**/*",
    "!node_modules/**/{docs,doc,example,examples,demo,demos,test,tests,__tests__,*.test.*,*.spec.*}",
    {
      "from": "public",// View-side folder
      "to": "public",
      "filter": "**/*"
    }
  ],
  "includeSubNodeModules": true,
  "asar": true,
  "win": {
    "target": "nsis"
  },
  "mac": {},
  "linux": {
    "target": "AppImage"
  }
}
```