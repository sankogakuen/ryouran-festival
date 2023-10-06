import React from "react";
import HoverUnderlineLink from "../../components/HoverUnderlineLink";
import Page from "../../components/Page";

const Message: React.FC = () => {
  return (
    <Page>
      <HoverUnderlineLink>Messaged by Yokoyama</HoverUnderlineLink>
      <p>
        "みなさん、こんにちは！！！ 実行委員長の横山真人です。
        今回の文化祭は、昨年度までには無かったショートムービーブロックや制作ブロック、またファションショーブロックやダンスブロックなどのステージパフォーマンスに特化したブロックなどがたくさんあります！
        つまり、今までの大宮キャンパスの文化祭の中で最大規模となる文化祭です！
        「百花繚乱 ～みんなの個性咲き誇れ～」
        今回の文化祭のテーマを各ブロック、参加される生徒のみなさん一人一人が意識し、実際に個性を発揮して最高の文化祭を作り上げましょう！！"
      </p>
    </Page>
  );
};

export default Message;
