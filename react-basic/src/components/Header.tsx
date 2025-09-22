
type HeaderProps = {
    siteTitle: string;
}

export function Header({siteTitle}: HeaderProps) {
// export function Header({siteTitle = 'サイト名未設定'}) {
    // const siteTitle: string = 'Reactの基礎を学ぼう';

    return (
        <header>
            <nav>
                <h1>
                    {siteTitle}
                </h1>
                <ul>
                    <li><a href="#">Home</a></li>
                </ul>
            </nav>
        </header>
    )
}