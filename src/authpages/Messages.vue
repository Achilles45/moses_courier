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
            <th class="d-none d-md-block">Ticket ID</th>
            <th>Sender's Name</th>
            <th>Senders's Email</th>
            <th>Mobile Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>jahdjklp4039fa</td>
            <td>Frank Lampard</td>
            <td>superfraklin@yahoo.com</td>
            <td>+234-5353-4533</td>
            <td><div class="btn btn-primary">See Details</div></td>
          </tr>
           <tr>
            <td>jahdjklp4039fa</td>
            <td>Frank Lampard</td>
            <td>superfraklin@yahoo.com</td>
            <td>+234-5353-4533</td>
            <td><div class="btn btn-primary">See Details</div></td>
          </tr>
           <tr>
            <td>jahdjklp4039fa</td>
            <td>Frank Lampard</td>
            <td>superfraklin@yahoo.com</td>
            <td>+234-5353-4533</td>
            <td><div class="btn btn-primary">See Details</div></td>
          </tr>
           <tr>
            <td>jahdjklp4039fa</td>
            <td>Frank Lampard</td>
            <td>superfraklin@yahoo.com</td>
            <td>+234-5353-4533</td>
            <td><div class="btn btn-primary">See Details</div></td>
          </tr>
          <tr>
            <td>jahdjklp4039fa</td>
            <td>Frank Lampard</td>
            <td>superfraklin@yahoo.com</td>
            <td>+234-5353-4533</td>
            <td><div class="btn btn-primary">See Details</div></td>
          </tr><br>
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
export default {

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