<template>
  <div class="why">
      <div class="container">
       <div class="row heading">
           <div class="col-md-3"></div>
           <div class="col-md-6 text-center">
               <h6>Our Features</h6>
               <h1>Why Choose Us!</h1>
               <p>We continue to pursue that same vision in today's complex, uncertain world, working every day to earn our customers’ trust!</p>
           </div>
           <div class="col-md-3"></div>
       </div>
       <div class="card__wrapper">
           <div class="card__content">
               <img src="../assets/images/cubes.svg" class="icon" alt="">
               <h5>Personalised Solutions</h5>
               <p>We continue to pursue that same visions in today's complex solutions. Our dedicated team continues to deliver everyday!</p>
           </div>
           <div class="card__content">
               <img src="../assets/images/time.svg" class="icon" alt="">
               <h5>Real-time Tracking</h5>
               <p>Ensures our customers can track their packages from any device any day and anytime to get real time updates.</p>
           </div>
           <div class="card__content">
               <img src="../assets/images/speed.svg" class="icon" alt="">
               <h5>Fast & Efficient Delivery</h5>
               <p>We enhance our operations to releive you of your worries and concerns about handling your deliveries.</p>
           </div>
           <div class="card__content">
               <img src="../assets/images/pay.svg" class="icon" alt="">
               <h5>Easy Payment Methods</h5>
               <p>Our customers can easily pay for their logistics needs. We support many payment processors.</p>
           </div>
       </div>
       <div class="row">
           <div class="col-12 text-center">
               <p class="bottom">Working every day to earn our customers’ trust. <router-link to="/contact">Contact Us!</router-link></p>
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
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
.why{
    background: linear-gradient(rgba(5, 16, 59, 1), rgba(5, 16, 59, 1)), url('../assets/images/map.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 4rem 0;
    color: #fff;
    font-family: 'Poppins';
    .heading{
        h6{
            color: #FF5E14;
            font-weight: bold;
            padding-top: 1rem;
        }
        h1{
            font-weight: bold;
        }
        p{
            font-size: .86rem;
            opacity: .6;
            padding-top: .7rem;
            line-height: 1.8;
        }
    }
    .card__wrapper{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-gap: 20px;
        margin-top: 2rem;
        padding-bottom: 3rem;
         .card__content{
            border: 1px solid rgba(255,255,255,.1);
            padding: 2rem 2rem;
            border-radius: 3px;
            // background: #05103B;
            // color: #fff;
            p{
                font-size: .8rem;
                line-height: 2;
                opacity: .7;
                padding-top: 1rem;
                color: #fff;
            }
            h5{
                font-weight: normal;
                font-size: 1.1rem;
                padding-top: 1.3rem;
                color: #fff;
            }
            .icon{
                max-width: 40px;
                height: auto;
            }
         }
    }
    .bottom{
        font-size: .85rem;
    }
    a{
        color: #FF5E14;
        font-weight: bold;
    }
}
</style>