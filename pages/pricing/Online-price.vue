<template>
    <div>
        <Chooseplan></Chooseplan>
        <div class="text-center mt-10">
            <div class="inline-flex" role="group">
                <router-link to="/pricing/desktop-1price"><button type="button" class="py-2 px-4 text-md font-medium text-black bg-gray-400 rounded-l-full hover:bg-cyan-900 hover:text-white ">
                    FaceAzure Desktop
                </button>
                </router-link>
                <router-link to="/pricing/Online-price"><button type="button" class="py-2 px-4 text-md font-medium text-white bg-cyan-900 rounded-r-full hover:bg-cyan-900 hover:text-white ">
                    FaceAzure Online
                </button></router-link>
            </div>
        </div>
        <div class="text-center mt-10">
            <p class="text-xl">Check the price for FaceAzure Online</p>
            <p class="text-4xl font-semibold p-4" >Call +855 81 98 23 24 or +855 61 98 23 24</p>
        </div>
    </div>
</template>

<script>
import Chooseplan from '../../components/Section/chooseplan.vue';
export default {
    components: { Chooseplan}
}
</script>

<style scoped>

</style>