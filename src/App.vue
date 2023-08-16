<template>
    <body class = "bg-white h-screen">

        <header>
            <div>
                <Navbar/>
            </div>

        </header>

        <main class="bg-white h-screen" >

        </main>

        <footer>
            <div>
                <FooterBand/>
            </div>
        </footer>

    </body>
    

    
        
</template>

<script>
import Navbar from "@/views/Navbar.vue";
import FooterBand from "@/views/FooterBand.vue";

export default {
    name: "App",
    components: {
        Navbar,
        FooterBand,
    },
};
</script>