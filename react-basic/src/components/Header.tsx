import styles from './Header.module.css';

type HeaderProps = {
    siteTitle: string;
}

export function Header({ siteTitle }: HeaderProps) {
    // export function Header({siteTitle = 'サイト名未設定'}) {
    // const siteTitle: string = 'Reactの基礎を学ぼう';
    // クリック時に処理するイベントハンドラ
    const handleClick = () => {
        alert('当社では、プログラミング学習者向けにReactを活用した実践的な学習教材を提供しています。Reactの基本から応用まで、手を動かしながら学べるコンテンツを通じて、確かなスキル習得を目指せます。');

    }

    return (
        <header className={styles.header}>
            <nav>
                <h1>
                    {siteTitle}
                </h1>
                <ul className={styles.navList}>
                    <li className={styles.navItem}><a href="#">HOME</a></li>
                    <li className={styles.navItem}><a href="#" onClick={handleClick}>会社概要</a></li>
                </ul>
            </nav>
        </header>
    )
}