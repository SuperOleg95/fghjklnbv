export const useWebsiteStore = defineStore("websiteStore", {
  state: () => ({
    name: "",
    description: "",
    currentLocale: "undefined",
  }),
  actions: {
    async fetch() {
      const infos: any = await $fetch("somwhere");

      this.name = infos.name;
      this.description = infos.description;
    },
  },
});
