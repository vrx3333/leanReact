/* eslint react-hooks/exhaustive-deps: off */
// ↑ eslintで特定のエラーをこのコンポーネント内でoffにする方法
// offにした場合は、useEffectの第二引数のfaceShowFlagを消す
import React, { useEffect, useState } from "react";
// import ColorfulMessage from "./components/ColorfulMessage";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };
  useEffect(() => {
    // console.log("useEffect");
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // }, [num, faceShowFlag]);
  }, [num]);

  /*
  useEffectの第二引数に空の配列を渡すことで、そのコンポーネントで最初の１度だけ使いたい処理を記載することができる
  useEffect(() => {
    console.log("useEffect");
  }, []);
  useEffectの第二一数の配列に変数を設定すると、その変数が変化した時のみ関心を持つようになる
  useEfect内に記載した変数は全て[]内に設定する
  */
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink" message="元気です" />
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>^_^</p>}
    </>
  );
};

export default App;
