import Head from "next/head";
import Nav from "../../components/Nav";

export default function Note() {
  let content = `
https://irian.to/blogs/bundle-your-javascript-code-from-scratch/
https://lihautan.com/i-wrote-my-module-bundler/
  `;
  return (
    <div>
      <style jsx>{`
        li {
          list-style: none;
          color: blue;
        }
      `}</style>
      <Nav />
      <Head>
        <title>Note</title>
      </Head>
      <div>
        <ul>
          {content
            .split("\n")
            .filter((l) => l.trim() !== "")
            .map((l, key) => (
              <li key={key}>
                <a href={l}>{l}</a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
