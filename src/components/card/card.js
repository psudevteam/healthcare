export const card = {
  props: {
    id: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: "Produk",
    },
    price: {
      type: String,
      default: "0",
    },
    pic: {
      type: String,
      default:
        "https://media.karousell.com/media/photos/products/2021/10/12/vape_pod_mod_voopoo_drag_3_kit_1634034427_81b9738b_progressive.jpg",
    },
    stock: {
      type: Number,
      default: 0,
    },
  },
  template: `
      <section
        class="flex flex-col w-sm min-w-[80px] shadow-lg justify-between border-2 border-gray-200 border-rounded-lg rounded-xl h-full"
      >
        <div
          class="flex flex-col bg-white items-center justify-center rounded-b-xl border-2 border-gray-200 h-full"
        >
          <img class="w-[300px]" :src="pic" alt="" />
        </div>
        <div class="flex flex-col p-4 gap-y-3 w-full">
          <div class="flex md:flex-row flex-col w-full md:justify-center sm:items-center items-start w-full">
          <router-link class="w-full flex items-center flex-col" to='/detail/{{id}}'> 
           <h1 class="lg:text-xl md:text-sm text-[14px] text-black-900 items-center justify-center">{{title}}</h1>
           <h1 class="ld:text-xl md:text-sm text-[14px] text-yellow-400 font-bold">Rp.{{price}}</h1>
          </div>
        </div>
      </section>
  `,
};
