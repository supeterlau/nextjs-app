import Head from "next/head";
import Nav from "../../components/Nav";

import { useState, useEffect, useCallback } from "react";
import debounce from "lodash/debounce";

const styles = {
  textArea: `
    width: 100%;
    height: 100px;
  `,
  textInput: `
    padding: 0 20px;
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    resize: none;
    border: 3px solid #ddd;
  `,
};

const NOTE_KEY = "note-on-fresh";
export const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
};
export default function Page() {
  return <>{useHasMounted() ? <Note text="Note" /> : null}</>;
}

function Note(props) {
  let content = `
https://irian.to/blogs/bundle-your-javascript-code-from-scratch/
https://lihautan.com/i-wrote-my-module-bundler/
  `;
  const loadNote = () => localStorage && localStorage.getItem(NOTE_KEY);
  const dumpNote = (text) =>
    localStorage && localStorage.setItem(NOTE_KEY, text);

  // console.log("load", localStorage);
  const [loading, setLoading] = useState(undefined);
  // const [loading, setLoading] = useState(localStorage === undefined);
  const [text, setText] = useState(loadNote() || props.text);
  const handleChange = (e) => {
    console.log("save...");
    const { value } = e.target;
    setText(value);
    handleSave(value);
  };

  const handleSave = useCallback(
    debounce((value) => {
      console.log("save", value);
      dumpNote(value);
    }, 500)
  );

  useEffect(() => {
    // console.log(localStorage);
    setLoading(localStorage === undefined);
  }, [localStorage]);

  if (loading) {
    return <div>Note Loading ...</div>;
  }
  return (
    <div>
      <Nav />
      <Head>
        <title>Note</title>
      </Head>
      <div>
        <p>Write Free ???</p>
        <div className="textArea">
          <textarea className="textInput" value={text} onChange={handleChange}>
            Writing Here ...
          </textarea>
        </div>
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
      <style jsx>{`
        li {
          list-style: none;
          color: blue;
        }
        .textArea {
          width: 100%;
          height: 100px;
        }
        .textInput {
          padding: 0 20px;
          width: 100%;
          height: 100px;
          box-sizing: border-box;
          resize: none;
          border: 3px solid #ddd;
        }
      `}</style>
    </div>
  );
}
