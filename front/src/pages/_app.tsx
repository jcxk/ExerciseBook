import '@/styles/globals.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import AppLayout from '@/components/Layout/AppLayout';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: `#0070f3`,
    secondary: `#000000`,
  },
};

export default function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <AppLayout>{page}</AppLayout>);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          {getLayout(<Component {...pageProps} />)}
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}
