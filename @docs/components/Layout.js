import SettingsContextProvider from '../context/SettingsContext';
import PageContextProvider from '../context/PageContext';

const Layout = ({ children, language }) => {
  console.log('current language: ', language);
  return (
    <>
      <PageContextProvider>
        <SettingsContextProvider>
          <header>This is header</header>
          {children}
          <footer>This is footer</footer>
        </SettingsContextProvider>
      </PageContextProvider>
    </>
  );
};

export default Layout;
