<template>
  <div class="services">
      <Navbar />
       <div class="track__heading">
      <div class="container">
       <div class="row">
         <div class="col-md-2"></div>
         <div class="col-md-8 text-center">
           <h6>Competitive advantages to some of the largest companies allover the world.</h6>
           <h1>Reliable & Express Logistic Solutions Saves Your Time!</h1>
         </div>
         <div class="col-md-2"></div>
       </div>
      </div>
    </div>
       <div class="container pt-5">
          <div class="row top__text">
              <div class="col-md-6">
                  <h6>Real Solutions, Real Fast!</h6>
                  <h2>Delivering The Best Global Logistics Solutions.</h2>
              </div>
              <div class="col-md-1"></div>
              <div class="col-md-5">
                 <h5> Our global logistics expertise, advanced supply chain technology & customized logistics solutions will help you analyze, develop and implement successful supply chain management strategies.</h5>
              </div>
          </div>
          <div class="card__wrapper">
              <div class="card__content">
                    <img src="../assets/images/plane.svg" class="icons" alt="">
                  <h3>Air Freight</h3>
                  <p>We can arrange and provides with the comprehensive service in the sphere of urgent, valuable, fragile or any cargoes conscientious accelerated delivery by air.</p>
              </div>
              <div class="card__content">
                    <img src="../assets/images/ship.svg" class="icons" alt="">
                  <h3>Ocean Freight</h3>
                  <p>We provides with the main types of basic conditions International sea transportation is implemented by our partners’ vessels, the largest ocean carriers.</p>
              </div>
              <div class="card__content">
                <img src="../assets/images/bus.svg" class="icons" alt="">
                  <h3>Road Freight</h3>
                  <p>We provides with the main types of basic conditions International sea transportation is implemented by our partners’ vessels, the largest ocean carriers.</p>
              </div>
              <div class="card__content">
                    <img src="../assets/images/plane.svg" class="icons" alt="">
                  <h3>Warehousing</h3>
                  <p>We provides with the main types of basic conditions International sea transportation is implemented by our partners’ vessels, the largest ocean carriers.</p>
              </div>
              <div class="card__content">
                    <img src="../assets/images/ship.svg" class="icons" alt="">
                  <h3>Supply Chain</h3>
                  <p>We provides with the main types of basic conditions International sea transportation is implemented by our partners’ vessels, the largest ocean carriers.</p>
              </div>
              <div class="card__content">
                <img src="../assets/images/bus.svg" class="icons" alt="">
                  <h3>Packaging</h3>
                  <p>We provides with the main types of basic conditions International sea transportation is implemented by our partners’ vessels, the largest ocean carriers.</p>
              </div>
          </div>
      </div>
      <News />
      <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import News from '@/components/News'
import Footer from '@/components/Footer'
export default {
    components:{
        Navbar,
        News,
        Footer
    }
}
</script>

<style lang="scss" scoped>
  .track__heading {
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url('../assets/images/worker5.jpg');
    background-size: cover;
    background-position: center;
    width: 100%;
    padding: 14rem 0;
    font-family: 'Montserrat';
    h1 {
      color: #fff;
      font-weight: bold;
    }
    h6 {
      font-size: 0.85rem;
      opacity: 0.8;
      color: #fff;
    }
  }
     .top__text{
         padding-top: 1rem;
        h6{
            color: #FF5E14;
        }
        h2{
            color: #121C45;
            font-weight: bold;
            font-size: 2.2rem;
        }
        h5{
            color: #627081;
            font-size: .9rem;
            line-height: 1.8;
            font-weight: 400;
            opacity: .8;
            padding-top: 2rem;
        }
    }
    .card__wrapper{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 20px;
        margin-top: 2rem;
        margin-bottom: 3rem;
        .card__content{
            box-shadow: 0 5px 83px 0 rgba(40,40,40,.08);
            padding: 4rem 2rem;
            border-radius: 3px;
            text-align: center;
            // background: #05103B;
            // color: #fff;
            p{
                font-size: .84rem;
                line-height: 2;
                opacity: .88;
                padding-top: 1rem;
                color: #333;
            }
            h3{
                font-weight: bold;
                font-size: 1.3rem;
                padding-top: 1.3rem;
                color: #05103B;
            }
            .icons{
                max-width: 60px;
                height: auto;
            }
        }
    }
</style>