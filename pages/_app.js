import '../styles/globals.css';
import Header from '../components/Header';
import { useEffect } from 'react';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';
import { PortfolioProvider } from '../contexts/PortfolioContext';

function MyApp({ Component, pageProps }) {
  const { state } = useTheme();

  useEffect(() => {
    if (state.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [state.theme]);

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <PortfolioProvider>
        <MyApp Component={Component} pageProps={pageProps} />
      </PortfolioProvider>
    </ThemeProvider>
  );
}



