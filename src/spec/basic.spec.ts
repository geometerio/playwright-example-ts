import * as axios from "axios";
import * as playwright from "playwright";

describe('something', () => {
  it('does something', async () => {
    try {
      await axios.default.get('http://localhost:8081/api/connect/chromium')
        .then(async (res) => {
          console.info(`connecting to ${res.data.endpoint}`);

          const endpoint = res.data.endpoint;
          const browser  = await playwright.chromium.connect({ wsEndpoint: endpoint });
          const page     = await browser.newPage();
          const target   = process.env.TARGET || "google.com";

          await page.goto(`https://${target}`);
          await page.screenshot({
            path: `doc/${target}.png`
          });

          await browser.close();
      });
    } catch (e) {
      console.error("FAIL!!!");
      throw(e);
    }
  });
});
