import { card } from "../../components/card/card.js";
import { Navbar } from "../../components/common/Navbar.js";

export const listProduct = {
  components: {
    card,
    Navbar,
  },
  setup() {
    const productList = [
      {
        id: 1,
        name: "Pod Vincih",
        price: 300,
        desc: "Pod bagus dengan batre yang awet",
      },
      {
        id: 2,
        name: "Pod Manik",
        price: 200,
        desc: "Pod bagus asep nya banyak",
        pic: "https://cdn.shopifycdn.net/s/files/1/0038/8032/1113/files/wotofo-nexpod-mod-standard-package.png?v=1599904311",
      },
      {
        id: 3,
        name: "Vape Startdust",
        price: 200,
        desc: "Pod bagus asep nya banyak",
        pic: "https://cdn.shopifycdn.net/s/files/1/0038/8032/1113/files/wotofo-nexpod-mod-standard-package.png?v=1599904311",
      },
      {
        id: 4,
        name: "Tesla Mod Preview 3",
        price: 200,
        desc: "Pod bagus asep nya banyak",
        pic: "https://cdn.shopifycdn.net/s/files/1/0038/8032/1113/files/wotofo-nexpod-mod-standard-package.png?v=1599904311",
      },
    ];
    return {
      productList,
    };
  },
  template: `
  <Navbar/>
  <div  class="grid grid-cols-4 w-auto gap-4 px-24 py-16">
    <div v-for="(n, i) in productList" :key="i"> 
      <card
        :title="n.name"
        :price="n.price"
        :desc="n.desc"
        :pic="n.pic"
      />
    </div>
  </div>
  `,
};
