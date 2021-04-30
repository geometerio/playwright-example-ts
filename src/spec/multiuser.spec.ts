import * as playwright from "playwright";
import "expect-playwright"

describe('a multiuser video chat', () => {
  it('succeeds', async () => {
    const wsEndpoint = `ws://localhost:3000/playwright?${
      ['--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream'].join('&')
    }`;
    const browser = await playwright.chromium.connect({wsEndpoint});
    const room = "20210429-coreyti";

    const step1 = async (page : playwright.Page, participant : string) => {
      await joinRoom(page, room, participant)
    };
    const step2 = async (page : playwright.Page, participant : string) => {
      await quitRoom(page, room, participant);
    };

    await Promise.all(["0", "1", "2", "3"].map(async (participant : string) => {
      const context = await browser.newContext();
      const page = await context.newPage();

      await step1(page, participant);
      await expect(page).toHaveSelectorCount('.remote-videos-container > span.videocontainer', 4);
      await capture(page, `doc/results/${room}/participant-${participant}-step1.png`);

      await step2(page, participant);
    }));

    await browser.close();
  });
});

async function capture(page: playwright.Page, path: string) {
  await page.screenshot({path: path});
}

async function joinRoom(page: playwright.Page, room: string, participant: string) {
  return new Promise<void>(async (resolve) => {
    await page.goto(`https://meet.jit.si/${room}`);
    await page.fill("css=input.field", `participant-${participant}`);
    await page.click("css=div[data-testid='prejoin.joinMeeting']");
    // await page.screenshot({path: `doc/results/${room}/participant-${participant}-01-onJoin.png`});

    resolve();
  });
}

async function quitRoom(page: playwright.Page, room: string, participant: string) {
  return new Promise<void>(async (resolve) => {
    // attempt to hangup...
    // await page.click("css=div.hangup-button");
    // await page.click("css=[aria-label='Leave the call']");
    // ...can't seem to do so. instead, just leave:
    await page.goto("https://meet.jit.si");
    await page.screenshot({path: `doc/results/${room}/participant-${participant}-02-onQuit.png`});

    resolve();
  });
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
