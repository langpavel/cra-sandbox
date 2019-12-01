// See https://github.com/GertjanReynaert/react-intl-translations-manager
const manageTranslations = require('react-intl-translations-manager').default;

manageTranslations({
  messagesDirectory: 'src/locale/.extracted',
  translationsDirectory: 'src/locale/',
  // en is defaultLocale so no need to list en here
  languages: ['cs'],
});
