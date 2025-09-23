
type Progress = {
  progress: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>
}

// 章タイトル
const chapters: string[] = [
  'Reactの概要を理解しよう',
  'Reactでよく使われるJavaScriptの記法を理解しよう',
  'Reactの環境を構築しよう',
  'JSXの基本を理解しよう',
  'コンポーネントの基本を理解しよう',
  '関数コンポーネントを作成しよう',
  'propsでデータを受け渡す方法を理解しよう',
  '条件分岐で表示を切り替える方法を理解しよう',
  'リストの表示方法を理解しよう',
  'React Hooksの基本を理解しよう',
  'useStateで状態を管理する方法を理解しよう',
  'イベント処理を理解しよう',
  'フォームの操作を理解しよう',
  'useEffectで副作用を管理する方法を理解しよう',
  '生成AIによるエラーの対処方法を理解しよう',
  'CSSによるスタイル調整方法を理解しよう',
  'useContextでデータを共有する方法を理解しよう',
  'Reactで簡単なカウンターアプリを作ろう',
  '生成AIでテストケースを作ろう'
];

export function MainContent({ progress, setProgress }: Progress) {
  // 章ごとのUUID
  const chapterKeys = chapters.map(() => crypto.randomUUID());
  console.log(chapterKeys)

  // 進捗率を10%進める関数
  const handlePeogress = () => {
    if (progress < 100) {
      setProgress(progress + 10);
    }
  };




  return (
    <main>
      <section>
        <h2>本教材について</h2>
        <p>本教材では、Reactの基本的な文法や概念を実践的に学びます。</p>
        <p>各章で段階的に実装を進め、Reactアプリを作っていきます。</p>
        <p>本教材を通して、Reactの基本をしっかりと身につけましょう。</p>
      </section>

      <section>
        <h3>学習の進捗率：{progress}%</h3>
        {progress === 100 && <p>100です</p>}
        {progress >= 50 && <p>50以上です</p>}
        {progress < 50 && <p>50以下です</p>}
        <button onClick={handlePeogress}>10%進める</button>
      </section>

      <section>
        <h3>章一覧</h3>
        <ul style={{ textAlign: 'left' }}>
          {chapters.map((chapterTitle, index) => (
            <li key={chapterKeys[index]}>
              {index + 1}章：{chapterTitle}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}