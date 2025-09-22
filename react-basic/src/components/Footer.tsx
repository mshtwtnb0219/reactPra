
export function Footer({siteTitle = 'Reactの基礎を学ぼう' ,currentYear = new Date().getFullYear()}) {
  // const currentYear = new Date().getFullYear();
  // const siteTitle = 'Reactの基礎を学ぼう';

  return (
    <footer>
      <p>&copy; {currentYear} {siteTitle}</p>
    </footer>
  );
}