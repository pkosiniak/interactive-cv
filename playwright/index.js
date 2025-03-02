const { chromium } = require('playwright');

const LOCAL_ADDRESS =
  'http://localhost:3000/?DARK_MODE=false&FONT_SIZE=11&SIDE_PANEL=true&LARGE_FONT_STATE=false&RESPONSIVE_VIEW=false&LANGUAGE_SATE=%22en%22';

const RESULT_PATH = 'pdf-result';
const FILE_NAME = 'Pawel_Kosiniak_CV_2025_en';
const EXTENSION = 'pdf';

const output = `${RESULT_PATH}/${FILE_NAME}.${EXTENSION}`;

const makePdf = async () => {
  try {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(LOCAL_ADDRESS);

    await page.waitForTimeout(1000);

    await page.pdf({ path: output, format: 'A4', printBackground: true, pageRanges: '1-3' });

    await browser.close();
  } catch (e) {
    console.error(e);
  }
};

makePdf();
