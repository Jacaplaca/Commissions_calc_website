import path from "path";
import i18n from "i18next"
// test-utils.js
import { render } from "@testing-library/react";
import { ThemeProvider } from 'styled-components';
import { MainContextProvider } from '../contexts/main';
import { I18nextProvider } from 'react-i18next';
import { initReactI18next } from 'react-i18next';
// import i18n from './i18nForTests'
import themeLight from '../themes/themeLight.ts'

// Add in any providers here if necessary:
// (ReduxProvider, ThemeProvider, etc)
const Providers = ({ children }) => {

  return <I18nextProvider i18n={i18n}>
    <MainContextProvider>
      <ThemeProvider theme={themeLight}>
        {children}
      </ThemeProvider>
    </MainContextProvider>
  </I18nextProvider>

};

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };


const DEFAULT_LANGUAGE = "en"
const DEFAULT_NAMESPACE = ["common", "subMenu", "footer", "pricing"]
export function initI18n(translations = {}) {
  i18n.use(initReactI18next).init({
    lng: DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    ns: [DEFAULT_NAMESPACE],
    defaultNS: "common",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: { [DEFAULT_LANGUAGE]: { [DEFAULT_NAMESPACE]: translations } },
    localePath: path.resolve("./public/static/locales"),
  })
}
export function addI18nResources(
  resource = {},
  { ns = DEFAULT_NAMESPACE, lang = DEFAULT_LANGUAGE } = {}
) {
  i18n.addResourceBundle(lang, ns, resource, true, true)
}


async function mockFetch(url, config) {
  switch (url) {
    case '/api/contact': {
      const user = JSON.parse(config.body)
      return {
        ok: true,
        status: 200,
        json: async () => ({ message: user }),
      }
    }
    default: {
      return {
        ok: false,
        status: 500,
      }
    }
  }
}

beforeAll(() => {
  global.fetch = jest.fn().mockImplementation(mockFetch)
})

afterAll(() => {
  global.fetch.mockClear()
  delete global.fetch
})