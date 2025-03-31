import { I18nextProvider } from 'react-i18next';
import ThemeContextProvider from '@/view/context/ThemeContext';
import GlobalStyles from '@/view/styles/GlobalStyles';
import Routes from '@/routes/Routes';
import DefaultTemplate from './view/templates/DefaultTemplate';
import i18n from './view/i18n';

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeContextProvider>
        <GlobalStyles />
        <DefaultTemplate>
          <Routes />
        </DefaultTemplate>
      </ThemeContextProvider>
    </I18nextProvider>
  );
}
