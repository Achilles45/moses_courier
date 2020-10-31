<template>
  <div class="partners d-none d-md-block">
      <div class="container">
          <div class="wrapper">
              <div class="wrapper__content">
                  <img src="../assets/images/partner-2 (1).png" class="img" alt="">
              </div>
               <div class="wrapper__content">
                  <img src="../assets/images/partner-2.png" class="img" alt="">
              </div>
               <div class="wrapper__content">
                  <img src="../assets/images/partner-3.png" class="img" alt="">
              </div>
               <div class="wrapper__content">
                  <img src="../assets/images/partner-4.png" class="img" alt="">
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped> 
.partners{
    padding: 1rem 0;
    .wrapper{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-gap: 20px;
        padding: 1rem 0;
    }
}
//MEDIA QUERIES
@media only screen and (max-width: 600px){
    .wrapper{
        display: flex;
        flex-direction: row;
        .img{
            max-width: 100px;
            height: auto;
        }
    }
}
</style>