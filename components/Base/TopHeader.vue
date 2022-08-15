<template>
  <nav
    class="bg-white border-gray-200 px-[12px] md:px-[30px]  py-[10px]  fixed w-full z-10 shadow-sm border-b-[1px]"
  >
    <div
      class="flex flex-wrap justify-between items-center mx-auto max-w-screen-lg"
    >
      <NuxtLink to="/" class="flex items-center">
        <img
          src="~/assets/img/logo.png"
          class="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
      </NuxtLink>
      <div class="flex items-center md:order-2">
   
        <a
          href="https://app.faceazure.com/"
          target="_blank"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >Login</a
        >
        <button
          data-collapse-toggle="mega-menu-icons"
          type="button"
          class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu-icons"
          aria-expanded="true"
        >
          <svg
            aria-hidden="true"
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        id="mega-menu-icons"
        class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
      >
        <ul
          class="flex flex-col mt-4 text-sm font-medium md:flex-row md:space-x-8 md:mt-0"
        >
          <li>
            <NuxtLink
              to="/"
              data-collapse-toggle="mega-menu-icons"
              aria-controls="mega-menu-icons"
              aria-expanded="true"
              type="button"
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              aria-current="page"
              >Home</NuxtLink
            >
          </li>
          <li>
            <button
              id="mega-menu-icons-dropdown-button"
              data-dropdown-toggle="mega-menu-icons-dropdown"
              class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Products
              <svg
                aria-hidden="true"
                class="ml-1 w-5 h-5 md:w-4 md:h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <div
              id="mega-menu-icons-dropdown"
              class="hidden overflow-y-auto h-menu-list grid absolute z-10 grid-cols-1 w-auto text-sm bg-white rounded-lg border border-gray-100 shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700 block"
              data-popper-reference-hidden="true"
              data-popper-escaped="true"
              data-popper-placement="bottom"
              
              style="
                position: absolute;
                inset: 0px auto auto 0px;
                margin: 0px;
                transform: translate(141px, 70px);
              
              "
            >
              <div class="px-[30px] py-[10px] md:py-[30px] w-screen md:w-auto text-gray-900  dark:text-white">
                <div class="pb-[20px]">FACEAZURE</div>
                <ul
                  class="space-y-4"
                  aria-labelledby="mega-menu-icons-dropdown-button"
                >
                  <li>
                    <NuxtLink
                      to="/faceazure-desktop"
                      data-collapse-toggle="mega-menu-icons"
                      aria-controls="mega-menu-icons"
                      aria-expanded="true"
                      type="button"
                      class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                    >
                      FaceAzure Desktop
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/faceazure-online"
                       data-collapse-toggle="mega-menu-icons"
                      aria-controls="mega-menu-icons"
                      aria-expanded="true"
                      type="button"
                      class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                    >
                      FaceAzure Online
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/faceazure-comparison"
                       data-collapse-toggle="mega-menu-icons"
                      aria-controls="mega-menu-icons"
                      aria-expanded="true"
                      type="button"
                      class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                    >
                      FaceAzure Comparison
                    </NuxtLink>
                  </li>
                </ul>
              </div>
              <div class="px-[30px] py-[10px] md:py-[30px] w-screen md:w-auto text-gray-900  dark:text-white">
                <div class="pb-[20px]">QUICKBOOKS</div>
                <ul class="space-y-4">
                  <li>
                    <a
                      href="https://cas.com.kh/products/quickbooks/enterprise"
                      target="_blank"
                      class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                    >
                      QuickBooks Enterprise
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cas.com.kh/products/quickbooks/premier"
                      target="_blank"
                      class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                    >
                      QuickBooks Primier Plus
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cas.com.kh/products/quickbooks/pro"
                      target="_blank"
                      class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                    >
                      QuickBooks Pro Plus
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cas.com.kh/products/quickbooks/mac"
                      target="_blank"
                      class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                    >
                      QuickBooks For Mac
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cas.com.kh/products/quickbooks/online"
                      target="_blank"
                      class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                    >
                      QuickBooks Online
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cas.com.kh/products/quickbooks/pos"
                      target="_blank"
                      class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                    >
                      QuickBooks Point of Sale
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cas.com.kh/products/quickbooks/comparison"
                      target="_blank"
                      class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                    >
                      QuickBooks Comparison
                    </a>
                  </li>
                </ul>
              </div>
              <div class="px-[30px] py-[10px] md:py-[30px] w-screen md:w-auto text-gray-900 dark:text-white">
                <div class="pb-[20px]">OTHER PRODUCTS</div>
                <ul class="space-y-4">
                  <li>
                    <a
                      href="https://cas.com.kh/products/tsplus"
                      target="_blank"
                      class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                    >
                      Terminal Service Plus
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cas.com.kh/products/winrar"
                      target="_blank"
                      class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                    >
                      WinRAR
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cas.com.kh/products/avast"
                      target="_blank"
                      class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                    >
                      Avast Business
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <button
              id="mega-menu-icons-dropdown-button-service"
              data-dropdown-toggle="mega-menu-icons-dropdown-service"
              class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Services
              <svg
                aria-hidden="true"
                class="ml-1 w-5 h-5 md:w-4 md:h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <div
              id="mega-menu-icons-dropdown-service"
              class="hidden overflow-y-auto h-menu-list grid absolute z-10 grid-cols-1 w-auto text-sm bg-white rounded-lg border border-gray-100 shadow-md dark:border-gray-700 md:grid-cols-2 dark:bg-gray-700 block"
              data-popper-reference-hidden=""
              data-popper-escaped=""
              data-popper-placement="bottom"
              style="
                position: absolute;
                inset: 0px auto auto 0px;
                margin: 0px;
                transform: translate(141px, 70px);
              "
            >
              <div class="px-[30px] py-[10px] md:py-[30px] w-screen md:w-auto  text-gray-900  dark:text-white">
                <div class="pb-[20px]">OUR SERVICES</div>
                <ul
                  class="space-y-4"
                  aria-labelledby="mega-menu-icons-dropdown-button-service"
                >
                  <li>
                    <a
                      href="https://cas.com.kh/services/consulting"
                      target="_blank"
                      class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                    >
                      Consulting
                    </a>
                  </li>
                  <li>
                    <a
                        href="https://cas.com.kh/services/implementation"
                      target="_blank"
                      class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                    >
                      Implementation
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cas.com.kh/services/technical-support"
                      target="_blank"
                      class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                    >
                      Technical Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cas.com.kh/contact_us"
                      target="_blank"
                      class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                    >
                      End-User Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cas.com.kh/services/data-migration"
                      target="_blank"
                      class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                    >
                      Data Migration
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cas.com.kh/services/cloud-hosting"
                      target="_blank"
                      class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                    >
                      Private Cloud Hosting
                    </a>
                  </li>
                </ul>
              </div>
              <div class="px-[30px] py-[10px] md:py-[30px]  w-screen md:w-auto  text-gray-900  dark:text-white">
                <div class="pb-[20px]">TRAINING SERVICES</div>
                <ul class="space-y-4">
                  <li>
                    <a
                     href="https://cas.com.kh/services/training/quickbooks-desktop"
                      target="_blank"
                      class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                    >
                      QuickBooks Desktop
                    </a>
                  </li>
                  <li>
                    <a
                       href="https://cas.com.kh/services/training/quickbooks-online"
                      target="_blank"
                      class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                    >
                      QuickBooks Online
                    </a>
                  </li>
                  <li>
                    <a
                       href="https://cas.com.kh/services/training/quickbooks-ngo"
                      target="_blank"
                      class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                    >
                      QuickBooks NGO
                    </a>
                  </li>
                  <li>
                    <a
                       href="https://cas.com.kh/services/training/quickbooks-contractor"
                      target="_blank"
                      class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                    >
                      QuickBooks Contractor
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <NuxtLink
              to="/pricing/desktop-1price"
              data-collapse-toggle="mega-menu-icons"
              aria-controls="mega-menu-icons"
              aria-expanded="true"
              type="button"
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
            >Prices</NuxtLink>
          </li>
          <li>
            <button
              id="mega-menu-icons-dropdown-button-about"
              data-dropdown-toggle="mega-menu-icons-dropdown-about"
              class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
            >
              About
              <svg
                aria-hidden="true"
                class="ml-1 w-5 h-5 md:w-4 md:h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <div
              id="mega-menu-icons-dropdown-about"
              class="hidden overflow-y-auto h-menu-list grid absolute z-10 grid-cols-2 w-auto text-sm bg-white rounded-lg border border-gray-100 shadow-md dark:border-gray-700 md:grid-cols-1 dark:bg-gray-700 block"
              data-popper-reference-hidden=""
              data-popper-escaped=""
              data-popper-placement="bottom"
              style="
                position: absolute;
                inset: 0px auto auto 0px;
                margin: 0px;
                transform: translate(141px, 70px);
              "
            >
              <div class="px-[30px] py-[10px] md:py-[30px] w-screen md:w-auto text-gray-900  dark:text-white">
                <div class="pb-[20px]">ABOUT US</div>
                <ul
                  class="space-y-4"
                  aria-labelledby="mega-menu-icons-dropdown-button-service"
                >
                  <li>
                    <NuxtLink
                      to="/about"
                      data-collapse-toggle="mega-menu-icons"
                      aria-controls="mega-menu-icons"
                      aria-expanded="true"
                      type="button"
                      class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                    >
                      Our Histories
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/terms-of-use"
                      data-collapse-toggle="mega-menu-icons"
                      aria-controls="mega-menu-icons"
                      aria-expanded="true"
                      type="button"
                      class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                    >
                      Terms of User
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/privacy-policies"
                      data-collapse-toggle="mega-menu-icons"
                      aria-controls="mega-menu-icons"
                      aria-expanded="true"
                      type="button"
                      class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                    >
                      Privacy Policies
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                    data-collapse-toggle="mega-menu-icons"
                      aria-controls="mega-menu-icons"
                      aria-expanded="true"
                      type="button"
                      to="/career"
                      class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                    >
                      Career
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/faq"
                      data-collapse-toggle="mega-menu-icons"
                      aria-controls="mega-menu-icons"
                      aria-expanded="true"
                      type="button"
                      class="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                    >
                      FAQ
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <NuxtLink
              to="/contact"
              data-collapse-toggle="mega-menu-icons"
              aria-controls="mega-menu-icons"
              aria-expanded="true"
              type="button"
              class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
            >Contact</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
      showMenuTeam: false,
    };
  },
  methods: {
  },
};
</script>
<style>
.p-megamenu {
  background: none;
  border: none !important;
}

.p-megamenu .p-megamenu-panel {
  margin-top: 8px;
}

.p-megamenu-submenu .p-menuitem-text {
  text-transform: none;
}

.p-megamenu-grid .p-megamenu-col-4 {
  width: 235px;
}

.p-megamenu-grid .p-megamenu-col-4 .p-menuitem .p-menuitem-link {
  width: 220px;
}
@media screen and (max-width: 640px) {
  .h-menu-list{
    height: 60vh;
  }
}


</style>
