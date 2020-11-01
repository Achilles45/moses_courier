<template>
  <div class="singlelisting">
    <div class="form__wrapper mb-5">
        <img src="../assets/images/bar.png" class="bar" alt="">
        <h5 class="pb-2">Details of this Package</h5>
             <span class="title">
                <span>Receiver's Information</span>
            </span> <br> <br>
        <p> <strong>Receiver's Name:</strong> {{ listing.receiversName}}</p>
        <p> <strong>Receiver's Email:</strong> {{ listing.receiversEmail}}</p><br>
          <span class="title package">
                <span>Package Information</span>
            </span> <br> <br>

        <p> <strong>Total Items:</strong> {{ listing.to}}talItems</p>
        <p><strong>Total Weight:</strong> {{ listing.weight}}</p> 
        <p><strong>Current Location:</strong> {{ listing.currentLocation}}</p> 
        <p><strong>Insurance Status:</strong> {{ listing.insurance}}</p> 
        <p><strong>Shipping Address:</strong> {{ listing.shipingAddress}}</p> 
        <p><strong>Shipping Date:</strong> {{ listing.shipingDate}}</p> 
        <p><strong>Delivery Date:</strong> {{ listing.deliveryDate}}</p> 
        <p><strong>Shipment Status:</strong> {{ listing.status}}</p><br>
        <span class="title">
                <span>Sender's Information</span>
            </span> <br> <br>
         <p><strong>Sender's Name:</strong> {{ listing.sendersName}}</p>
         <p><strong>Sender's Address:</strong> {{ listing.sendersAddress}}</p><br>

         <span class="title package">
                <span>Comment</span>
            </span> <br> <br>
            <p><strong>Comment:</strong> {{ listing.comment}}</p><br> 
        <router-link :to="{path: `/listings/edit/${listing.id}`}" class="btn btn-primary mr-2">Edit Package</router-link>
        <form @submit.prevent="deleteListing()" class="d-inline" method="POST">
            <input type="submit" value="Delete" class="btn btn-danger">
        </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            listing: {},
        }
    },
    mounted(){
        axios.get(`https://courierdemo.herokuapp.com/package/${this.$route.params.id}`)
        .then((response)=>{
            this.listing = response.data.data
        })
    },
    methods:{
        deleteListing(){
            axios.delete(`https://courierdemo.herokuapp.com/package/delete/${this.$route.params.id}`)
            .then((response)=>{
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
        p{
            font-size: 1rem;
            color: #545454
        }
        strong{
            color: #545454 !important;
            opacity: .9;
            font-size: .8rem;
        }
     }
}
</style>