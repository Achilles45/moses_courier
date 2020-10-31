<template>
  <div class="intro">
      <div class="container">
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
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scss>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
.intro{
    padding-top: 8rem;
    padding-bottom: 6rem;
    .top__text{
        h6{
            color: #FF5E14;
        }
        h2{
            color: #121C45;
            font-weight: bold;
            font-size: 2.2rem;
        }
        h5{
            color:#74788d;
            font-size: .9rem;
            line-height: 1.8;
            font-weight: 400;
            opacity: .8;
            padding-top: 2rem;
        }
    }
    .card__wrapper{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-gap: 20px;
        margin-top: 2rem;
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
}
</style>