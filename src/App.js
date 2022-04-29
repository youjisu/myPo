import './components/global.scss';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Intro from './Intro';
import History from './History';
import NotFound from './NotFound';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {}
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Intro />}></Route>
            <Route path="/history/*" element={<History />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
