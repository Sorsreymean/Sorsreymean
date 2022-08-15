<template>
  <div class="py-[30px] md:py-[50px]">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-x-[50px]">
      <!-- Column Left -->
      <div
        class="qb-desktop bg-left-top flex justify-center md:justify-end text-center md:text-right px-[12px] md:px-[30px] py-[50px] border-inherit border-slate-300 md:border md:rounded-md backdrop-blur-sm"
      >
        <div class="w-full md:w-[380px] text-white md:text-black">
          <h2 class="text-4xl ">QuickBooks Desktop</h2>
          <p class="py-4 mb-4">
            The Accounting Software capable of managing Customer, Vendor,
            Inventory, Costing, and complex accounting needs with a range of 1
            to 40 users.
          </p>
          <a
            href="https://cas.com.kh/products/quickbooks/enterprise"
            target="blank"
            class="bg-sky-400 text-white px-6 py-2 rounded-full hover:bg-blue-600"
            >Learn More</a
          >
        </div>
      </div>

      <!-- Column Right -->
      <div
        class="qb-online flex justify-center md:justify-start text-center md:text-left text-white px-[12px] md:px-[30px] py-[50px] border-inherit md:border border-slate-300 md:rounded-md bg-right md:bg-center"
      >
        <div class="w-full md:w-[380px]">
          <h2 class="text-4xl ">QuickBooks Online</h2>
          <p class="py-4 mb-4">
            Cloud base accounting software is easy to use, accessible from
            anywhere at any time from any device.
          </p>
          <a
            href="https://cas.com.kh/products/quickbooks/online"
            target="blank"
            class="bg-sky-400 text-white px-6 py-2 rounded-full hover:bg-blue-600"
            >Learn More</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.qb-online {
  background: url("~assets/img/quickbooks-online-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
}
.qb-desktop {
  background: url("~assets/img/quickbooks-desktop-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
