const { onBeforeMount, ref } = Vue;
import { card } from "../../components/card/card.js";
import { Navbar } from "../../components/common/Navbar.js";
import { useProductStore } from "../../store/product.js";

export const listProduct = {
  components: {
    card,
    Navbar,
  },
  setup() {
    const store = useProductStore();

    const productList = ref([]);

    onBeforeMount( async () => {
      const res = await store.fetchAllProduct();
      productList.value = res.data;
    });

    return {
      productList,
    };
  },
  template: `
  <Navbar/>
  <div
  class="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 lg:px-16 md:px-8 sm:px-6 px-4 w-full md:gap-4 gap-2 px-auto md:py-16 py-8">
    <div
    v-for="(n, i) in productList" :key="i"
    >
      <card
        :title="n.name"
        :price="n.price"
        :desc="n.desc"
        :pic="n.pic"
        :stock="n.qty"
      />
    </div>
  </div>
  `,
};
