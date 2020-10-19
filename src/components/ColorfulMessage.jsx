import React from "react";
// 引数をpropsで受け取る
// childrenは今で言うと<ColorfulMessage>の中身の文章
export const ColorfulMessage = (props) => {
  // 分割代入ですっきりさせる
  // キーとバリューが同じ場合はcolorと省略可能
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};
