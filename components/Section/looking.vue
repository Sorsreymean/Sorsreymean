<template>
     <header class="bg-cyan-600">
        <div class=" md:grid grid-cols-2 w-full sm:text-2xl md:text-4xl text-white font-semibold pt-28 pb-16 text-center">
            <div class="md:py-32 xl:mx-24 2xl:ml-56 xl:ml-32 lg:ml-16 sm:ml-10" id="txt">Looking for product specific help? Leave us a message</div>
            <img src="/Image/contact_us.18ec2b2c.jpg" alt="" id="img1" class=" m-auto  sm:mt-10 2xl:ml-40 xl:ml-28 lg:ml-4" />
        </div> 
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
#img1{
    width:500px;
    height:350px;
}
@media (max-width:1100px) {
    #img1{
        width: 400px;
        height: 300px;
    }   
}
@media (max-width:900px) {
    #img1{
        width: 350px;
        height: 300px;
    }   
}
@media (max-width:750px) {
    #img1{
        width: 500px;
        height: 400px;
    }   
}
@media (max-width:630px) {
    #txt{
        font-size: 20px;
        padding-bottom: 20px;
    }
    #img1{
         width:500px;
        height:350px;
       margin: auto;
    }
}
@media (max-width:500px) {
    #img1{
         width:350px;
        height:300px;
    }
    #txt{
        font-size: 20px;
        padding-bottom: 20px;
        margin: 10px;
    }
}
@media (max-width:400px) {
    #img1{
         width:250px;
        height:200px;
    }
}
</style>