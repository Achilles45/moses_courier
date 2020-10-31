<template>
  <div class="app">
      <div class="container">
          <div class="row">
              <div class="col-md-6 pt-5">
                <img src="../assets/images/app.png" class="img-fluid" alt="">
              </div>
              <div class="col-md-6 text">
               <h5>Coming Soon</h5>
               <h1>Mobile Application</h1>
               <p>The development team is currently working hard to make sure we can serve all our customers across all devices and geographies. Our Andriod and IOS Apps are under development to allow our customers access our services without restrictions.</p>
               <hr>
               <div class="box d-flex align-items-center pt-3">
                   <img src="../assets/images/bus1.png" class="img" alt="">
                   <p class="pl-4">End to End Facilitation</p>
               </div>
                <div class="box d-flex align-items-center pt-3">
                   <img src="../assets/images/box.png" class="img" alt="">
                   <p class="pl-4">Real Time Updates & Tracking</p>
               </div>
                <div class="box d-flex align-items-center pt-3">
                   <img src="../assets/images/safe.png" class="img" alt="">
                   <p class="pl-4">Safety, Security, Confidentiality</p>
               </div>
                <div class="box d-flex align-items-center pt-3">
                   <img src="../assets/images/time.png" class="img" alt="">
                   <p class="pl-4">Save Time & Effort</p>
               </div>
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
.app{
    padding: 2rem 0;
    .text{
        padding-top: 2rem;
        h5{
            font-weight: bold;
            color: #FF5E14;
        }
        h1{
            font-weight: bold;
            color: #121C45;
        }
        p{
            color: #627081;
            font-size: .9rem;
            line-height: 1.8;
            padding-top: .5rem;
            // font-family: 'Poppins';
        }
    }
}
</style>