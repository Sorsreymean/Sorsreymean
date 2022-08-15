<template>
  <div class="2xl:mx-48 xl:mx-40 lg:mx-32 md:mx-20 sm:mx-10 my-16">
    <h2 class="md:text-xl sm:text-lg text-center font-semibold">Submit our inquires here about FaceAzure</h2>
    <form class="md:grid gap-4 grid-cols-2 sm:grid grid-cols-2  mt-10">
        <input type="text" id="input" placeholder="Company name" class="border rounded p-2 border-gray-300 w-full">
        <input type="text" id="input" placeholder="Your full name" class="border rounded p-2 border-gray-300 w-full">
        <input type="text" id="input" placeholder="Email address" class="border rounded p-2 border-gray-300 w-full">
        <input type="text" id="input" placeholder="Phone number" class="border rounded p-2 border-gray-300 w-full">
        <div class=" grid col-span-2 w-full select1" id="accordion-collapse" data-accordion="collapse">
            <h2 id="accordion-collapse-heading-1">
                <button type="button" class="flex items-center justify-between w-full p-2 font-medium text-left text-gray-500 border border-gray-200 rounded" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                <span>Select your inpuiry</span>
                <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                <ul class="overflow-y-auto pb-3 h-48 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchButton">
                <li>
                <div class="flex items-center p-2 pb-4 rounded bg-gray-100 dark:hover:bg-gray-600">
                <input id="checkbox-item-11" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                <label for="checkbox-item-11" class="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300"></label>
                <i class="pi pi-times"></i>
                </div>
                </li>
            <li>
                <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <input id="checkbox-item-11" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                <label for="checkbox-item-11" class="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">FaceAzure Online</label>
                </div>
            </li>
            <li>
                <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input checked="" id="checkbox-item-12" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                    <label for="checkbox-item-12" class="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">FaceAzure Desktop</label>
                </div>
            </li>
            <li>
                <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <input id="checkbox-item-13" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                <label for="checkbox-item-13" class="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">Business Consulting Service</label>
                </div>
            </li>
            <li>
                <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <input id="checkbox-item-14" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                <label for="checkbox-item-14" class="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">Cyber Security</label>
                </div>
            </li>
            <li>
                <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <input id="checkbox-item-15" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                <label for="checkbox-item-15" class="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">Install and configuration service</label>
                </div>
            </li>
            <li>
                <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <input id="checkbox-item-16" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                <label for="checkbox-item-16" class="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">QuickBooks Desktop</label>
                </div>
            </li>
                    <li>
                <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <input id="checkbox-item-17" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                <label for="checkbox-item-17" class="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">QuickBooks Online</label>
                </div>
            </li>
                  <li>
                <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <input id="checkbox-item-17" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                <label for="checkbox-item-17" class="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">QuickBooks Point of Sale</label>
                </div>
            </li>
                   <li>
                <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <input id="checkbox-item-17" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                <label for="checkbox-item-17" class="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">Troubleshooting Service</label>
                </div>
            </li>
                    <li>
                <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <input id="checkbox-item-17" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                <label for="checkbox-item-17" class="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">Training Service</label>
                </div>
            </li>
                    <li>
                <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <input id="checkbox-item-17" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                <label for="checkbox-item-17" class="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">Working From Home Solution</label>
                </div>
            </li>
            </ul>
            </div>
        </div>
        <textarea name="message" class="grid col-span-2 border rounded border-gray-300 w-full" id="input" placeholder="Your message" cols="30" rows="10"></textarea>
    </form>
    <button type="button" id="email" class="p-2 border rounded-full bg-sky-400 mt-8 w-28 text-white">Send Email</button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@media (max-width: 640px) {
    #input{
        width:550px;
        margin-left: 50px;
        margin-top: 10px;
    }
    #accordion-collapse{
        width: 550px;
        margin-left: 50px;
        margin-top: 10px;
    }
    #email{
        margin-left:50px ;
    }
}
@media (max-width: 600px) {
    #input{
        width:530px;
        margin-left: 20px;
    }
    #accordion-collapse{
        width: 530px;
        margin-left: 20px;
    }
    #eamil{
        margin-left:20px ;
    }
}
@media (max-width: 550px) {
    #input{
        width:500px;
        margin-left: 10px;
    }
    #accordion-collapse{
        width: 500px;
        margin-left: 10px;
    }
}
@media (max-width: 520px) {
    #input{
        width:400px;
        margin-left: 50px;
    }
    #accordion-collapse{
        width: 400px;
        margin-left: 50px;
    }
    #email{
        margin-left: 50px;
    }
}
@media (max-width: 450px) {
    #input{
        width:300px;
        margin-left: 50px;
    }
    #accordion-collapse{
        width: 300px;
        margin-left: 50px;
    }
    #email{
        margin-left:50px ;
    }
}
@media (max-width: 400px) {
    #input{
        width:300px;
        margin-left: 30px;
    }
    #accordion-collapse{
        width: 300px;
        margin-left: 30px;
    }
    #email{
        margin-left:30px ;
    }
}
@media (max-width: 300px) {
    #input{
        width:250px;
        margin-left: 15px;
    }
    #accordion-collapse{
        width: 250px;
        margin-left: 15px;
    }
    #email{
        margin-left: 15px;
    }
}

</style>