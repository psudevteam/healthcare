export const login ={
    template: `
    <!-- component -->
<script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js" defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/zxcvbn/4.4.2/zxcvbn.js"></script>

<style>@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')</style>
    <div class="bg-gray-100 text-gray-500 w-full overflow-hidden h-screen">
        <div class="md:flex  w-full h-screen">
            <div class="hidden order-2 md:block w-1/2 bg-indigo-500 py-10 px-10">
                Test Drive
            </div>
            <div class="w-full md:w-1/2 py-10 px-5 md:px-10 mb-8">
                <div class=" mb-10">
                    <h1 class="font-bold text-3xl text-gray-900">Health Care</h1>
                    <p>Enter your information to register</p>
                </div>
                    <div class="flex -mx-3 mt-15 ">
                        <div class="w-full px-3 mb-5">
                            <label for="" class="text-xs font-semibold px-1">Email</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <input type="email" placeholder="Masukkan Email anda" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500">
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <label for="" class="text-xs font-semibold px-1">Password</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input type="password" placeholder="Masukkan Password anda" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500">
                            </div>
                        </div>
                    </div>
                   
                    <div class="flex -mx-3">
                        <div class="w-1/2 flex justify-center px-3 mb-5">
                            <button class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}