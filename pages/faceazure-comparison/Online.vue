<template>
<div>
    <Comparison></Comparison>
    <DesktopOnline></DesktopOnline>
          <section>
            <div class=" my-12 2xl:mx-80 xl:mx-24 md:text-md border lg:hidden">
                <div class="border-b py-xl-20 flex justify-between">
                    <router-link to="/comparison/desktop"><button type="button" class="m-2 border rounded p-2"><i class="pi pi-chevron-left" style="font-size:25px"></i></button>
                    </router-link>
                    <p class="text-4xl font-semibold p-2 text-center">Online</p>
                    <button type="button" class="m-2 border p-2 rounded"><i class="pi pi-pause" style="font-size:25px"></i></button>
                </div>
                <div class="text-center leading-10 sm:block mt-6">
                    
                    <p class="font-semibold text-xl">Call</p>
                    <p class="text-sm">+85512982324</p>
                    <router-link to="/FaceAzureOnline"><button class="border rounded-full text-white bg-sky-400 w-28 h-8 my-6 text-center pt-0 text-sm hover:bg-blue-500" type="button">Learn More</button></router-link>
                </div>
                
               <div class="grid grid-cols-6">
                    
                        <div class="grid col-span-5 md:text-lg sm:text-md  font-semibold  border-y py-1" ><p class="pl-2">Print batch forms</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-y py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                        <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Estimates</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    
                        <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Invoices</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                   
                    
                        <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Sales Receipt</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                   
                    
                        <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Recieve Payment</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Pay Bill</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    
                        <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">White Check</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                   
                    
                        <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Vendor Credit</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                        <div class="grid col-span-5 md:text-lg sm:text-md  font-semibold  border-b py-1"><p class="pl-2">Customized forms</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                        <div class="grid col-span-5 md:text-lg sm:text-md  font-semibold  border-b py-1"><p class="pl-2">Lists Translation from English to Khmer</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2">
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                         <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Charts of Account</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                        <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Customer List</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    
                        <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Vendor List</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    
                        <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Items List</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                        <div class="grid col-span-5 md:text-lg sm:text-md  font-semibold  border-b py-1"><p class="pl-2">Exchange Rate from USD to KHR</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    
                     <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">GDT Exchange Rate</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    
                     <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">NBC Exchange Rate</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    
                     <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">NSSF Exchange Rate</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    
                     <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Manual Exchange Rate</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                </div>
            </div>
        </section>
        </div>
</template>

<script>
import Comparison from '../../components/Section/comparison.vue';
import DesktopOnline from '../../components/Section/desktop-online.vue';
export default {
    components: { Comparison, DesktopOnline }
}
</script>

<style scoped>

</style>