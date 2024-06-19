import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'safe-area-plugin-keyboard',
  webDir: 'www',
  "plugins": {
    "SafeArea": {
      "enabled": true,
      "customColorsForSystemBars": true,
      "statusBarColor": '#e23000',
      "statusBarContent": 'light',
      "navigationBarColor": '#e23000',
      "navigationBarContent": 'light',
      "offset": 0
    }
  }
};

export default config;
