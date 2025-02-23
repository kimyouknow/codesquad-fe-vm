import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import UserContext from 'context/User';
import theme from 'style/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'style/globalStyle';
import worker from 'mocks/brower';
import NotificationContext from 'context/Notification';

// FIXME: npm script 명령어에 boolean 입력 가능할까?
if (process.env.REACT_APP_MOCK_TOOL === 'msw') {
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NotificationContext>
        <UserContext>
          <App />
        </UserContext>
      </NotificationContext>
    </ThemeProvider>
  </React.StrictMode>,
);
