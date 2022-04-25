export const card = {
  props: {
    title: {
      type: String,
      default: "Produk",
    },
    price: {
      type: Number,
      default: 0,
    },
    desc: {
      type: String,
      default: "lorem ipsum dolor sit amet",
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
        class="flex flex-col w-sm min-w-[80px] shadow-md justify-between border-2 border-gray-200 rounded-xl md:h-full h-full"
      >
        <div
          class="flex flex-col bg-white border-b-2 border-gray-200 items-center justify-center rounded-b-xl h-full"
        >
          <img class="w-[300px]" :src="pic" alt="" />
        </div>
        <div class="flex flex-col p-4 gap-y-3 w-full">
          <div class="flex flex md:flex-row flex-col w-full justify-between">
            <h1 class="lg:text-xl md:text-sm text-[14px] text-black-900 font-bold">{{title}}</h1>
            <h1 class="ld:text-xl md:text-sm text-[14px] text-black-900 font-bold">Rp.{{price}}</h1>
          </div>
          <div class="flex flex-col">
            <p class="md:text-sm text-[12px] text-black-700">
            {{desc}}
            </p>
            <span class="md:text-md text-[14px] text-black-700 font-bold mt-3">Stok {{stock}} </span>
          </div>
        </div>
      </section>
  `,
};
