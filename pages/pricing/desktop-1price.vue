<template>
<div>
    <Chooseplan></Chooseplan>
    <div class="text-center mt-10">
    <div class="inline-flex" role="group">
        <router-link to="/pricing/desktop-1price"><button type="button" class="py-2 px-4 text-md font-medium text-white bg-cyan-900 rounded-l-full hover:bg-cyan-900 hover:text-white focus:z-10   focus:ring-teal-900 focus:text-white dark:bg-teal-900  dark:text-white dark:hover:text-white dark:hover:bg-teal-900 ">
            FaceAzure Desktop
        </button>
        </router-link>
         <router-link to="/pricing/Online-price"><button type="button" class="py-2 px-4 text-md font-medium text-black bg-gray-400 rounded-r-full hover:bg-cyan-900 hover:text-white focus:z-10    focus:ring-teal-900 focus:text-white dark:bg-teal-900  dark:text-white dark:hover:text-white dark:hover:bg-teal-900 ">
            FaceAzure Online
        </button></router-link>
    </div>
  </div>
    <DesktopPricing></DesktopPricing>
  <section>
     <div class=" my-12 2xl:mx-80 xl:mx-24 md:text-md border lg:hidden">
                <div class="border-b py-xl-20 flex justify-between">
                    <button type="button" class="m-2 border p-4 rounded"><i class="pi pi-pause" style="font-size:20px"></i></button>
                    <p class="text-4xl font-semibold p-4 text-center">1 User</p>
                    <router-link to="/pricing/desktop-2price"><button type="button" class="m-2 border p-4 rounded"><i class="pi pi-chevron-right" style="font-size:20px"></i></button>
                    </router-link>
                </div>
                <div class="text-center leading-10 sm:block">
                    
                    <p class="font-semibold text-2xl p-4">$30/month</p>
                    <p class="text-lg">Billed as $360/year</p>
                    <p class="text-sm p-4">Annual subscription</p>
                    <router-link to="/contact"><button class="border rounded-full text-white bg-cyan-600 w-28 h-8 my-6 text-center pt-0 text-sm hover:bg-cyan-900" type="button">BUY NOW</button></router-link>
                </div>
                
                <div class="grid grid-cols-3">
                <div class="grid col-span-2 text-lg   font-semibold border-y py-1 pl-2">
                    <div class="pt-1 flex"><i class="pi pi-angle-down" style="font-size:20px"></i>
                    <p class="ml-2">Print Forms</p></div>
                </div>
                <div class="text-green-600 m-auto w-full border-y py-2 pl-2 text-center"  >
                    <span class="ml-20"><i class="pi pi-check" style="font-size:20px"></i></span>
                </div>
                
                <div class="grid col-span-2 text-lg   font-semibold border-b py-1 pl-2">
                    <div class="pt-1 flex"><i class="pi pi-angle-down" style="font-size:20px"></i>
                    <p class="ml-2">Payroll Management</p></div>
                </div>
                <div class="text-green-600 m-auto w-full border-b py-2 pl-2 text-center"  >
                    <span class="ml-20"><i class="pi pi-check" style="font-size:20px"></i></span>
                </div>
                
               <div class="grid col-span-2 text-lg   font-semibold border-b py-1 pl-2">
                    <div class="pt-1 flex"><i class="pi pi-angle-down" style="font-size:20px"></i>
                    <p class="ml-2">Monthly Tax</p></div>
                </div>
                <div class="text-green-600 m-auto w-full border-b py-2 pl-2 text-center"  >
                    <span class="ml-20"><i class="pi pi-check" style="font-size:20px"></i></span>
                </div>
               <div class="grid col-span-2 text-lg   font-semibold border-b py-1 pl-2">
                    <div class="pt-1 flex"><i class="pi pi-angle-down" style="font-size:20px"></i>
                    <p class="ml-2">Custom Report</p></div>
                </div>
                <div class="text-green-600 m-auto w-full border-b py-2 pl-2 text-center"  >
                    <span class="ml-20"><i class="pi pi-check" style="font-size:20px"></i></span>
                </div>
                <div class="grid col-span-2 text-lg   font-semibold border-b py-1 pl-2">
                    <div class="pt-1 flex"><i class="pi pi-angle-down" style="font-size:20px"></i>
                    <p class="ml-2">User Management</p></div>
                </div>
                <div class="text-green-600 m-auto w-full border-b py-2 pl-2 text-center"  >
                    <span class="ml-20"><i class="pi pi-check" style="font-size:20px"></i></span>
                </div>
                
                <div class="grid col-span-2 text-lg border-b py-1 pl-2"><p class="pl-8">System Demo</p></div>
                <div class="text-green-600 m-auto w-full border-b py-2 pl-2 text-center"  >
                    <span class="ml-20"><i class="pi pi-check" style="font-size:20px"></i></span>
                </div>
                
                <div class="grid col-span-2 text-lg border-b py-1 pl-2"><p class="pl-8">User Mannual</p></div>
                <div class="text-green-600 m-auto w-full border-b py-2 pl-2 text-center"  >
                    <span class="ml-20"><i class="pi pi-check" style="font-size:20px"></i></span>
                </div>
                
                <div class="grid col-span-2 text-lg border-b py-1 pl-2"><p class="pl-8">Video Guide</p></div>
                <div class="text-green-600 m-auto w-full border-b py-2 pl-2 text-center"  >
                    <span class="ml-20"><i class="pi pi-check" style="font-size:20px"></i></span>
                </div>
                
                <div class="grid col-span-2 text-lg border-b py-1 pl-2"><p class="pl-8">Oreintation</p></div>
                <div class="text-green-600 m-auto w-full border-b py-2 pl-2 text-center"  >
                    <span class="ml-20"><i class="pi pi-check" style="font-size:20px"></i></span>
                </div>
               
                <div class="grid col-span-2 text-lg py-1 pl-2"><p class="pl-8">Lifetime Support</p></div>
                <div class="text-green-600 m-auto w-full py-2 pl-2 text-center"  >
                    <span class="ml-20"><i class="pi pi-check" style="font-size:20px"></i></span>
                </div>    
            </div>       
    </div>
    <Callmoreuser></Callmoreuser>
  </section>
  </div>
</template>

<script>
import Chooseplan from '../../components/Section/chooseplan.vue';
import DesktopPricing from '../../components/Section/Desktop-pricing.vue';
import Callmoreuser from '../../components/Section/callmoreuser.vue';
export default {
    components: { Chooseplan, DesktopPricing, Callmoreuser }
}
</script>

<style>


</style>