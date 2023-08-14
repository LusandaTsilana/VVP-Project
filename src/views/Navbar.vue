<template>
    

    <div class = "bg-customColor shadow text-black-300 py-3.5 px-6  md:flex justify-between 
    items-center">
    
        <div class = "flex items-center cursor-pointer" href = "#">
            <span class="mr-1">
                <img src="/src/assets/images/lusanda (1).png" alt="logo" width="83.08" height="80">
            </span>

        </div>

        <span class = "absolute md:hidden"></span>

        <ul class = "md:flex md:items-center gap-[1vw] md:px-0 px-3 md:pb-0 pb-10 md:static absolute bg-customColor md:w-auto w-full duration-700 ease-in" :class="[open ? 'left-0' :'left-[-100%]']">
            <li class="md:mx-4 md:my-0 my-6" v-for = "link in Links">
                <a :href = "link.link" class="text-xl" >{{ link.name }}</a>
            </li>
        </ul>
    </div>

</template>

<script>
import { ref } from 'vue';

export default {

    setup(){
        let open = ref(false)
        let Links = [
            {name: "Home", link : "#"},
            {name: "About", link : "#"},
            {name: "Work", link : "#"},
            {name: "Contact", link : "#"},
        ]

        return{Links,open}
    }

}
</script>