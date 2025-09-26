import './App.css'
import { MainContent } from './components/MainContent';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { useState,useEffect } from 'react';
import { ThemeProvider } from './components/ThemeProvider';

function App() {
  const siteTite: string = 'Reactの基礎を学ぼう';
  const currentYear: number = new Date().getFullYear();

  // 進捗率
  const [progress,setProgress] = useState(0);
  // const progress: number = 0;

  // ブラウザ上部のタイトルを変更
  useEffect(() => {
    document.title = siteTite;
  },[]); // 初回描画のみ
  
  return (
    <ThemeProvider>
      <Header siteTitle={siteTite} />
      <MainContent progress={progress} setProgress={setProgress} />
      <Footer siteTitle={siteTite} currentYear={currentYear} />
    </ThemeProvider>
  )
}

export default App
