const { defineStore } = Pinia;

export const useUserStore = defineStore({
  state: () => {
    return {
      user: [],
    };
  },

  getters: {
    getUser() {
      return this.user;
    },
  },

  actions: {
    async fetchAllUser() {
      try {
        const resUser = await axios.get("/user/");
        this.user = resUser.data.results;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
