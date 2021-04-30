// import * as axios from "axios";
import * as playwright from "playwright";

// try (when starting the server/container):
//
// - DEFAULT_LAUNCH_ARGS:
// - Secure instances with connection tokens:
// - $ docker run -e "TOKEN=2cbc5771-38f2-4dcf-8774-50ad51a971b8" ...
// - browserWSEndpoint: 'ws://localhost:3000?token=2cbc5771-38f2-4dcf-8774-50ad51a971b8'

describe('an example', () => {
  it('is a work in progress', async () => {
    // await Promise.all([
    // await basic("aaa.com"),
    // await basic("apple.com"),
    // await basic("audi.com"),
    // await basic("bmw.com"),
    // await basic("chase.com"),
    // await basic("ebay.com"),
    // await basic("github.com"),
    // await basic("google.com"),
    // await basic("homedepot.com"),
    // await basic("ibm.com"),
    // await basic("intel.com"),
    // await basic("jeep.com"),
    // await basic("linkedin.com"),
    // await basic("macys.com"),
    // await basic("microsoft.com"),
    // await basic("okta.com"),
    // await basic("stackoverflow.com"),
    // await basic("vmware.com"),
    // await basic("yahoo.com"),
    // await basic("target.com")
    // ]);

    // await Promise.all([
    // await jitsi('corey-20210426', 'A'),
    // await jitsi('corey-20210426', 'B'),
    // await jitsi('corey-20210426', 'C'),
    // await jitsi('corey-20210426', 'D'),
    // // await jitsi('corey-20210426', 'E'),
    // // await jitsi('corey-20210426', 'F'),
    // // await jitsi('corey-20210426', 'G'),
    // // await jitsi('corey-20210426', 'H'),
    // // await jitsi('corey-20210426', 'I'),
    // // await jitsi('corey-20210426', 'J'),
    // // await jitsi('corey-20210426', 'K'),
    // // await jitsi('corey-20210426', 'L'),
    // // await jitsi('corey-20210426', 'M'),
    // // await jitsi('corey-20210426', 'N'),
    // // await jitsi('corey-20210426', 'O'),
    // // await jitsi('corey-20210426', 'P'),
    // // await jitsi('corey-20210426', 'Q'),
    // // await jitsi('corey-20210426', 'R'),
    // // await jitsi('corey-20210426', 'S'),
    // // await jitsi('corey-20210426', 'T'),
    // ]);

    // 20 instances...
    // await Promise.all([
    // await vexDaily('corey-20210426?roomUrl=https%3A%2F%2Fgeometer.daily.co%2Fcorey-20210426', 'A'),
    // await vexDaily('corey-20210426?roomUrl=https%3A%2F%2Fgeometer.daily.co%2Fcorey-20210426', 'B'),
    // await vexDaily('corey-20210426?roomUrl=https%3A%2F%2Fgeometer.daily.co%2Fcorey-20210426', 'C'),
    // await vexDaily('corey-20210426?roomUrl=https%3A%2F%2Fgeometer.daily.co%2Fcorey-20210426', 'D'),
    // await vexDaily('corey-20210426?roomUrl=https%3A%2F%2Fgeometer.daily.co%2Fcorey-20210426', 'E'),
    // await vexDaily('corey-20210426?roomUrl=https%3A%2F%2Fgeometer.daily.co%2Fcorey-20210426', 'F'),
    // await vexDaily('corey-20210426?roomUrl=https%3A%2F%2Fgeometer.daily.co%2Fcorey-20210426', 'G'),
    // await vexDaily('corey-20210426?roomUrl=https%3A%2F%2Fgeometer.daily.co%2Fcorey-20210426', 'H'),
    // await vexDaily('corey-20210426?roomUrl=https%3A%2F%2Fgeometer.daily.co%2Fcorey-20210426', 'I'),
    // await vexDaily('corey-20210426?roomUrl=https%3A%2F%2Fgeometer.daily.co%2Fcorey-20210426', 'J'),
    // await vexDaily('corey-20210426?roomUrl=https%3A%2F%2Fgeometer.daily.co%2Fcorey-20210426', 'K'),
    // await vexDaily('corey-20210426?roomUrl=https%3A%2F%2Fgeometer.daily.co%2Fcorey-20210426', 'L'),
    // await vexDaily('corey-20210426?roomUrl=https%3A%2F%2Fgeometer.daily.co%2Fcorey-20210426', 'M'),
    // await vexDaily('corey-20210426?roomUrl=https%3A%2F%2Fgeometer.daily.co%2Fcorey-20210426', 'N'),
    // await vexDaily('corey-20210426?roomUrl=https%3A%2F%2Fgeometer.daily.co%2Fcorey-20210426', 'O'),
    // await vexDaily('corey-20210426?roomUrl=https%3A%2F%2Fgeometer.daily.co%2Fcorey-20210426', 'P'),
    // await vexDaily('corey-20210426?roomUrl=https%3A%2F%2Fgeometer.daily.co%2Fcorey-20210426', 'Q'),
    // await vexDaily('corey-20210426?roomUrl=https%3A%2F%2Fgeometer.daily.co%2Fcorey-20210426', 'R'),
    // await vexDaily('corey-20210426?roomUrl=https%3A%2F%2Fgeometer.daily.co%2Fcorey-20210426', 'S'),
    // await vexDaily('corey-20210426?roomUrl=https%3A%2F%2Fgeometer.daily.co%2Fcorey-20210426', 'T'),
    // ]);

    await Promise.all([
      await vexMembrane('corey-20210428', 'A'),
      await vexMembrane('corey-20210428', 'B'),
      await vexMembrane('corey-20210428', 'C'),
      await vexMembrane('corey-20210428', 'D'),
      await vexMembrane('corey-20210428', 'E'),
      await vexMembrane('corey-20210428', 'F'),
    ]);

    // await Promise.all([
    // await localMembrane('20210427', 'A'),
    // //   // await localMembrane('corey-20210426', 'B'),
    // //   // await localMembrane('corey-20210426', 'C'),
    // //   // await localMembrane('corey-20210426', 'D'),
    // //   // await localMembrane('corey-20210426', 'E'),
    // //   // await localMembrane('corey-20210426', 'F'),
    // ]);

    // 20 instances...
    // await Promise.all([
    //     await vexTwillio('RMe7ce0ad1387f29e716e533bef4f7ab8d', 'A'),
    //     await vexTwillio('RMe7ce0ad1387f29e716e533bef4f7ab8d', 'B'),
    //     await vexTwillio('RMe7ce0ad1387f29e716e533bef4f7ab8d', 'C'),
    //     await vexTwillio('RMe7ce0ad1387f29e716e533bef4f7ab8d', 'D'),
    //     await vexTwillio('RMe7ce0ad1387f29e716e533bef4f7ab8d', 'E'),
    //     await vexTwillio('RMe7ce0ad1387f29e716e533bef4f7ab8d', 'F'),
    //     await vexTwillio('RMe7ce0ad1387f29e716e533bef4f7ab8d', 'G'),
    //     await vexTwillio('RMe7ce0ad1387f29e716e533bef4f7ab8d', 'H'),
    //     await vexTwillio('RMe7ce0ad1387f29e716e533bef4f7ab8d', 'I'),
    //     await vexTwillio('RMe7ce0ad1387f29e716e533bef4f7ab8d', 'J'),
    //     await vexTwillio('RMe7ce0ad1387f29e716e533bef4f7ab8d', 'K'),
    //     await vexTwillio('RMe7ce0ad1387f29e716e533bef4f7ab8d', 'L'),
    //     await vexTwillio('RMe7ce0ad1387f29e716e533bef4f7ab8d', 'M'),
    //     await vexTwillio('RMe7ce0ad1387f29e716e533bef4f7ab8d', 'N'),
    //     await vexTwillio('RMe7ce0ad1387f29e716e533bef4f7ab8d', 'O'),
    //     await vexTwillio('RMe7ce0ad1387f29e716e533bef4f7ab8d', 'P'),
    //     await vexTwillio('RMe7ce0ad1387f29e716e533bef4f7ab8d', 'Q'),
    //     await vexTwillio('RMe7ce0ad1387f29e716e533bef4f7ab8d', 'R'),
    //     await vexTwillio('RMe7ce0ad1387f29e716e533bef4f7ab8d', 'S'),
    //     await vexTwillio('RMe7ce0ad1387f29e716e533bef4f7ab8d', 'T'),
    // ]);
  })
});

// ---

async function basic(target: string) {
  (async () => {
    const page = await connect();

    await page.goto(`https://${target}`);
    await page.screenshot({path: `doc/basic/${target}.png`});
    await sleep(2000);
  })();
};

async function jitsi(room: string, participant: string) {
  (async () => {
    const page = await connect(['--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream']);

    await page.goto(`https://meet.jit.si/${room}`);
    await page.click('div[data-testid="prejoin.joinMeeting"]')
    await sleep(30000);
    await page.screenshot({path: `doc/video/jitsi-${participant}.png`});
  })();

  // await browser.close();
};

async function vexDaily(room: string, participant: string) {
  (async () => {
    const page = await connect(['--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream']);

    await page.goto(`https://twill.construction.vex.dev/daily/${room}`);
    await sleep(30000);
    await page.screenshot({path: `doc/video/daily-${participant}.png`});
  })();

  // await browser.close();
};

async function vexMembrane(room: string, participant: string) {
  (async () => {
    const page = await connect(['--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream']);

    await page.goto(`https://twill.construction.vex.dev/membrane/${room}`);
    await sleep(10000);
    await page.screenshot({path: `doc/video/membrane-${room}-${participant}.png`});
  })();

  // await browser.close();
};

async function localMembrane(room: string, participant: string) {
  (async () => {
    const page = await connect(['--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream']);

    // await page.goto(`http://localhost:4000/room/${room}`);
    // await page.goto(`https://coreyti.ngrok.io/room/${room}`);
    await page.goto(`https://coreyti.ngrok.io/membrane/${room}`);

    // await page.type('input[name="display_name"]', `Playwright-${participant}`);
    // await page.click('button')

    await sleep(30000);
    await page.screenshot({path: `doc/video/local-membrane-${participant}.png`});
  })();

  // await browser.close();
};

async function vexTwillio(room: string, participant: string) {
  (async () => {
    const page = await connect(['--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream']);

    await page.goto(`https://twill.construction.vex.dev/twilio/${room}/${participant}`);
    await sleep(30000);
    await page.screenshot({path: `doc/video/twilio-${participant}.png`});
  })();

  // await browser.close();
};

// ---

// * ```js
// * (async () => {
// *   const browser = await playwright.firefox.launch();  // Or 'chromium' or 'webkit'.
// *   // Create a new incognito browser context.
// *   const context = await browser.newContext();
// *   // Create a new page in a pristine context.
// *   const page = await context.newPage();
// *   await page.goto('https://example.com');
// * })();
// * ```

async function connect(args ?:Array<string>) {
  const endpoint = `ws://localhost:3000/playwright?${
    (args || []).join('&')
  }`
  console.info(`connecting to ${endpoint}`);

  // https://github.com/browserless/chrome/blob/307fa139b4c65f314a083891e1dbdb2dddeafcb7/src/tests/integration/websockets.spec.ts#L416
  const browser = await playwright.chromium.connect({ // ConnectOptions
    timeout: 90000, // jest is configured for 2 min.
    wsEndpoint: endpoint
  });
  return await browser.newPage();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
