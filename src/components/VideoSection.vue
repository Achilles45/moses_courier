<template>
  <div class="videosection">
      <div class="row">
          <div class="col-md-6 left">
              <!-- <img src="../assets/images/worker.jpg" alt=""> -->
          </div>
          <div class="col-md-6 right">
              <h1>Flexible Pricing Policy & Decades Of Experience!</h1>
              <h5>We believe that the services, offered by our company, should satisfy the high expectations of our customers. We are dedicated in creating added value for our customers by implementing modern technology in our work. That is why the desire of constant improvement is the driving force behind our transportation business.</h5><br>
              <div class="d-none d-lg-block">
                  <div class="counter d-flex justify-content-between">
                  <div class="parta">
                      <h1>Over 2M</h1>
                      <h6>Clients Worldwide</h6>
                  </div>
                  <div class="partb">
                      <h1>50,000</h1>
                      <h6>Delivered Goods</h6>
                  </div>
                  <div class="partc">
                      <h1>972M</h1>
                      <h6>Miles Driven</h6>
                  </div>
              </div>
              </div>
              <p>Providing the best transport and shipping services currently available allover the world. Our skilled personnel, utilising the latest communications, new tracking and processing software, combined with decades of experience!</p>
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
.videosection{
    font-family: 'Poppins';
    .left{
        background: url('../assets/images/worker.jpg');
        background-position: center;
        background-size: cover;
    }
    .right{
        background: #FF5E14;
        padding: 4rem 4rem;
        color: #fff;
        h1{
            font-weight: bold;
        }
        h5{
            padding-top: 2rem;
            font-size: .9rem;
            line-height: 2;
            opacity: .9;
        }
        p{
            padding-top: 2rem;
            font-size: .9rem;
            line-height: 2;
            opacity: .9;
        }
    }
}
</style>