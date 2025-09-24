import { useState } from "react";

export function ContactForm() {
    // 入力データの状態確認
    const [name, setName] = useState('a');
    const [message, setMessage] = useState('a');

    // 送信ボタン押下時処理
    const handleSubmit = (event:any) => {
        // フォーム送信時のリロードの防止
        event.preventDefault();
    }

    // 送信データのバリデーション
    // if (!name.trim()) {
    //     alert('氏名を入力してください')
    //     return;
    // }
    // if (!message.trim()) {
    //     alert('お問い合わせ内容を入力してください。');
    //     return;
    // }

    // 送信完了メッセージをポップアップ表示
    console.log(`お問い合わせを承りました。\n\n【氏名】${name}\n【内容】${message}`);

    // 入力欄のリセット
    // setName('');
    // setMessage('');

    // フォームを構築して出力
return (
    <section>
      <h3>お問い合わせフォーム</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">氏名：</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="氏名を入力してください"
          />
        </div>
        <br />
        <div>
          <label htmlFor="message">お問い合わせ内容：</label>
          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="お問い合わせ内容を入力してください"
          />
        </div>

        <button type="submit">送信</button>
      </form>
    </section>
  );
}