<template>
  <div class="create">
    <div class="form__wrapper mb-5">
        <h5>Create a new package for shipping</h5>
        <hr>
        <form @submit.prevent="createListing()" method="post" class="pt-1">
            <!-- <div v-if="success" class="alert alert-success">
                {{ success }}
            </div> -->
            <div>
                <img src="../assets/images/bar.png" class="bar" alt="">
            </div><br>
              <span class="title">
                        <span>Receiver's Information</span>
                    </span> <br> <br>
            <div class="row">
                <div class="col-md-6">
                      <div class="form-group">
                          <label for="">Receiver's Name</label>
                        <input type="text" class="form-control" placeholder="e.g Jones Smith" v-model="details.receiversName">
            </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="title">Receiver's Email Address</label>
                    <input type="text" class="form-control" placeholder="e.g jonessmith@gmail.com" v-model="details.receiversEmail">
            </div>
                </div>
            </div><br>
              <span class="title package">
                        <span>Package Information</span>
                    </span> <br> <br>
            <div class="row">
                <div class="col-md-6">
                      <div class="form-group">
                        <label for="experince">TotalI tems</label>
                   <input type="text" class="form-control" placeholder="e.g 10" v-model="details.totalItems">     
            </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                    <label for="location">Total Weight</label>
                 <input type="text" class="form-control" placeholder="e.g 100kg" v-model="details.weight">
            </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                     <div class="form-group">
                    <label for="salary">Current Location</label>
                    <input type="text" class="form-control" placeholder="e.g National Port, Madrid, Spain" v-model="details.currentLocation">
                </div>
            </div>
            <div class="col-md-6">
                  <div class="form-group">
                    <div class="form-group">
                    <label for="description">Insurance status</label>
                    <input type="text" placeholder="e.g Insured" class="form-control" v-model="details.insurance">
                </div>
                </div>
            </div>
            </div>
             <div class="row">
                <div class="col-md-6">
                     <div class="form-group">
                    <label for="salary">Shipping Address</label>
                    <input type="text" class="form-control" placeholder="e.g National Port, Madrid, Spain" v-model="details.shipingAddress">
                </div>
            </div>
            <div class="col-md-6">
                  <div class="form-group">
                    <div class="form-group">
                    <label for="description">Shipping Date</label>
                    <input type="date" placeholder="e.g Insured" class="form-control" v-model="details.shipingDate">
                </div>
                </div>
            </div>
            </div>
             <div class="row">
                <div class="col-md-6">
                     <div class="form-group">
                    <label for="salary">Delivery Date</label>
                    <input type="date" class="form-control" v-model="details.deliveryDate">
                </div>
            </div>
            <div class="col-md-6">
                  <div class="form-group">
                    <div class="form-group">
                    <label for="description">Shipment Status</label>
                    <input type="text" placeholder="Moving or On Hold" class="form-control" v-model="details.status">
                </div>
                </div>
            </div>
            </div>
            <br>
             <span class="title">
                        <span>Sender's Information</span>
                    </span> <br> <br>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="">Sender's Name</label>
                                <input type="text" class="form-control"  placeholder="e.g Eden Hazard" v-model="details.sendersName">
                            </div>
                        </div>
                         <div class="col-md-6">
                            <div class="form-group">
                                <label for="">Sender's Address</label>
                                <input type="text" class="form-control"  placeholder="e.g Bridge road, London, United Kingdom" v-model="details.sendersAddress">
                            </div>
                        </div>
                    </div>
                    <br>
                     <span class="title package">
                        <span>Any Comment</span>
                    </span> <br> <br>
                    <div class="row">
                       <div class="col-12">
                            <div class="form-group">
                            <input type="text" class="form-control" placeholder="Any other comment" v-model="details.comment">
                        </div>
                       </div>
                    </div>
            <div v-if="success" class="alert alert-success">
                {{ success }}
            </div>
             <div v-if="err" class="alert alert-danger">
                {{ err }}
            </div>
            <div class="button__wrapper pt-4">
                <button type="submit" class="form__btn">{{text}}</button>
            </div>
        </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import db from "@/firebase/init"
import firebase from "firebase" 
export default {
    data(){
        return{
                details:{
                receiversName: "",
                receiversEmail: "",
                totalItems: "",
                weight: "",
                currentLocation: "",
                insurance: "",
                shipingAddress: "",
                shipingDate: "",
                deliveryDate: "",
                status: "",
                sendersName: "",
                sendersAddress: "",
                comment: "",
                },
                success: null,
                err: null,
                text: "Create Package"
        }
    },
    methods:{
        async createListing(){
            try {
                //First check if all the fields have been filled out
                this.text = "Your package has been"
                 if (!this.details.receiversName || !this.details.receiversEmail || !this.details.totalItems || !this.details.weight || !this.details.currentLocation || !this.details.insurance || !this.details.shipingAddress || !this.details.shipingDate || !this.details.deliveryDate || !this.details.status || !this.details.sendersName || !this.details.sendersAddress || !this.details.comment) {
                this.err = 'Please fill out all fields in the form'
                this.removeAlert()
                } else {
                  await axios.post(`https://courierdemo.herokuapp.com/package/new`, this.details); 
                  this.text = "Package created"    
                  .then(() =>{
                      this.redirectToOverview()
                  })
                }
            } catch (error) {
                console.log(error)
            }
        },
        redirectToOverview(){
            setTimeout(() => {
                this.$router.push({path: '/dashboard/overview', query:{created: "success"}})
            }, 3000);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.create{
    padding: 0 1.3rem;
    .form__wrapper{
        box-shadow: -3px 3px 12px rgba(10,46,101,.03);
        background: #fff;
        padding: 3rem;
        border-radius: 5px;
        h4{
            font-weight: bold;
            text-transform: capitalize;
            color: #09172e;
        }
        form{
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
            input, select{
                height: 3rem;
                box-shadow: none;
                // outline: .5px solid #627081;
                border-radius: 20px;
                &::placeholder{
                    color: #74788d;
                    font-size: .9rem;
                    opacity: .8;
                }
            }
            .form__btn{
            background: #2568EF;
            color: #fff;
            border: none;
            padding: 1rem 2rem;
            border-radius: 20px;
            width: 100%;
            outline: none;
            &:hover{
                background: $tertiary-color;
            }
            }
        }
    }
}
</style>