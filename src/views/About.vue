<template>
  <div class="track">
    <Navbar />
    <div class="track__heading">
      <div class="container">
       <div class="row">
         <div class="col-md-2"></div>
         <div class="col-md-8 text-center">
           <h6>Affordable Price, Certified Forwarders</h6>
           <h1>Advanced Supply Chain Technology & Customized Logistics Solutions!</h1>
         </div>
         <div class="col-md-2"></div>
       </div>
      </div>
    </div>
    <div class="container">
      <div class="row content">
        <div class="col-md-6">
          <h6>Supply Chain Technology & Customized Solutions.</h6>
          <h1>Competitive Advantages For Largest Companies!</h1>
          <p>
            We have been professionally handling logistics needs for all our
            customers for 10 years and we have proven to be a leader in the
            industry. Our services are not restricted to any particular state,
            region or country as we are a global company and we move goods world
            wide.<br />
            Providing the best transport and shipping services available allover the world. Our skilled personnel, utilising the latest communications, tracking and processing software, combined with decades of experience.
          </p>
          <router-link to="/contact">Want to know more?</router-link><br><br>
        </div>
         <div class="col-md-6">
          <img src="../assets/images/worker4.jpg" class="img-fluid pb-5" alt="" />
        </div>
      </div>
    </div>
    <div class="vision__wrapper">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h3>OUR GLOBAL VISION</h3>
            <p>
              From the onset, we set out to be a global provider of all forms of
              logistics needs and we have been expanding in that regards. Our
              vision is to help you effortlessly move goods from state to state,
              region to region, country to country and continent to continent
              through sea, air, land and others.<br />Our warehousing facilities
              are top notch and your goods are always secured until they are
              delivered to you
            </p>
          </div>
          <div class="col-md-6">
            <h3>WE ARE GROWING TOGETHER</h3>
            <p>
              Our core business relation is about people and we put people at
              them core of our business. Your growth is our priority. We enable
              businesses buy providing top notch logistics services. You want
              quality logistics services, try us today.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="team__wrapper">
      <div class="container">
        <h2>THE TEAM</h2>
        <div class="team">
          <div class="team__card">
            <img src="../assets/images/team3.jpg" class="img-fluid" alt="" />
            <h3>ALLAN STEWERT</h3>
            <P>CEO</P>
          </div>
          <div class="team__card">
            <img src="../assets/images/team4.jpg" class="img-fluid" alt="" />
            <h3>BRADON CASTILO</h3>
            <P>OPERATIONS HEAD</P>
          </div>
          <div class="team__card">
            <img src="../assets/images/team5.jpg" class="img-fluid" alt="" />
            <h3>ALLAN STEWERT</h3>
            <P>CUSTOMER RELATIONS</P>
          </div>
          <div class="team__card">
            <img src="../assets/images/team2.jpg" class="img-fluid" alt="" />
            <h3>JONATHAN GRANT</h3>
            <P>CTO</P>
          </div>
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
  components: {
    Navbar,
    Footer,
    News
  },
  methods: {
    track() {
      alert('Working ...')
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,900;1,900&display=swap');
.track {
  background: #fff;
  .track__heading {
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url('../assets/images/worker3.jpg');
    background-size: cover;
    background-position: center;
    width: 100%;
    padding: 12rem 0;
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
  .content {
    margin-top: 6rem;
    h6{
      font-weight: bold;
      color: #FF5E14;
    }
    h1{
      font-weight: bold;
      color: #121C45;
    }
    p{
      color:#627081;
      font-size: .95rem;
      line-height: 2;
      padding-top: 1.2rem;
      padding-bottom: 2rem;
    }
    a{
      padding: 1.3rem 2rem;
      border-radius: 4px;
      background: #FF5E14;
      color: #fff;
    }
  }
  .vision__wrapper {
    background: #f5f7f9;
    padding: 4rem 0rem;
    h3 {
      padding-bottom: 2rem;
      color: #454545;
      font-weight: bold;
    }
     p{
      color:#545454;
      font-size: .95rem;
      line-height: 2;
      padding-top: 1.2rem;
    }
  }
  .team__wrapper {
    background: #f5f7f9;
    h2{
      font-weight: bold;
      color: #2b2b2b;
      padding-bottom: 1rem;
    }
    .team {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
      grid-gap: 40px;
      padding: 3rem 0;
      .team__card {
        text-align: center;
        h3 {
          font-size: 1.2rem;
          color: #2b2b2b;
          font-weight: bold;
          padding-top: 1rem;
        }
        p {
          font-size: 0.8rem;
          color: #545454;
        }
      }
    }
  }
  .newsletter {
    background: #2761d8;
    color: #fff;
    padding: 2rem 0;
    h3{
      font-size: 1.4rem;
    }
    form {
      align-items: center;
      width: 100%;
      input {
        height: 3rem;
        box-shadow: none !important;
        width: 100%;
        margin-right: 1rem;
        border-radius: 3px;
      }
      .newsletter__btn {
        background: #fff;
        color: #2761d8;
        border-radius: 3px;
        border: none;
        padding: 0.8rem 2.5rem;
        text-transform: uppercase;
        font-size: 0.8rem;
        &:hover {
          background: transparent;
          border: 0.5px solid #fff;
          transition: all ease-in 0.5s;
          color: #fff;
        }
      }
    }
  }
}

//MEDIA QUERIES
@media only screen and (max-width: 600px) {
  .newsletter {
    h3 {
      text-align: center;
      font-size: 1.5rem;
      padding-bottom: 1.5rem;
    }
    form {
      flex-direction: column;
      input {
        width: 100% !important;
        margin-bottom: 1rem !important;
        margin-right: 0 !important;
      }
      .newsletter__btn {
        width: 100%;
      }
    }
  }
}
</style>
