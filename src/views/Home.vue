<template>
  <div class="bg-white text-black-300 w-4/5 mx-29 my-6 gap-5 grid grid-cols-2" id="box">
    <div class="w-2/5" id = "Hi-box">
      <div class="xl:text-6xl">Hi there, I am <span class="xl:text-7xl underline font-bold break-after-column">Lusanda</span>
      </div>
      <div class="xl:text-3xl">Junior Web Developer</div>
      
      <div>
        <button class="xl:text-2xl">Contact</button>
        <button class="xl:text-2xl">Resume</button>
      </div>
    
    </div>

    <div class="w-full">
      <img src="/src/assets/images/portrait.jpg" class=" rounded-md">
    </div>
  </div>
</template>

<script>
  import Navbar from "@/views/Navbar.vue";
  import Footer from "@/views/FooterBand.vue";


  export default{
    name: "App",
    components: {
        Navbar,
        Footer,
        
    },

  }
</script>
<style>
</style>