<template>
  <div class="navbar__wrapper container-fluid">
    <div class="container">
      <div
        class="navbar__contents d-flex justify-content-between align-items-center"
      >
        <div class="navbar__logo pt-2">
          <router-link to="/" class="logo">
          <img src="../assets/images/logo2.jpg" class="logo__img" alt="">
          </router-link>
        </div>
        <div class="navbar__links">
          <ul class="d-flex navbar__items justify-content-between pt-3">
           <li><router-link to="/">Home</router-link></li>
           <li><router-link to="/about">About company</router-link></li>
           <li><router-link to="/services">Services</router-link></li>
           <!-- <li><router-link to="/tracking">Track Shipment</router-link></li> -->
           <li><router-link to="/contact">Contact Us</router-link></li>
           <li><router-link to="/request" class="quote__btn">Request a quote</router-link></li>
          </ul>
        </div>
        <div class="navbar__toggler" @click="toggleNav()">
         <i class="fa fa-bars"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   mounted(){
       this.fixNav();
    },
  methods: {
    toggleNav() {
      const navbarToggler = document.querySelector('.navbar__toggler')
      const nav = document.querySelector('.navbar__items')
      navbarToggler.addEventListener('click', () => {
        nav.classList.toggle('show__nav')
      })
    },
    fixNav:function(){
             const nav = document.querySelector('.navbar__wrapper');
            window.onscroll = function(){
                if (window.pageYOffset > 10) {
                    nav.classList.add('fix__nav');
                }else{
                    nav.classList.remove('fix__nav');
                }
            }
        }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
.navbar__wrapper {
  background: #fff;
  // box-shadow: 3px 0px 3px rgba(0, 0, 0, 0.4);
  color: #fff;
  padding: 1rem 0;
  font-family: 'Roboto' !important;
  position: fixed;
  z-index: 100000;
  .logo{
       text-decoration: none !important;
  }
  h5{
    font-weight: bolder;
    color:#000;
  }
  .blue{
    color:blue;
  }
  .red{
    color:red;
  }
  .logo__img {
    max-width: 100px;
    height: auto;
  }
  ul {
    li a {
      text-decoration: none;
      color: #48465b;
      text-transform: uppercase;
      font-size: .88rem;
      margin: 0 0.9rem;
      font-weight: bold;
      font-family: 'Roboto';
      &:hover {
        color: #48465b;
        transition: all ease-in-out 0.5s;
      }
    }
    .quote__btn {
      background: #FF5E14;
      padding: 1rem 2rem;
      border-radius: 4px;
      opacity: 1 !important;
      color: #fff;
      font-weight: normal;
      &:hover {
        color: #fff !important;
        padding: 1rem 3.7rem;
        transition: all ease-in-out 0.5s;
      }
    }
  }
  .navbar__toggler {
    color: #2b2b2b;
    display: none;
  }
}
//MEDIA QUERIES
@media only screen and (max-width: 1000px) {
  .navbar__toggler {
    display: block !important;
    cursor: pointer;
  }
  ul {
    background: #000;
    flex-direction: column;
    position: absolute;
    padding: 23rem 2rem;
    left: 0;
    top: 0%;
    line-height: 4rem;
    display: none !important;
    z-index: 1000;
    li a {
      color: #fff !important;
      line-height: 5rem;
      margin-top: 2rem !important;
    }
  }
  .show__nav {
    display: block !important;
    transition: all ease-in-out 0.5s;
  }
  .fix__nav{
    background: red !important;
    position: fixed !important;
  }
}
</style>
