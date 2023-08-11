<template>
    
    <div class = "bg-customColor text-black-300 py-3.5 px-6 shadow md:flex justify-between 
    items-center">
    
        <div class = "flex items-center cursor-pointer">
            <span class="text-xl mr-1">
                <img src="/src/assets/images/lusanda (1).png" alt="logo" width="83.08" height="80">
            </span>

        </div>

        <ul class = "md: flex md:items-center">
            <li class="md:mx-4" v-for = "link in Links">
                <a :href = "link.links" class="text-xl" >{{ link.name }}</a>
            </li>

            <!--to prevent hardcoding, we will use a for loop by v binding it to create content-->
            <!--<li class="md:mx-4">
                <a href="#" class="text-xl" >ABOUT</a>
            </li>
            <li class="md:mx-4">
                <a href="#" class="text-xl" >WORK</a>
            </li>
            <li class="md:mx-4">
                <a href="#" class="text-xl" >CONTACT</a>
            </li>--> 
        </ul>
    </div>

</template>

<script>
export default {

    setup(){
        let Links = [
            {name: "HOME", link : "#"},
            {name: "ABOUT", link : "#"},
            {name: "WORK", link : "#"},
            {name: "CONTACT", link : "#"},
        ]

        return{Links}
    }

}
</script>