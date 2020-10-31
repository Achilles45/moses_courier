<template>
  <div class="track">
    <Navbar />
    <div class="container">
      <div class="row wrapper">
        <div class="col-md-2"></div>
        <div class="col-md-8 content__holder">
          <form action="" @submit.prevent="track(trackingId)">
            <div class="form-group">
              <div class="text">
                <label for="title">Insert tracking ID here</label>
                <div v-if="err" class="alert alert-danger">
                  {{ err }}
                </div>
                <input
                  id="trackingId"
                  v-model="trackingId"
                  type="text"
                  class="form-control"
                />
              </div>
              <button type="submit" class="form__btn">
                {{ button__text}}
              </button>
            </div>
          </form>
          <div class="result__wrapper" v-if="trackedPackage">
            <table class="table mt-5">
              <tbody>
                <tr>
                  <td>DELIVERING STATUS FOR</td>
                  <td>{{ trackedPackage.receiver_name }}</td>
                </tr>
                <tr>
                  <td>ITEMS</td>
                  <td>{{ trackedPackage.items }}</td>
                </tr>
                <tr>
                  <td>WEIGHT OF THE ITEMS</td>
                  <td>{{ trackedPackage.weight }}</td>
                </tr>
                <tr>
                  <td>INSURANCE COVER AND CUSTOM DUTY</td>
                  <td>{{ trackedPackage.insurance }}</td>
                </tr>
                <tr>
                  <td>PRESENT LOCATION</td>
                  <td class="location">{{ trackedPackage.location }}</td>
                </tr>
                <tr>
                  <td>SENDER'S NAME</td>
                  <td>{{ trackedPackage.sender_name }}</td>
                </tr>
                <tr>
                  <td>SENDER'S ADDRESS</td>
                  <td>{{ trackedPackage.sender_address }}</td>
                </tr>
                <tr>
                  <td>RECEIVER'S NAME</td>
                  <td>{{ trackedPackage.receiver_name }}</td>
                </tr>
                <tr>
                  <td>SHIPPING ADDRESS</td>
                  <td>{{ trackedPackage.shipping_address }}</td>
                </tr>
                <tr>
                  <td>PRESENT DESTINATION DELIVERING STATUS</td>
                  <td class="destination">{{ trackedPackage.status }}</td>
                </tr>
                <tr>
                  <td>FINAL DESTINATION DELIVERING DATE</td>
                  <td>{{ trackedPackage.delivery_date }}</td>
                </tr>
                <tr>
                  <td>COMMENT</td>
                  <td class="comment">{{ trackedPackage.comment }}</td>
                </tr>
              </tbody>
             <div class="bottom d-flex justify-content-between">
                <p><router-link to="/contact">CLICK HERE TO CONTACT<br /> CUSTOMER CARE</router-link></p>
                 <p>Alwyas refresh to see changes</p>
             </div>
            </table>
          </div>
        </div>
        <div class="col-md-2"></div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      trackingId: null,
      foundTrackedPackage: false,
      trackedPackage: null,
      button__text: 'Track your package here',
      err:null
    };
  },
  methods: {
    async track(trackingId) {
      this.button__text = 'Loading .....'
      if (!trackingId) return;

      // wrapping in a try catch block for error handling
      try {
        const trackedPackage = await db
          .collection("package")
          .doc(trackingId)
          .get();
        this.trackedPackage = trackedPackage.data();
        this.foundTrackedPackage = true;
        this.button__text = 'See tracking result below'
      } catch (error) {
        this.err = 'Tracking failed. Please check your internet connection and try again!'
      }
    }
  },
  mounted() {
    if (this.$route.params.id) {
      const trackingId = this.$route.params.id;
      this.trackingId = trackingId;
      this.track(trackingId);
    }
  }
};
</script>

<style lang="scss" scoped>
.track {
 .wrapper{
   height: 100vh;
 }
  .result__holder {
    background: rgba(0, 0, 0, 0.5);
  }
  .content__holder {
    background: #121C45;
    color: #fff;
    padding: 2rem;
    border-radius: 4px;
    margin-top: 10rem;
    margin-bottom: 2rem;
    height: 15rem;
    hr {
      background: #fff !important;
    }
    h5 {
      color: #fff;
      font-weight: normal;
      font-size: 1rem;
    }
    form {
      label {
        color: #fff;
        font-size: 0.94rem;
        opacity: 0.9;
        padding-bottom: 0.5rem;
      }
      input {
        width: 100%;
        height: 2.8rem;
        background: #f4f4f4;
        box-shadow: none !important;
        border-radius: 3px;
        margin-bottom: 1rem;
      }
      .form__btn {
        background: #FF5E14;
        color: #fff;
        width: 100%;
        border-radius: 3px;
        padding: 0.9rem 2rem;
        outline: none;
        border: none;
        font-size: 0.85rem;
      }
    }
  }
}
table {
  color: #fff;
  
  font-size: 0.9rem;
  text-transform: uppercase !important;
  p{
    font-size: .9rem;
    padding-top: 1rem;
  }
  a{
    color: #fff;
    padding-right: 1rem;
  }
}

.location {
  color: green !important;
}
.destination {
  color: red !important;
}
.comment {
  color: blue !important;
}
</style>
