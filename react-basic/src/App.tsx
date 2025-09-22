import './App.css'
import { MainContent } from './components/MainContent';
import { Footer } from './components/Footer';
import { Header } from './components/Header';


function App() {
  const siteTite: string = 'Reactの基礎を学ぼう';
  const currentYear: number = new Date().getFullYear();

  // 進捗率
  const progress: number = 0;


  return (
    <>
      <Header siteTitle={siteTite} />
      <MainContent progress={progress} />
      <Footer siteTitle={siteTite} currentYear={currentYear} />
    </>
  )
}

export default App
