import React from "react";
import HoverUnderlineLink from "../../components/HoverUnderlineLink";
import Page from "../../components/Page";

const Message: React.FC = () => {
  return (
    <Page>
      <HoverUnderlineLink>Messaged by Yokoyama</HoverUnderlineLink>
      <p>
        "みなさん、こんにちは！！！ 繚乱祭実行委員長の横山真人です。
        今回の繚乱祭（文化祭）は、昨年度までには無かったショートムービーブロックや制作ブロック、またファションショーブロックやダンスブロックなどのステージパフォーマンスに特化したブロックなどがたくさんあります！
        つまり、今までの大宮キャンパスの繚乱祭の中で最大規模となります！
        今回のテーマは「百花繚乱 ～みんなの個性咲き誇れ～」！
        各ブロック、参加される生徒のみな一人一人がテーマを意識し、実際に個性を発揮して最高の繚乱祭を作り上げます！
        最大規模の繚乱祭、皆さまぜひお越しください！"
      </p>
    </Page>
  );
};

export default Message;
