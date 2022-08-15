<template>
<div>
             <main class="hidden lg:block">
              <div>
                  <div class="grid grid-cols-4 my-12 2xl:mx-80 xl:mx-24 md:text-md md:mx-24">
                    <div class="grid col-span-1 border-b sm:none"></div>
                    <div class="text-center border leading-10 sm:block">
                        <p class="text-lg font-semibold my-4">$30/month</p>
                        <p class="font-semibold text-md">Billed as $360/year</p>
                        <p class="text-sm pb-4">Annual subscription</p>
                    </div>
                    <div class="text-center border leading-10 sm:block">
                        <p class="text-lg font-semibold my-4">$56/month</p>
                        <p class="font-semibold text-md">Billed as $672/year</p>
                        <p class="text-sm pb-4">Annual subscription</p>
                    </div>
                    <div class="text-center border leading-10 sm:block">
                        <p class="text-lg font-semibold my-4">$78/month</p>
                        <p class="font-semibold text-md">billed as $936/year</p>
                        <p class="text-sm pb-4">Annual subscription</p>
                    </div>
                    <div class=" border-b text-lg flex text-center pt-2 cursor-pointer"  @click="PrintForms = true">
                        <div class="pt-1"><i class="pi pi-angle-down" style="font-size:20px"></i></div>
                        <p class="ml-3">Print Forms</p> 
                    </div> 
                    <div class=" border">
                        <div class="text-green-600  m-auto text-center"   >
                        <i class="pi pi-check" style="font-size: 15px"></i>
                    </div>
                     
                    </div>
                    <div class="border">
                        <div class="text-green-600  m-auto text-center"   >
                    <i class="pi pi-check" style="font-size: 15px"></i>
                    </div>
                     
                    </div>
                     <div class="border">
                        <div class="text-green-600  m-auto text-center"   >
                    <i class="pi pi-check" style="font-size: 15px"></i>
                    </div>
                     
                    </div>
                    <div class=" border-b text-lg flex text-center pt-2 cursor-pointer" @click="Payroll = true">
                        <div class="pt-1"><i class="pi pi-angle-down" style="font-size:20px"></i></div>
                        <p class="ml-3">Payroll Management</p>
                    </div>
                    <div class=" border">
                        <div class="text-green-600  m-auto text-center"   >
                        <i class="pi pi-check" style="font-size: 15px"></i>
                    </div>
                     
                    </div>
                    <div class="border">
                        <div class="text-green-600  m-auto text-center"   >
                    <i class="pi pi-check" style="font-size: 15px"></i>
                    </div>
                     
                    </div>
                     <div class="border">
                        <div class="text-green-600  m-auto text-center"   >
                    <i class="pi pi-check" style="font-size: 15px"></i>
                    </div>
                     
                    </div>
                    <div class=" border-b text-lg flex text-center pt-2 cursor-pointer" @click="MonthlyTax = true">
                        <div class="pt-1"><i class="pi pi-angle-down" style="font-size:20px"></i></div>
                        <p class="ml-3">Monthly Tax</p>
                    </div>
                    <div class=" border">
                        <div class="text-green-600  m-auto text-center"   >
                        <i class="pi pi-check" style="font-size: 15px"></i>
                    </div>
                     
                    </div>
                    <div class="border">
                        <div class="text-green-600  m-auto text-center"   >
                    <i class="pi pi-check" style="font-size: 15px"></i>
                    </div>
                     
                    </div>
                     <div class="border">
                        <div class="text-green-600  m-auto text-center"   >
                    <i class="pi pi-check" style="font-size: 15px"></i>
                    </div>
                     
                    </div>
                    <div class=" border-b text-lg flex text-center pt-2 cursor-pointer" @click="CustomReport = true">
                        <div class="pt-1"><i class="pi pi-angle-down" style="font-size:20px"></i></div>
                        <p class="ml-3">Custom Report</p>
                    </div>
                    <div class=" border">
                        <div class="text-green-600  m-auto text-center"   >
                        <i class="pi pi-check" style="font-size: 15px"></i>
                    </div>
                     
                    </div>
                    <div class="border">
                        <div class="text-green-600  m-auto text-center"   >
                    <i class="pi pi-check" style="font-size: 15px"></i>
                    </div>
                     
                    </div>
                     <div class="border">
                        <div class="text-green-600  m-auto text-center"   >
                    <i class="pi pi-check" style="font-size: 15px"></i>
                    </div>
                     
                    </div>
                    <div class=" border-b text-lg flex text-center pt-2 cursor-pointer" @click="UserManagement = true">
                        <div class="pt-1"><i class="pi pi-angle-down" style="font-size:20px"></i></div>
                        <p class="ml-3">User Management</p>
                    </div>
                    <div class=" border">
                        <div class="text-green-600  m-auto text-center"   >
                        <i class="pi pi-check" style="font-size: 15px"></i>
                    </div>
                     
                    </div>
                    <div class="border">
                        <div class="text-green-600  m-auto text-center"   >
                    <i class="pi pi-check" style="font-size: 15px"></i>
                    </div>
                     
                    </div>
                     <div class="border">
                        <div class="text-green-600  m-auto text-center"   >
                    <i class="pi pi-check" style="font-size: 15px"></i>
                    </div>
                     
                    </div>
                    <div class=" border-b text-lg pt-2">System Demo</div>
                    <div class=" border">
                        <div class="text-green-600  m-auto text-center"   >
                        <i class="pi pi-check" style="font-size: 15px"></i>
                    </div>
                     
                    </div>
                    <div class="border">
                        <div class="text-green-600  m-auto text-center"   >
                    <i class="pi pi-check" style="font-size: 15px"></i>
                    </div>
                     
                    </div>
                     <div class="border">
                        <div class="text-green-600  m-auto text-center"   >
                    <i class="pi pi-check" style="font-size: 15px"></i>
                    </div>
                     
                    </div>
                    <div class=" border-b text-lg pt-2">User Manual</div>
                    <div class=" border">
                        <div class="text-green-600  m-auto text-center"   >
                        <i class="pi pi-check" style="font-size: 15px"></i>
                    </div>
                     
                    </div>
                    <div class="border">
                        <div class="text-green-600  m-auto text-center"   >
                    <i class="pi pi-check" style="font-size: 15px"></i>
                    </div>
                     
                    </div>
                     <div class="border">
                        <div class="text-green-600  m-auto text-center"   >
                    <i class="pi pi-check" style="font-size: 15px"></i>
                    </div>
                     
                    </div>
                    <div class=" border-b text-lg pt-2">Video Guide</div>
                    <div class=" border">
                        <div class="text-green-600  m-auto text-center"   >
                        <i class="pi pi-check" style="font-size: 15px"></i>
                    </div>
                     
                    </div>
                    <div class="border">
                        <div class="text-green-600  m-auto text-center"   >
                    <i class="pi pi-check" style="font-size: 15px"></i>
                    </div>
                     
                    </div>
                     <div class="border">
                        <div class="text-green-600  m-auto text-center"   >
                    <i class="pi pi-check" style="font-size: 15px"></i>
                    </div>
                     
                    </div>
                    <div class=" border-b text-lg pt-2">Orientation</div>
                    <div class=" border">
                        <div class="text-green-600  m-auto text-center"   >
                        <i class="pi pi-check" style="font-size: 15px"></i>
                    </div>
                     
                    </div>
                    <div class="border">
                        <div class="text-green-600  m-auto text-center"   >
                    <i class="pi pi-check" style="font-size: 15px"></i>
                    </div>
                     
                    </div>
                     <div class="border">
                        <div class="text-green-600  m-auto text-center"   >
                    <i class="pi pi-check" style="font-size: 15px"></i>
                    </div>
                     
                    </div>
                    <div class=" border-b text-lg pt-2">Lifetime Support</div>
                    <div class=" border">
                        <div class="text-green-600  m-auto text-center"   >
                        <i class="pi pi-check" style="font-size: 15px"></i>
                    </div>
                     
                    </div>
                    <div class="border">
                        <div class="text-green-600  m-auto text-center"   >
                    <i class="pi pi-check" style="font-size: 15px"></i>
                    </div>
                     
                    </div>
                     <div class="border">
                        <div class="text-green-600  m-auto text-center"   >
                    <i class="pi pi-check" style="font-size: 15px"></i>
                    </div>
                     
                    </div>
                    <div class=" border-b text-lg pt-2">User Package</div>
                    <div class=" border">
                       <p class="font-semibold text-center text-xl">1 User</p>
                    </div>
                    <div class=" border">
                       <p class="font-semibold text-center text-xl">2 Users</p>
                    </div>
                     <div class=" border">
                       <p class="font-semibold text-center text-xl">3 Users</p>
                    </div>
                    <div class="grid col-span-1 sm:none"></div>
                    <div class="text-center border leading-10 sm:block">
                        <router-link to="/contact"><button class="border rounded-full text-white bg-cyan-600 w-40 h-12 my-6 text-center pt-0 text-lg font-semibold hover:bg-teal-700 hover:text-white" type="button">BUY NOW</button></router-link>
                    </div>
                    <div class="text-center border leading-10 sm:block">
                       <router-link to="/contact"><button class="border rounded-full text-white bg-cyan-600 w-40 h-12 my-6 text-center pt-0 text-lg font-semibold hover:bg-teal-700 hover:text-white" type="button">BUY NOW</button></router-link>
                    </div>
                    <div class="text-center border leading-10 sm:block">
                        <router-link to="/contact"><button class="border rounded-full text-white bg-cyan-600 w-40 h-12 my-6 text-center pt-0 text-lg font-semibold hover:bg-teal-700 hover:text-white" type="button">BUY NOW</button></router-link>
                    </div>
                    
                </div>
              </div>
            </main>
          
           <Sidebar
    :visible="PrintForms"
    :baseZIndex="10000" 
    position="bottom"
    class="p-sidebar-lg"
  >
    <div class="wrapper">
      <div class="wrapper pb-4 text-2xl font-bold">Print Forms</div>
      <div class="font-bold pb-4"
        >Sales and Purchase forms can be customized to the desire layout.</div
      >
      <div>
        FaceAzure retrieves and displays lists from your current QuickBooks
        company file, including but not limited to Customer List, Vendor List,
        Inventory List, and Chart of Accounts. With these lists pulled into
        FaceAzure, you can add/edit Khmer font for names and descriptions for
        each item, add addresses where applicable. These Khmer font values
        eventually appear on your printed invoices, forms, and reports as
        required in the Cambodian business environment.
      </div>
      <div class="py-4">
        <li>Translate Lists in QuickBooks from English to Khmer</li>
        <li>Print batch forms</li>
        <li>Convert forms to PDF</li>
        <li>Apply GDT exchange rate</li>
        <li>Apply NBC NBC exchange rate</li>
        <li>Customize forms </li>
      </div>
    </div>
  </Sidebar>

            
 
  <!-- Payroll Management -->

  <Sidebar
    :visible="Payroll"
    :baseZIndex="10000"
    position="bottom"
    class="p-sidebar-lg"
  >
    <div class="wrapper">
      <div class="wrapper pb-4 text-2xl font-bold">Payroll Management</div>
      <div class="font-bold pb-4"
        >Sales and Purchase forms can be customized to the desire layout.</div
      >
      <div>
        FaceAzure retrieves and displays lists from your current QuickBooks
        company file, including but not limited to Customer List, Vendor List,
        Inventory List, and Chart of Accounts. With these lists pulled into
        FaceAzure, you can add/edit Khmer font for names and descriptions for
        each item, add addresses where applicable. These Khmer font values
        eventually appear on your printed invoices, forms, and reports as
        required in the Cambodian business environment.
      </div>
      <div class="py-4">
        <li>Translate Lists in QuickBooks from English to Khmer</li>
        <li>Print batch forms</li>
        <li>Convert forms to PDF</li>
        <li>Apply GDT exchange rate</li>
        <li>Apply NBC NBC exchange rate</li>
        <li>Customize forms </li>
      </div>
    </div>
  </Sidebar>

  <!-- Monthly Tax Generation -->

  <Sidebar
    :visible="MonthlyTax"
    :baseZIndex="10000"
    position="bottom"
    class="p-sidebar-lg"
  >
    <div class="wrapper">
      <div class="wrapper pb-4 text-2xl font-bold">Monthly Tax Generation</div>
      <div class="font-bold pb-4"
        >Sales and Purchase forms can be customized to the desire layout.</div
      >
      <div>
        FaceAzure retrieves and displays lists from your current QuickBooks
        company file, including but not limited to Customer List, Vendor List,
        Inventory List, and Chart of Accounts. With these lists pulled into
        FaceAzure, you can add/edit Khmer font for names and descriptions for
        each item, add addresses where applicable. These Khmer font values
        eventually appear on your printed invoices, forms, and reports as
        required in the Cambodian business environment.
      </div>
      <div class="py-4">
        <li>Translate Lists in QuickBooks from English to Khmer</li>
        <li>Print batch forms</li>
        <li>Convert forms to PDF</li>
        <li>Apply GDT exchange rate</li>
        <li>Apply NBC NBC exchange rate</li>
        <li>Customize forms </li>
      </div>
    </div>
  </Sidebar>

  <!-- Custom Report -->

  <Sidebar
    :visible="CustomReport"
    :baseZIndex="10000"
    position="bottom"
    class="p-sidebar-lg"
  >
    <div class="wrapper">
      <div class="wrapper pb-4 text-2xl font-bold">Custom Report</div>
      <div class="font-bold pb-4"
        >Sales and Purchase forms can be customized to the desire layout.</div
      >
      <div>
        FaceAzure retrieves and displays lists from your current QuickBooks
        company file, including but not limited to Customer List, Vendor List,
        Inventory List, and Chart of Accounts. With these lists pulled into
        FaceAzure, you can add/edit Khmer font for names and descriptions for
        each item, add addresses where applicable. These Khmer font values
        eventually appear on your printed invoices, forms, and reports as
        required in the Cambodian business environment.
      </div>
      <div class="py-4">
        <li>Translate Lists in QuickBooks from English to Khmer</li>
        <li>Print batch forms</li>
        <li>Convert forms to PDF</li>
        <li>Apply GDT exchange rate</li>
        <li>Apply NBC NBC exchange rate</li>
        <li>Customize forms </li>
      </div>
    </div>
  </Sidebar>

  <!-- User Management -->

  <Sidebar
    :visible="UserManagement"
    :baseZIndex="10000"
    position="bottom"
    class="p-sidebar-lg"
  >
    <div class="wrapper">
      <div class="wrapper pb-4 text-2xl font-bold">User Management</div>
      <div class="font-bold pb-4"
        >Sales and Purchase forms can be customized to the desire layout.</div
      >
      <div>
        FaceAzure retrieves and displays lists from your current QuickBooks
        company file, including but not limited to Customer List, Vendor List,
        Inventory List, and Chart of Accounts. With these lists pulled into
        FaceAzure, you can add/edit Khmer font for names and descriptions for
        each item, add addresses where applicable. These Khmer font values
        eventually appear on your printed invoices, forms, and reports as
        required in the Cambodian business environment.
      </div>
      <div class="py-4">
        <li>Translate Lists in QuickBooks from English to Khmer</li>
        <li>Print batch forms</li>
        <li>Convert forms to PDF</li>
        <li>Apply GDT exchange rate</li>
        <li>Apply NBC NBC exchange rate</li>
        <li>Customize forms </li>
      </div>
    </div>
  </Sidebar>
    </div> 
</template>
<script>
export default {
     data() {
    return {
      PrintForms: false,
      Payroll: false,
      MonthlyTax: false,
      CustomReport: false,
      UserManagement: false,
    };
  },
}
</script>

<style scoped>

</style>