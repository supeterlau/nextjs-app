import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import * as QRCode from "qrcode";

export default function Qrcode() {
  const [content, setContent] = useState("https://cn.bing.com");
  const qrRef = useRef();

  const handleInput = (e) => {
    let content = e.target.value;
    setContent(content);
  };

  const generateQR = async (qr, text) => {
    try {
      console.log("generateQR:", qr);
      await QRCode.toCanvas(qr, text);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(async () => {
    console.log(content);
    if (content !== "" && qrRef && qrRef.current)
      await generateQR(qrRef.current, content);
  }, [content]);

  return (
    <div>
      <Head>
        <title>QRCode</title>
      </Head>
      <div>
        <textarea
          value={content}
          onPaste={handleInput}
          onChange={handleInput}
          rows={3}
          placeholder={"Input Source"}
        />
      </div>
      <canvas ref={qrRef}></canvas>
    </div>
  );
}
