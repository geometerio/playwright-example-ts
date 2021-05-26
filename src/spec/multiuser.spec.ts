import * as playwright from "playwright";
import "expect-playwright"

let browser: playwright.Browser;
let users: Array<string>;

beforeAll(async () => {
  users = ["user-0"]; //, "user-1", "user-2", "user-3"];

  // const endpoint = "ws://localhost:3000/playwright";
  // const filename = "/Users/austin/projects/horse/tmp/horse.mjpeg";
  const filename = "/Users/austin/projects/horse/tmp/movie.mp4";
  const queryStr = ['--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream', `--use-file-for-fake-video-capture=${filename}`];
  // const queryStr = ['--use-fake-ui-for-media-stream'];
  browser = await playwright.chromium.launch({
    headless: false,
    args: queryStr,
    executablePath: "/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome"
  });
});

afterAll(async () => {
  await browser.close();
});

describe('a multiuser video room', () => {
  it('succeeds', async () => {
    const date = getDate();
    const slug = getSlug();
    const room = `${date}-geo-${slug}`;
    const steps = [joinRoom];

    console.info(`room will be 'https://meet.jit.si/${room}'`);

    await Promise.all(users.map(async (user: string) => {
      const context = await browser.newContext();
      const page = await context.newPage();

      for (var step of steps) {
        await step(page, room, slug, user);
      }
    }));
  });
});

async function joinRoom(page: playwright.Page, room: string, slug: string, user: string) {
  const url = `http://localhost:4000/chateau/room/02f6eeaa-5613-4282-8a6a-47144c70b3f7`;
  // const url = `http://host.docker.internal:4000/chateau/room/02f6eeaa-5613-4282-8a6a-47144c70b3f7`;
  console.info(`user '${user}' is joining '${url}'`);

  await page.goto(url);
  //await page.fill("css=input.field", `${user}`);
  //await page.click("css=div[data-testid='prejoin.joinMeeting']");

  const title = await page.title();
  //expect(title).toMatch(slug);

  // TODO: Figure out how to wait for 4 active video streams. Take a look at
  // BrowserContext.route, perhaps. Playwright's capabilities for interacting
  // with WebSockets could also provide some clues. "Success" here is
  // achieved when all of the screenshots show all of the participants as
  // actively "streaming" (and there is no need for `sleep`).
  //await expect(page).toHaveSelectorCount('span.videocontainer', users.length);
  await sleep(100000);
}

async function quitRoom(page: playwright.Page, room: string, slug: string, user: string) {
  await page.goto("https://meet.jit.si");

  const title = await page.title();
  expect(title).toBe("Jitsi Meet");

  await sleep(500);
  await capture(page, `doc/results/${room}/${user}-quit.png`);
  await sleep(500);
}

async function capture(page: playwright.Page, path: string) {
  await page.screenshot({ path: `.local/spec-results/${path}` });
}

function getDate() {
  const date = new Date();
  return new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split("T")[0].replace(/-/g, "");
}

function getSlug() {
  const chars = Math.random().toString(36).substring(2, 8).replace(/[0-9]/g, "x");
  return (chars.charAt(0).toUpperCase() + chars.slice(1));
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
