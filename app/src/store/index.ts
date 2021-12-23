import { createStore } from "vuex";
import { PageList } from "@/utils/page-declaration";

export default createStore({
  state: {
    currentindex:0,
    pages:PageList
  },
  mutations: {},
  actions: {},
  modules: {},
});
