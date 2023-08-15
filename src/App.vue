<template>
    <body class = "bg-white h-screen">

        <header>
            <div>
                <Navbar/>
            </div>

        </header>

        <!--<footer>
            <div>
                <Footer/>
            </div>
        </footer>-->

    </body>
    

    
        
</template>

<script>
import Navbar from "@/views/Navbar.vue";
//import Footer from "@views/Footer.vue";

export default {
    name: "App",
    components: {
        Navbar,
    },
};
</script>