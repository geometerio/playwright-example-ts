import * as axios from "axios";
import * as playwright from "playwright";

describe('taking a bunch of website screenshots in parallel', () => {
  it('works', async () => {
    try {
      await Promise.all([
        test("aaa.com"),
        test("apple.com"),
        test("audi.com"),
        test("bmw.com"),
        test("chase.com"),
        test("ebay.com"),
        test("github.com"),
        test("google.com"),
        test("homedepot.com"),
        test("ibm.com"),
        test("intel.com"),
        test("jeep.com"),
        test("linkedin.com"),
        test("macys.com"),
        test("microsoft.com"),
        test("okta.com"),
        test("stackoverflow.com"),
        test("vmware.com")
      ]);
    } catch (e) {
      console.error("FAIL!!!");
      throw(e);
    }
  });
});

xdescribe('RTC video', () => {
  it('is a work in progress', async () => {
    // await twill();
    try {
      await Promise.all([
        await jitsi('corey-and-greg-20210426'),
        await jitsi('corey-and-greg-20210426'),
        await jitsi('corey-and-greg-20210426'),
        await jitsi('corey-and-greg-20210426'),
      ]);
    } catch(e) {
      console.error(`FAIL!!! ${e}`);
      throw(e);
    }
  })
});

// ---

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function twill() {
  await axios.default.get('http://localhost:8080/api/connect/chromium', {
    params: { lala: "lulu" }
  })
    .then(async (res) => {
      const browser = await playwright.chromium.connect({
        wsEndpoint: res.data.endpoint
      });
      const page = await browser.newPage();

      // await page.goto(`https://twill.construction.vex.dev/membrane/room`);
      // await page.goto(`https://twill.construction.vex.dev/daily/5mpmiLLoz8omrLsKGRKI?roomUrl=https%3A%2F%2Fgeometer.daily.co%2F5mpmiLLoz8omrLsKGRKI`);
      await page.goto(`https://twill.construction.vex.dev/twilio/RM279eb4404a12644705453315eefcf08e/playwright`);
      await page.screenshot({ path: `doc/twill-a2.png` });
      await sleep(20000);
      await page.screenshot({ path: `doc/twill-b2.png` });

      await browser.close();
    })
};

async function jitsi(room: string) {
  // await axios.default.get('http://localhost:8080/api/connect/chromium', {
  //   params: { lala: "lulu" }
  // })
  //   .then(async (res) => {
      // const browser = await playwright.chromium.connect({
      //   wsEndpoint: res.data.endpoint
      // });
      const browser = await playwright.chromium.launch({
        // headless: false,
        args: [
          '--use-fake-device-for-media-stream',
          '--use-fake-ui-for-media-stream'
        ]
      });
      const page = await browser.newPage();

      await page.goto(`https://meet.jit.si/${room}`);
      await page.click('div[data-testid="prejoin.joinMeeting"]')
      await sleep(30000);
      await page.screenshot({ path: `doc/${room}.png` });

      await browser.close();
    // })
};

async function test(target: string) {
  // await axios.default.get('http://localhost:8080/api/connect/chromium')
  //   .then(async (res) => {
  //     console.info(`connecting to '${res.data.endpoint}' for target: '${target}'`);

  //     const endpoint = res.data.endpoint;
  //     const browser  = await playwright.chromium.connect({ wsEndpoint: endpoint });
      console.info(`opening ${target}`);

      const browser  = await playwright.chromium.launch({
          headless: false,
          args: [
            '--use-fake-device-for-media-stream',
            '--use-fake-ui-for-media-stream'
          ]
        // launchOptions: {
        // },
        // contextOptions: {
        //   recordVideo: {
        //     dir: 'videos/'
        //   }
        // }

      });
      const page     = await browser.newPage();

      await page.goto(`https://${target}`);
      await page.screenshot({
        path: `doc/${target}.png`
      });

      await browser.close();
  // });
};
