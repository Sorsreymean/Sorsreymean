import Vue from "vue";
import flowbite from "flowbite";

import PrimeVue from "primevue/config";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import Sidebar from "primevue/sidebar";


Vue.use(flowbite);
Vue.use(PrimeVue, { ripple: true });
Vue.use(ToastService);
Vue.component("Button", Button);
Vue.component("InputText", InputText);
Vue.component("Toast", Toast);
Vue.component("Accordion", Accordion);
Vue.component("AccordionTab", AccordionTab);
Vue.component("Sidebar", Sidebar)
