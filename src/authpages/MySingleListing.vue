<template>
  <div class="singlelisting">
    <div class="form__wrapper mb-5">
        <img src="../assets/images/bar.png" class="bar" alt="">
        <h5 class="pb-2">Details of this Package</h5>
             <span class="title">
                <span>Receiver's Information</span>
            </span> <br> <br>
        <p> <strong>Receiver's Name:</strong> {{ getSingleListing.language}}</p>
        <p> <strong>Receiver's Address:</strong> {{ getSingleListing.experience}}</p><br>
          <span class="title package">
                <span>Package Information</span>
            </span> <br> <br>

        <p> <strong>Total Items:</strong> {{ getSingleListing.location}}</p>
        <p><strong>Total Weight:</strong> {{ getSingleListing.salary}}</p> 
        <p><strong>Current Location:</strong> {{ getSingleListing.salary}}</p> 
        <p><strong>Insurance Status:</strong> {{ getSingleListing.salary}}</p> 
        <p><strong>Shipping Address:</strong> {{ getSingleListing.salary}}</p> 
        <p><strong>Shipping Date:</strong> {{ getSingleListing.salary}}</p> 
        <p><strong>Delivery Date:</strong> {{ getSingleListing.salary}}</p> 
        <p><strong>Shipment Status:</strong> {{ getSingleListing.salary}}</p><br>
        <span class="title">
                <span>Sender's Information</span>
            </span> <br> <br>
         <p><strong>Sender's Name:</strong> {{ getSingleListing.salary}}</p>
         <p><strong>Sender's Address:</strong> {{ getSingleListing.salary}}</p><br>

         <span class="title package">
                <span>Comment</span>
            </span> <br> <br>
            <p><strong>Comment:</strong> {{ getSingleListing.salary}}</p><br> 
        <router-link :to="{path: `/listings/edit/${getSingleListing.id}`}" class="btn btn-primary mr-2">Edit Package</router-link>
        <form @submit.prevent="deleteListing()" class="d-inline" method="POST">
            <input type="submit" value="Delete" class="btn btn-danger">
        </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {mapActions, mapGetters} from 'vuex'
export default {
    data(){
        return {
            job: {},
            token: ""
        }
    },
    computed: mapGetters(['getSingleListing']),
    created(){
        // axios.get(`http://localhost:1337/listings/${this.$route.params.id}`)
        // .then((response)=>{
        //     this.job = response.data.data
        // })
        this.$store.dispatch("fetchSingleListing", {
            id: this.$route.params.id
        })
    },
    methods:{
        deleteListing(){
            // axios.delete(`http://localhost:1337/listings/delete/${this.$route.params.id}`, { headers: { Authorization: `Bearer ${this.token}` } })
            // .then((response)=>{
            //     this.$router.push({path: '/dashboard/overview', query:{deleted: "success"}})
            // })
            this.$store.dispatch("deleteListing", {
                id: this.$route.params.id
            }).then(()=>{
                this.$router.push({path: '/dashboard/overview', query:{deleted: "success"}})
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.singlelisting{
    padding: 0 1.3rem;
     .form__wrapper{
        box-shadow: -3px 3px 12px rgba(10,46,101,.03);
        background: #fff;
        padding: 3rem;
        border-radius: 5px;
        .bar{
            max-width: 80px;
            height: auto;
        }
        .title{
                color: #fff;
                background: #2568EF;
                padding: .5rem 2rem;
                border-radius: 20px;
                font-weight: 400;
                font-size: 1rem;
            }
             .package{
                    background: #FFB822 !important;
                }
        h4{
            font-weight: bold;
            text-transform: capitalize;
            color: #09172e;
        }
        .description{
            line-height: 2;
            color: #454545;
        }
        strong{
            color: #545454 !important;
            opacity: .9;
            font-size: .9rem;
        }
     }
}
</style>