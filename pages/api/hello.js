// https://vercel.com/docs/runtimes#official-runtimes/node-js

const puppeteer = require("puppeteer");

const fetchBook = async (bookId) => {
  let url = `https://book.douban.com/subject/${bookId}/`;
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto(url);
  let book = await page.evaluate(() => {
    element = document.querySelector(".subjectwrap");
    return element.innerHTML;
  });
  await browser.close();
  return book;
};

export default async (req, res) => {
  // ?bookId=1234567
  const { bookId } = req.query;
  let content = await fetchBook(bookId);
  res
    .status(200)
    .json({ name: "John Doe", body: req.body, query: req.query, content });
};
