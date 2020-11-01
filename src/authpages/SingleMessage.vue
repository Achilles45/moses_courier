<template>
  <div class="single">
      <div class="wrapper">
           <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
                  <img src="../assets/images/message.png" class="msg_img" alt="">
                    <div class="pl-3">
                  <h5>Message Details</h5>
                  <p>See the details of this particular message.</p>
              </div>
            </div>
            <!-- <div>
                <div class="btn btn-danger">Delete Message</div>
            </div> -->
          </div><hr>
           <table class="table table-striped">
        <thead>
          <tr>
            <th class="d-none d-md-block">Tracking ID</th>
            <th>Sender's Name</th>
            <th>Sender's Email</th>
            <th>Senders's Phone Number</th>
          </tr>
        </thead>
        <tbody>
          <!-- <router-link to="/dashboard/listings" class="btn btn-primary all_btn">View All Shipments</router-link> -->
          <tr>
          <td >{{ message.id }}</td>
          <td >{{ message.fullName }}</td>
          <td>{{ message.emailAddress }}</td>
          <td>{{ message.phoneNumber }}</td>
          </tr> 
        </tbody>
      </table>
      <h6>Message Body</h6>
      <p class="details">{{message.message}}!</p>
         <div v-if="success" class="alert alert-success">
              {{success}}
            </div>
        <div>
               <form @submit.prevent="deleteMessage()" class="d-inline" method="POST">
            <input type="submit" value="Delete" class="btn btn-danger">
        </form>
        </div>
      </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data(){
    return{
      message:{},
      success: ""
    }
  },
  mounted(){
    this.fetchSingleMessage()
  },
  methods:{
    async fetchSingleMessage(){
       const response = await axios.get(`https://courierdemo.herokuapp.com/messages/${this.$route.params.id}`)
       this.message = response.data.data
    },
    async deleteMessage(){
      const response = await axios.delete(`https://courierdemo.herokuapp.com/messages/delete/${this.$route.params.id}`)
      this.success = "Oops! Message was successfully deleted and you are been redirected"
      setTimeout(() => {
        this.$router.push({path: '/dashboard/messages'})
      }, 3000);
    }
  }
}
</script>

<style lang="scss" scoped> 
.single{
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
    h6{
        color: #48465b;
        font-weight: bold;
    }
    p{
        color:#74788d;
        font-size: .9rem;
    }
    .details{
        line-height: 2;
    }
    }
}
</style>