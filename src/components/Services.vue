<template>
  <div class="services">
     <div class="row">
          <div class="wrapper__content d-none d-lg-block">
             <h3>What We Achieved!</h3>
             <p>Fulfill our dedicated promise to deliver innovative & dynamic solutions to our customers to fit their needs.</p>
             <h6>Warehousing</h6>
             <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 95%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
             </div>

             <h6>Air Freight</h6>
             <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 88%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
             </div>
            <h6>Ocean Freight</h6>
             <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 99%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>

            <h6>Road Freight</h6>
             <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
             </div>
            <h6>Supply Chain</h6>
             <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 70%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
         </div>
          </div>
         <div class="col-md-6 left pt-5">
             <h6>Affordable Price, Certified Forwarders</h6>
             <h1>Safe, Reliable & Express Logistic Solutions That Saves Your Time!</h1>
             <h5>We pride ourselves on providing the best transport and shipping services available allover the world. Our skilled personnel, utilising the latest communications, tracking and processing software, combined with decades of experience.</h5>
             <router-link to="/contact">Reach out to us</router-link>
         </div>
         <div class="col-md-6 right">
             
         </div>
     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
.services{
    // padding: 1rem 0;
    // font-family: 'Poppins';
    position: relative;
      .wrapper__content{
            position: absolute;
            background: #FFFFFF;
            left: 43%;
            z-index: 10000;
            top: 18%;
            right: 10%;
            border-radius: 4px;
            padding: 3rem;
            h3{
                font-weight: bold;
                color: #121C45;
            }
            p{
                color: #627081;
                font-family: 'Poppins';
                padding-top: .5rem;
                font-size: .9rem;
                opacity: .8;
                line-height: 1.7;
            }
            h6{
                color: #121C45;
                font-family: 'Poppins';
                font-weight: bold;
                font-size: .95rem;
                padding-top: 1rem;
            }
            .progress{
                height: .5rem;
            }
            .progress-bar{
                background:#FF5E14;
                height: .5rem;
            }
        }
    .left{
        padding: 2rem 6rem;
        background: #F9F9F9;
        h6{
            font-weight: normal;
            color: #FF5E14;
            font-family: 'Poppins' !important;
            font-weight: bold;
            padding-top: 2rem;
        }
         h1{
            color: #121C45;
            font-weight: bold;
            font-size: 2.2rem;
            padding-top: .8rem;
        }
        h5{
            // font-family: 'Poppins' !important;
            padding-top: 2rem;
            color: #627081;
            font-size: 1rem;
            line-height: 2;
            padding-bottom: 3rem;
        }
        a{
            background: #FF5E14;
            color: #fff;
            padding: 1.3rem 4rem;
            text-decoration: none;
            border-radius: 4px;
            // font-weight: bold;
            font-family: 'Poppins';
        }
    }
    .right{
        background: url('../assets/images/worker2.jpg');
        background-position: center;
        background-size: cover;
        height: 100vh;
        // position: relative;
    }
}
</style>