import {theme} from './themes/theme';
import { ThemeProvider } from 'styled-components';
import { Routes } from './routes/Routes';
import { GlobalStyle } from './themes/styles';

const App = ():JSX.Element=> {
  return (
    
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Routes />
    </ThemeProvider>

  );
}

export default App;
