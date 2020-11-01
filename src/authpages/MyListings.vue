<template>
  <div class="listings">
    <div class="form__wrapper table-responsive">
        <h5>See all your packages</h5>
        <!-- <small v-if="totalJob == 0">
          You currently have no active job listings
        </small> -->
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
          <!-- <router-link to="/dashboard/listings" class="btn btn-primary all_btn">View All Shipments</router-link> -->
          <tr v-for="listing in allListings" :key="listing.id">
          <td class="d-none d-md-block">{{ listing.id }}</td>
          <td >{{ listing.receiversName }}</td>
          <td>{{ listing.receiversEmail }}</td>
          <td>{{ listing.status }}</td>
          <td><router-link :to="{ path: `/details/listings/${listing.id}`}" class="btn btn-primary">Details</router-link></td>
          </tr> 
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
      allListings: {},
    }
  },
  methods:{
      async fetchAllListings(){
        const response = await axios.get("https://courierdemo.herokuapp.com/packages/")
        this.allListings = response.data.data
    },
  },
  mounted(){
    this.fetchAllListings()
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