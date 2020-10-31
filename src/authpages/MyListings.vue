<template>
  <div class="listings">
    <div class="form__wrapper table-responsive">
        <h5>See all your packages</h5>
        <small v-if="totalJob == 0">
          You currently have no active job listings
        </small>
       <table class="table table-striped">
        <thead>
          <tr>
            <th class="d-none d-md-block">Tracking ID</th>
            <th>Receiver's Name</th>
            <th>Receiver's Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>jahdjklp4039fa</td>
            <td>Frank Lampard</td>
            <td>superfraklin@yahoo.com</td>
            <td><div class="btn btn-primary">Active</div></td>
            <td><div class="btn btn-primary">See Details</div></td>
          </tr>
           <tr>
            <td>jahdjklp4039fa</td>
            <td>Frank Lampard</td>
            <td>superfraklin@yahoo.com</td>
            <td><div class="btn btn-danger">Pending</div></td>
            <td><div class="btn btn-primary">See Details</div></td>
          </tr>
           <tr>
            <td>jahdjklp4039fa</td>
            <td>Frank Lampard</td>
            <td>superfraklin@yahoo.com</td>
            <td><div class="btn btn-danger">Pending</div></td>
            <td><div class="btn btn-primary">See Details</div></td>
          </tr>
           <tr>
            <td>jahdjklp4039fa</td>
            <td>Frank Lampard</td>
            <td>superfraklin@yahoo.com</td>
            <td><div class="btn btn-primary">Active</div></td>
            <td><div class="btn btn-primary">See Details</div></td>
          </tr>
          <tr>
            <td>jahdjklp4039fa</td>
            <td>Frank Lampard</td>
            <td>superfraklin@yahoo.com</td>
            <td><div class="btn btn-primary">Active</div></td>
            <td><div class="btn btn-primary">See Details</div></td>
          </tr>
          <!-- <tr v-for="job in getMyListings" :key="job.id">
          <td class="d-none d-md-block">{{ job.id }}</td>
          <td>{{ job.title }}</td>
          <td><router-link :to="{ path: `/details/listings/${job.id}`}" class="btn btn-primary">Details</router-link></td>
          </tr> -->
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions, mapGetters } from 'vuex'
export default {
  data(){
    return{
      jobs: [],
      token: "",
      totalJob: null
    }
  },
  computed: mapGetters(['getMyListings']),
  created(){
    // this.token = localStorage.getItem("jwt")
    // const header = {
    //   headers:{}
    // }
    // axios.get("http://localhost:1337/listings/me", { headers: { Authorization: `Bearer ${this.token}` } })
    // .then((response) =>{
    //   console.log(response)
    //   this.jobs = response.data.data
    //   this.totalJob = response.data.data.length
    // })
    this.$store.dispatch("fetchAllMyListings")
  }
}
</script>

<style lang="scss" scoped>
.listings{
   padding: 0 1.3rem;
   height: 80vh;
    .form__wrapper{
        box-shadow: -3px 3px 12px rgba(10,46,101,.03);
        background: #fff;
        padding: 3rem;
        border-radius: 5px;
        small{
          color: #627081;
          font-weight: bold;
          opacity: .5;
        }
        h4{
            font-weight: bold;
            text-transform: capitalize;
            color: #09172e;
        }
    }
}
</style>