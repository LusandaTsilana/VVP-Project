<script setup>
import Navbar from "@/views/Navbar.vue";
import FooterBand from "@/views/FooterBand.vue";

</script>

<template>
    <body class = "bg-white">

            <div id="app">
                <Navbar/>
                <router-view />
                <FooterBand/>
            </div>
    </body>
    

    
        
</template>

<script>


export default {
    name: "App",
    views: {
        Navbar,
        FooterBand,
        
    },
};
</script>