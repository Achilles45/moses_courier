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
            <th class="d-none d-md-block">Ticket ID</th>
            <th>Sender's Name</th>
            <th>Senders's Email</th>
            <th>Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>jahdjklp4039fa</td>
            <td>Frank Lampard</td>
            <td>superfraklin@yahoo.com</td>
            <td>+234-5353-4533</td>
          </tr>
          <!-- <tr v-for="job in getMyListings" :key="job.id">
          <td class="d-none d-md-block">{{ job.id }}</td>
          <td>{{ job.title }}</td>
          <td><router-link :to="{ path: `/details/listings/${job.id}`}" class="btn btn-primary">Details</router-link></td>
          </tr> -->
        </tbody>
      </table>
      <h6>Message Body</h6>
      <p class="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate molestias quibusdam aliquid maiores, id odio perferendis iusto deserunt officia tempore beatae veniam sed consectetur a sapiente. Consectetur quos nesciunt fuga, unde molestiae nobis voluptas? Voluptas aspernatur dolorum facere reiciendis, cumque, accusamus dolores blanditiis nisi nihil alias saepe ut ipsum magnam!</p>
        <div>
            <div class="btn btn-danger">Delete Message</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {

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