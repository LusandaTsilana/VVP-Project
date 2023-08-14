<template>
    

    <div class = "md:bg-customColor shadow text-black-300 py-3.5 px-6  md:flex justify-between 
    items-center">
    
        <div class = "flex items-center cursor-pointer" href = "#">
            <span class="mr-1">
                <img src="/src/assets/images/lusanda (1).png" alt="logo" width="83.08" height="80">
            </span>

        </div>

        <span @click="MenuOpen()" class = "absolute md:hidden right-7 top-1.5 cursor-pointer text-4xl">
            <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
        </span>

        <ul class = "font-semibold md:flex md:items-center gap-[1vw] md:px-0 px-10 md:pb-0 pb-2 md:static absolute bg-customColor sm:shadow md:shadow-none md:w-auto w-full duration-700 ease-in md:mt-0 mt-4" :class="[open ? 'left-0' :'left-[-100%]']">
            <li class="md:mx-4 md:my-0 my-8 no-underline hover:underline" v-for = "link in Links">
                <a :href = "link.link" class="text-xl" >{{ link.name }}</a>
            </li>
        </ul>
    </div>

</template>

<script>
import { ref } from 'vue';

export default {

    setup(){
        let open = ref(false);
        let Links = [
            {name: "HOME", link : "#"},
            {name: "ABOUT", link : "#"},
            {name: "WORK", link : "#"},
            {name: "CONTACT", link : "#"},
        ]

        function MenuOpen(){
            open.value = !open.value
        }

        return{Links,open,MenuOpen}
    }

}
</script>