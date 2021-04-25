import * as axios from "axios";
import * as playwright from "playwright";

async function test(target: string) {
  await axios.default.get('http://localhost:8080/api/connect/chromium')
    .then(async (res) => {
      console.info(`connecting to '${res.data.endpoint}' for target: '${target}'`);

      const endpoint = res.data.endpoint;
      const browser  = await playwright.chromium.connect({ wsEndpoint: endpoint });
      const page     = await browser.newPage();

      await page.goto(`https://${target}`);
      await page.screenshot({
        path: `doc/${target}.png`
      });

      await browser.close();
  });
};

describe('taking a bunch of website screenshots in parallel', () => {
  it('works', async () => {
    try {
      await Promise.all([
        test("aaa.com"),
        test("apple.com"),
        test("audi.com"),
        test("bmw.com"),
        test("chase.com"),
        // test("ebay.com"),
        // test("github.com"),
        // test("google.com"),
        // test("homedepot.com"),
        // test("ibm.com"),
        // test("intel.com"),
        // test("jeep.com"),
        // test("linkedin.com"),
        // test("macys.com"),
        // test("microsoft.com"),
        // test("okta.com"),
        // test("stackoverflow.com"),
        // test("vmware.com")
      ]);
    } catch (e) {
      console.error("FAIL!!!");
      throw(e);
    }
  });
});
