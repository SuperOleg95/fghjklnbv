export default defineNuxtPlugin((nuxtApp) => {
  // called right after a new locale has been set
  nuxtApp.hook("i18n:localeSwitched", ({ oldLocale, newLocale }) => {
    const { $io } = useNuxtApp();
    const store = useWebsiteStore();
    store.currentLocale = newLocale;
    //console.log('onLanguageSwitched', oldLocale, newLocale)
  });
});
