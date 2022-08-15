<template>
<div >
    <Comparison></Comparison>
    <DesktopOnline></DesktopOnline>
           <div class="my-12 mx-auto max-w-screen-lg lg:hidden block">
                <div class=" my-12 xl:mx-8 md:text-md md:mx-[30px] mx-[12px] border lg:hidden">
                    <div class="border-b py-xl-20 flex justify-between">
                        <button type="button" class="m-2 border p-2 rounded"><i class="pi pi-pause" style="font-size:20px"></i></button>
                        <p class="text-4xl font-semibold p-2 text-center">Desktop</p>
                        <router-link to="/comparison/online"><button type="button" class="m-2 border p-2 rounded"><i class="pi pi-chevron-right" style="font-size:20px"></i></button>
                        </router-link>
                    </div>
                    <div class="text-center leading-10 mt-6">
                        <p class="font-semibold text-xl">$30/month</p>
                        <p class="text-sm">Annual subscription</p>
                        <router-link to="/FaceAzureDesktop"><button class="border rounded-full text-white bg-sky-400 w-28 h-8 my-6 text-center pt-0 text-sm hover:bg-blue-500" type="button">Learn More</button></router-link>
                    </div>
                    
                    <div class="grid grid-cols-6">
                    
                        <div class="grid col-span-5 md:text-lg sm:text-md  font-semibold  border-y py-1"><p class="pl-2">Print batch forms</p></div>
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
                   
                    
                        <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Credit & Refund</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                   
                    
                        <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Sales Order</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                   
                    
                        <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Purchase Order</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    
                        <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Recieve Inventory</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    
                        <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Bill</p></div>
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
                    
                        <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Sales Rep List</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                        <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Other Namene List</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    
                        <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Employee List</p></div>
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
                    
                    <div class="grid col-span-5 md:text-lg sm:text-md  font-semibold  border-b py-1"><p class="pl-2">Manual Payroll Management</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    
                    <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Manual Employee</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                     <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Manual Payroll Items</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    
                    <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Manual PaySlip</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    
                    <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Pay Employee semimonthly</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    
                    <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Pay Employee monthly</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    
                    <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Pay Emplyee Liability</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    
                    <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Customize PaySlip</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    
                    <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Monthly Exchange Rate</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    
                    <div class="grid col-span-5 md:text-lg sm:text-md  font-semibold  border-b py-1"><p class="pl-2">Monthly Tax Management</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    
                    <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Generate Monthly Tax</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    
                    <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Preview/Print Purchase Journal</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    
                    <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Preview/Print Withholding Tax Journal</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    
                    <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Preview/Print Payroll Journal</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    
                    <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Generate Monthly Tax</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Export Purchase & Sales Journal to Excel in USD</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-4"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    
                    <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Export to E-Filing</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    
                    <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Monthly Report for Value Added Tax</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    
                    <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Monthly Report for Withholding Tax</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    
                    <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Monthly Report for Accomodation Tax</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    
                    <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Monthly Report for Public Lighting Tax</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    
                    <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Export Monthly Tax Summary to Excel</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    
                    <div class="grid col-span-5 md:text-lg sm:text-md  font-semibold  border-b py-1"><p class="pl-2">Monthly Tax Management</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">CIFRS fro SMEs</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    
                    <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Company & Financial</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    
                    <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Customers & Receivables</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    
                    <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Inventories</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    
                    <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Vendors & Payables</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    
                    <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Budgets & Forcasts</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    
                    <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Accountant & Taxes</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    
                    <div class="grid col-span-5 md:text-lg sm:text-md border-b py-1"><p class="pl-4">Employee & Payrolls</p></div>
                        <div class="text-green-600 m-auto w-full  text-center  border-b py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    <div class="grid col-span-5 md:text-lg sm:text-md py-1"><p class="pl-4">Job Costing</p></div>
                        <div class="text-green-600 m-auto w-full  text-center py-2"  >
                        <span class="ml-4"><i class="pi pi-check" style="font-size:20px;"></i></span>
                        </div>
                    </div>
                </div>
        </div> 
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