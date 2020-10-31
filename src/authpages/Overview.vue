<template>
  <div class="overview__wrapper">
     <div v-if="alertMessage" class="alert alert-success">
        {{ alertMessage}}
      </div>
    <div class="card__wrapper">
     <div class="top d-flex justify-content-between">
       <div class="left d-flex justify-content-between">
         <div class="box">
           <span>SY</span>
         </div>
         <div class="right pl-5">
         <h5>System administrator</h5>
         <div class="bellow d-flex justifycontent-between align-items-center">
           <p><i class="fa fa-envelope"></i>&nbsp; info@manager.com</p>
           <p><i class="fa fa-cubes"></i>&nbsp; General Manager</p>
         </div>
       </div>
       </div>
     </div>
     <hr>
     <div class="bottom">
       <div class="first d-flex">
         <i class="fa fa-shopping-bag"></i>
         <div class="pl-3">
           <p>0 Packages</p>
           <h6>Has been created</h6>
         </div>
       </div>
        <div class="first d-flex">
         <i class="fa fa-truck"></i>
         <div class="pl-3">
           <p>0 Delivered</p>
           <h6>Yet to be Delivered</h6>
         </div>
       </div>
        <div class="first d-flex">
         <i class="fa fa-user-plus"></i>
         <div class="pl-3">
           <p>0 Staff (total)</p>
           <h6>Yet to hire a staff</h6>
         </div>
       </div>
       <div class="first d-flex">
         <i class="fa fa-envelope"></i>
         <div class="pl-3">
           <p>0 Messages</p>
           <h6>Total Notifications</h6>
         </div>
       </div>
     </div>
    </div>
    <!--Table wrapper ============--->
    <div class="table__wrapper table-responsive mb-5">
    <div class="d-flex justify-content-between align-items-center">
      <div>
          <h5>See your latest shipments</h5>
          <small>Your listings are served from the latest at the top and older ones from the bottom</small><br><br>
      </div>
      <div class="d-none d-lg-block">
        <img src="../assets/images/bar.png" class="bar" alt="">
      </div>
    </div>
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
          </tr><br>
          <router-link to="/dashboard/listings" class="btn btn-primary all_btn">View All Shipments</router-link>
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
import getUserDetails from '../mixins/getUserDetails';
import getQuery from '../mixins/getQuery';
import clearAlerts from '../mixins/clearAlert';
import {mapGetters, mapActions} from 'vuex'
export default {
  mixins: [getUserDetails, getQuery, clearAlerts],
  data(){
    return{
      jobs: [],
      totalJob: null,
        firstName: "",
        lastName: "",
        emailAddress: "",
        accountType: "",
        phoneNumber: "",
        alertMessage: "",
        token: ""
    }
  },
  computed: mapGetters(['getMyListings']),
  //Get all the jobs at the created hook
  created(){
    // this.token = localStorage.getItem("jwt");
    // axios.get("http://localhost:1337/listings/me", { headers: { Authorization: `Bearer ${this.token}` } })
    // .then((response) =>{
    //   console.log(response)
    //   this.jobs = response.data.data
    //   this.totalJob = response.data.data.length
    // })
    this.$store.dispatch("fetchAllMyListings")
  },
}
</script>

<style lang="scss" scoped>
.overview__wrapper{
  padding: 0 1.3rem;
  height: 100vh;
  .card__wrapper{
    background: #fff; 
    padding: 2rem;
    border-radius: 2px;
    margin-bottom: 1rem;

    .top{
      .box{
        background: #2568EF;
        padding: 2.5rem;
        border-radius: 4px;
        color: #fff;
        font-weight: bold;
      }
      .right{
        .fa-cubes{
          margin-left: 1rem;
        }
        p{
          color: #74788d;
          font-size: .9rem;
        }
        h5{
          color:#48465b;
          padding-bottom: .3rem;
        }
      }
    }

    .bottom{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      grid-gap: 20px;
      padding-top: 2rem;
      .first{
        line-height: .5;
        .fa-truck, .fa-shopping-bag, .fa-user-plus, .fa-envelope{
        font-size: 1.7rem;
        color: #74788d;
      }
      h6{
        font-weight: bold;
        color: #48465b;
        font-size: .95rem;
      }
      p{
        color: #74788d;
        font-size: .85rem;
        font-weight: 400;
        opacity: .8;
      }
      }
    }
  }

  .bar{
    max-width: 80px;
    height: auto;
  }
  //Table wrapper
  .table__wrapper{
    // box-shadow: -3px 3px 12px rgba(10,46,101,.03);
    box-shadow: 0px 0px 13px 0px rgba(82, 63, 105, 0.05);
    padding: 2rem;
    border-radius: 5px;
    background: #fff;
    h5{
      font-weight: 600;
      text-transform: capitalize;
      color: #48465b;
    }
    small{
      color: #74788d;
    }
    th{
      color: #74788d;
      font-size: .9rem;
    }
    td{
      font-size: .9rem;
      color:#48465b
    }
    .all_btn{
      background: #2568EF;
      color: #fff;
      padding: 1rem 1.5rem;
      font-weight: 400;
      border-radius: 4px;
    }
  }
}

//MEDIA QUERIES
@media only screen and (max-width: 768px){
  .card__wrapper{
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap !important;
    display: block !important;
    .card__content{
      display: inline-block;
      white-space: pre-wrap;
      margin-right: 1rem;
      max-width: 280px !important;
    }
  }
}
</style>