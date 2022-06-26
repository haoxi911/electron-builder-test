/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
  appId: 'com.example.myapp',
  productName: "My App",
  win: {
    executableName: 'MyApp',
  },
  mac: {
    executableName: 'MyAppForMac',
    category: 'public.app-category.lifestyle',
  }
};

module.exports = config;
