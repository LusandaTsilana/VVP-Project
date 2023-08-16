<template>
    
    <nav class="fixed md:bg-customColor shadow w-full">
        <div class = "text-black-300 w-3/4 md:flex justify-between py-3.5 px-10 
            items-center ">
    
            <div class = "flex items-center cursor-pointer" href = "Home.vue">
                <span class="mr-1">
                    <img class="w-12 2xl:w-28" src="/src/assets/images/lusanda (1).png" alt="logo">
                </span>

            </div>


            
            <span @click="MenuOpen()" class = "absolute md:hidden right-7 top-1.5 cursor-pointer text-lg">
            <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left', 'rounded-md', 'hover:bg-customColor','hover:shadow']"></i>
            </span>

            <ul class = "font-semibold md:flex md:items-center md:px-0 px-10 md:pb-0 pb-1 md:static absolute bg-customColor shadow md:shadow-none w-full md:w-auto top-35 duration-500 ease-in md:mt-0 mt-4" :class="[open ? 'right-0' :'right-[-100%]']">
            <li class="md:mx-4 md:my-0 my-8 no-underline hover:underline" v-for = "link in Links">
                <a :href = "link.link" class="text-sm 2xl:text-lg" >{{ link.name }}</a>
            </li>
            
            </ul>
    </div>
</nav>


</template>

<script>
import { ref } from '@vue/reactivity';

export default {

    setup(){
        let open = ref(false);
        let Links = [
            {name: "HOME", link : "Home.vue"},
            {name: "ABOUT", link : "About.vue"},
            {name: "WORK", link : "Work.vue"},
            {name: "CONTACT", link : "Contact.vue"},
        ]

        function MenuOpen(){
            open.value = !open.value
        }

        return{Links,open,MenuOpen}
    }

}
</script>