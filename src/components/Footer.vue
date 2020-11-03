<template>
  <footer>
      <div class="container">
          <div class="row">
              <div class="col-md-4 text">
                  <img src="../assets/images/brand.jpg" class="logo" alt="">
                  <p>Our global Optimecs expertise, advanced supply chain technology & customized Optimecs solutions will help you develop and implement successful supply.</p>
                  <h6><strong>Email Address</strong>: support@expresscourierservice.net</h6>
                  <!-- <h6><strong>Phone Number</strong>: +263-3930-394</h6> -->
              </div>
              <div class="col-md-1"></div> 
              <div class="col-md-7">
                  <div class="row">
                      <div class="col-md-4">
                          <h5>Who We Are</h5>
                          <ul>
                              <li><router-link to="">About Us</router-link></li>
                              <li><router-link to="">Contact Us</router-link></li>
                              <li><router-link to="">Careers</router-link></li>
                          </ul>
                      </div>
                      <div class="col-md-4">
                          <h5>What We Do</h5>
                          <ul>
                              <li><router-link to="">Warehousing</router-link></li>
                              <li><router-link to="">Air Freight</router-link></li>
                              <li><router-link to="">Ocean Freight</router-link></li>
                              <li><router-link to="">Road Freight</router-link></li>
                              <li><router-link to="">Supply Chain</router-link></li>
                              <li><router-link to="">Packaging</router-link></li>
                          </ul>
                      </div>
                       <div class="col-md-4">
                          <h5>Who We Serve</h5>
                          <ul>
                              <li><router-link to="">Retail & Consumer</router-link></li>
                              <li><router-link to="">Sciences & Healthcare</router-link></li>
                              <li><router-link to="">Industrial & Chemical</router-link></li>
                              <li><router-link to="">Power Generation</router-link></li>
                              <li><router-link to="">Food & Beverage</router-link></li>
                              <li><router-link to="">Automobiles</router-link></li>
                          </ul>
                      </div>
                  </div>
              </div>
      </div>
      </div>
      <hr>
      <div class="container">
          <div class="footer__bottom">
             <p> &copy; All rights reserved. 2020. Express Courier Service</p>
          </div>
      </div>
</footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
footer{
    background: #121C45;
    padding: 4rem 0;
    color: #fff;
    .text{
        p{
            padding-top: 2rem;
            font-size: .8rem;
            opacity: .8;
            line-height: 1.7;
            padding-bottom: 1rem;
        }
        h6{
            opacity: .8;
            font-size: .8rem;
        }
    }
    h5{
        padding-top: 1rem;
        padding-bottom: 2rem;
        font-size: .9rem;
    }
    a{
        color: #fff;
        text-decoration: none;
        font-size: .8rem;
        line-height: 2.2;
        opacity: .7;
    }
    .footer__bottom p{
        font-size: .8rem;
        opacity: .8;
        
    }
}
</style>