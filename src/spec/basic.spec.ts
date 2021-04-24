import * as axios from "axios";
import * as playwright from "playwright";

describe('something', () => {
  it('does something', async () => {
    try {
      await axios.default.get('http://localhost:8081/api/connect')
        .then(async (res) => {
          console.info(`connecting to ${res.data.endpoint}`);

          const endpoint = res.data.endpoint;
          const browser  = await playwright.chromium.connect({ wsEndpoint: endpoint });
          const page     = await browser.newPage();
          // let domain     = "amazon.com";
          const target   = process.env.TARGET;

          await page.goto(`https://${target}`);
          await page.screenshot({
            path: `doc/${target}.png`
          });

          await browser.close();
      });
    } catch (error) {
      console.error("FAIL!!!");
    }
  });
});

// Gotta do some cleanup next...
//
// ➜ lsof -i TCP | grep node
// node        665 corey   25u  IPv4 0xa47564e46a45f9c1      0t0  TCP localhost:49322->localhost:57971 (ESTABLISHED)
// node        665 corey   31u  IPv4 0xa47564e467e27499      0t0  TCP localhost:49322 (LISTEN)
// node        665 corey   32u  IPv4 0xa47564e467e223d9      0t0  TCP localhost:49323 (LISTEN)
// node        665 corey   34u  IPv4 0xa47564e468337651      0t0  TCP localhost:45623 (LISTEN)
// node        665 corey   35u  IPv4 0xa47564e468336c39      0t0  TCP localhost:58962 (LISTEN)
// node      89905 corey   23u  IPv6 0xa47564e464688609      0t0  TCP *:sunproxyadmin (LISTEN)
// node      89905 corey   31u  IPv6 0xa47564e486d8d2c9      0t0  TCP *:61256 (LISTEN)
// node      89905 corey   35u  IPv6 0xa47564e486d9a609      0t0  TCP *:61269 (LISTEN)
// node      89905 corey   40u  IPv6 0xa47564e464364609      0t0  TCP *:61285 (LISTEN)
// node      89905 corey   45u  IPv6 0xa47564e4672b0c69      0t0  TCP *:61385 (LISTEN)
// node      89905 corey   50u  IPv6 0xa47564e486d8cc69      0t0  TCP *:61523 (LISTEN)
//
// # kill geo-playwright (API server), then...
//
// ➜ lsof -i TCP | grep node
// node        665 corey   25u  IPv4 0xa47564e46a45f9c1      0t0  TCP localhost:49322->localhost:57971 (ESTABLISHED)
// node        665 corey   31u  IPv4 0xa47564e467e27499      0t0  TCP localhost:49322 (LISTEN)
// node        665 corey   32u  IPv4 0xa47564e467e223d9      0t0  TCP localhost:49323 (LISTEN)
// node        665 corey   34u  IPv4 0xa47564e468337651      0t0  TCP localhost:45623 (LISTEN)
// node        665 corey   35u  IPv4 0xa47564e468336c39      0t0  TCP localhost:58962 (LISTEN)
