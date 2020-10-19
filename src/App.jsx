// コンポーネントのファイル名は先頭大文字！！

import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

// JSX記法 jsのなかにhtmlをいれる
// 複数のタグを使うときは<>or<React.Fragment>で囲む必要がある
const App = () => {
  console.log("最初");
  // ステートの変数名,変数名を変えるための関数名,useState(0)は初期値
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // numだけを監視する
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    // styleの一つ目の{}はjsを記載するためのもの、2つ目はオブジェクトを書くためのもの
    // cssのバリューは必ず文字列
    // componentsの読み込みは<コンポーネント名 プロップス名/>
    // &&は左側がtrueだったら右を返す
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">お元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>☺️</p>}
    </>
  );
};

// 別ファイルで使えるように
export default App;
