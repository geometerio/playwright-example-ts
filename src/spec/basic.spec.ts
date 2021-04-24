import * as playwright from "playwright";

describe('something', () => {
  it('does something', async () => {
    // expect(1).toEqual(2);

    try {
      const wsEndpoint = "ws://127.0.0.1:60027/58481eb4f879929c34518ad070174d57";
      const browser    = await playwright.chromium.connect({ wsEndpoint });

      // ---

      const page    = await browser.newPage();
      let domain  = "instagram.com";

      await page.goto(`https://${domain}`);
      await page.screenshot({
        path: `doc/${domain}.png`
      });

      // tslint:disable-next-line:no-console
      console.info(`...take a look at 'doc/${domain}.png' (and note that things are still running)`);

      await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2s, for effect.
      // tslint:disable-next-line:no-console
      console.info("let's do that again...");
      await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2s, for effect.
      domain  = "twitter.com";

      await page.goto(`https://${domain}`);
      await page.screenshot({
        path: `doc/${domain}.png`
      });

      // tslint:disable-next-line:no-console
      console.info(`...take a look at 'doc/${domain}.png' (and note that things are still running)`);

      await browser.close();
    } catch (error) {
      console.error("FAIL!!!");
    }
  });
});
