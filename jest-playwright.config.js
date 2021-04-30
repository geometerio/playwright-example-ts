// https://github.com/playwright-community/jest-playwright/#configuration
module.exports = {
  browsers: ["chromium"],
  launchOptions: {
    headless: false,
    args: [
      '--use-fake-device-for-media-stream',
      '--use-fake-ui-for-media-stream'
    ]
  },
  contextOptions: {
    recordVideo: {
      dir: 'videos/'
    }
  }
}

// testEnvironmentOptions: {
//   'jest-playwright': {
//     browsers: ["chromium"],
//     launchOptions: {
//       headless: false,
//       args: [
//         '--use-fake-device-for-media-stream',
//         '--use-fake-ui-for-media-stream'
//       ]
//     },
//     contextOptions: {
//       recordVideo: {
//         dir: 'videos/'
//       }
//     }
//   },
// },
