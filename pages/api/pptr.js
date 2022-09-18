// https://vercel.com/docs/runtimes#official-runtimes/node-js

// import chrome from "chrome-aws-lambda";
// import puppeteer from "puppeteer-core";
//
// const isDev = process.env.NODE_ENV === "development";
//
// const exePath =
//   process.platform === "win32"
//     ? "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
//     : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
//
// export const getOptions = async (isDev) => {
//   /**
//    * If used in a dev environment, i.e. locally, use one of the local
//    * executable path
//    */
//   if (isDev) {
//     return {
//       args: [],
//       executablePath: exePath,
//       headless: true,
//     };
//   }
//   /**
//    * Else, use the path of chrome-aws-lambda and its args
//    */
//   return {
//     args: chrome.args,
//     executablePath: await chrome.executablePath,
//     headless: chrome.headless,
//   };
// };
//
// const fetchBook = async (bookId) => {
//   let url = `https://book.douban.com/subject/${bookId}/`;
//   const options = await getOptions(isDev);
//   const browser = await puppeteer.launch(options);
//   const page = await browser.newPage();
//   await page.goto(url);
//   let book = await page.evaluate(() => {
//     element = document.querySelector(".subjectwrap");
//     return element.innerHTML;
//   });
//   await browser.close();
//   return book;
// };
//
// export default async (req, res) => {
//   // ?bookId=1234567
//   const { bookId } = req.query;
//   let content = await fetchBook(bookId);
//   res
//     .status(200)
//     .json({ name: "John Doe", body: req.body, query: req.query, content });
// };
