<template>
  <div class="messages">
      <div class="wrapper">
          <div class="d-flex align-items-center">
              <img src="../assets/images/message.png" class="msg_img" alt="">
              <div class="pl-3">
                  <h5>Your Message Box</h5>
                  <p>This is where you get to see all the messages sent by your clients</p>
              </div>
          </div><br>
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
          <tr v-for="message in messages" :key="message.id">
          <td >{{ message.id }}</td>
          <td >{{ message.fullName }}</td>
          <td>{{ message.emailAddress }}</td>
          <td>{{ message.phoneNumber }}</td>
          <td><router-link :to="{ path: `/messages/${message.id}`}" class="btn btn-primary">Details</router-link></td>
          </tr> 
        </tbody>
      </table>
      </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data(){
    return{
      messages: {}
    }
  },
  created(){
    this.fetchAllMessages()
  },
  methods:{
     async fetchAllMessages(){
        const response = await axios.get("https://courierdemo.herokuapp.com/messages/")
        this.messages = response.data.data
    },
  }
}
</script>

<style lang="scss" scoped>
.messages{
    padding: 0 1.3rem;
    height: 100vh;
    .wrapper{
    background: #fff; 
    padding: 2rem;
    border-radius: 3px;
    margin-bottom: 1rem;
    .msg_img{
        max-width: 100px;
        height: auto;
    }
    h5{
        color: #48465b;
    }
    p{
        color:#74788d;
        font-size: .9rem;
    }
    }
}
</style>