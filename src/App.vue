<script setup>
import Navbar from "@/views/Navbar.vue";
import FooterBand from "@/views/FooterBand.vue";
</script>

<template>
    <body class = "bg-white">

        <header class="">
            <div id="app">
                <Navbar/>
            </div>

        </header>

        <main class="bg-white flex-grow px-4 py-32" >
            <div>
                <Home/>
            </div>
        </main>
            
        <footer class="py-4">
            <div>
                <FooterBand/>
            </div>
        </footer>

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