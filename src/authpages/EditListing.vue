<template>
  <div class="create">
    <div class="form__wrapper mb-5">
        <h5>Edit Package Here</h5>
        <hr>
         <form @submit.prevent="createListing()" method="post" class="pt-3">
            <div v-if="success" class="alert alert-success">
                {{ success }}
            </div>
              <span class="title">
                        <span>Receiver's Information</span>
                    </span> <br> <br>
            <div class="row">
                <div class="col-md-6">
                      <div class="form-group">
                          <label for="">Receiver's Name</label>
                        <input type="text" class="form-control" placeholder="e.g Jones Smith">
            </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="title">Receiver's Email Address</label>
                    <input type="text" class="form-control" placeholder="e.g jonessmith@gmail.com">
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
                   <input type="text" class="form-control" placeholder="e.g 10">     
            </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                    <label for="location">Total Weight</label>
                 <input type="text" class="form-control" placeholder="e.g 100kg">
            </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                     <div class="form-group">
                    <label for="salary">Current Location</label>
                    <input type="text" class="form-control" placeholder="e.g National Port, Madrid, Spain">
                </div>
            </div>
            <div class="col-md-6">
                  <div class="form-group">
                    <div class="form-group">
                    <label for="description">Insurance status</label>
                    <input type="text" placeholder="e.g Insured" class="form-control">
                </div>
                </div>
            </div>
            </div>
             <div class="row">
                <div class="col-md-6">
                     <div class="form-group">
                    <label for="salary">Shipping Address</label>
                    <input type="text" class="form-control" placeholder="e.g National Port, Madrid, Spain">
                </div>
            </div>
            <div class="col-md-6">
                  <div class="form-group">
                    <div class="form-group">
                    <label for="description">Shipping Date</label>
                    <input type="date" placeholder="e.g Insured" class="form-control">
                </div>
                </div>
            </div>
            </div>
             <div class="row">
                <div class="col-md-6">
                     <div class="form-group">
                    <label for="salary">Delivery Date</label>
                    <input type="date" class="form-control">
                </div>
            </div>
            <div class="col-md-6">
                  <div class="form-group">
                    <div class="form-group">
                    <label for="description">Shipment Status</label>
                    <input type="text" placeholder="Moving or On Hold" class="form-control">
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
                                <input type="text" class="form-control"  placeholder="e.g Eden Hazard">
                            </div>
                        </div>
                         <div class="col-md-6">
                            <div class="form-group">
                                <label for="">Sender's Address</label>
                                <input type="text" class="form-control"  placeholder="e.g Bridge road, London, United Kingdom">
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
                            <input type="text" class="form-control" placeholder="Any other comment">
                        </div>
                       </div>
                    </div>
            <div v-if="success" class="alert alert-success">
                {{ success }}
            </div>
            <div class="button__wrapper pt-4">
                <button type="submit" class="form__btn">{{ text }}</button>
            </div>
        </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'
export default {
    data(){
        return{
             jobDetails:{
                title: "",
                language: "",
                experience: "",
                location: "",
                salary: "",
                description: "",
            },
            success: null,
            err: null,
            token: "",
            text: "Edit Package"
        }
    },
    methods:{
       async editListing(){
           try {
               this.text = "Editing...."
               this.token = localStorage.getItem("jwt")
               //Check if all the fields has been filled out
               if(this.jobDetails.title && this.jobDetails.language && this.jobDetails.experience && this.jobDetails.location && this.jobDetails.salary && this.jobDetails.description){
                //    axios.put(`http://localhost:1337/listings/edit/${this.$route.params.id}`, this.jobDetails, { headers: { Authorization: `Bearer ${this.token}` } })
                //    .then((response) =>{
                //     this.redirectToOverview();
                //    })
                this.$store.dispatch("editListing", {
                    details: this.jobDetails,
                    id: this.$route.params.id
                })
                this.redirectToOverview();
               }
           } catch (error) {
               console.log(error)
           } 
        },
         redirectToOverview(){
            setTimeout(() => {
                this.$router.push({path: '/dashboard/overview', query:{edited: "success"}})
            }, 3000);
        }
    },
    created(){
        axios.get(`http://localhost:1337/listings/${this.$route.params.id}`)
        .then((response)=>{
            // this.job = response.data.data
            this.jobDetails.title = response.data.data.title,
            this.jobDetails.language = response.data.data.language,
            this.jobDetails.experience = response.data.data.experience,
            this.jobDetails.location = response.data.data.location,
            this.jobDetails.salary = response.data.data.salary,
            this.jobDetails.description = response.data.data.description
        })
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
        .title{
                color: #fff;
                background: #2568EF;
                padding: .5rem 2rem;
                border-radius: 20px;
                font-weight: 400;
                font-size: 1rem;
            }
        h4{
            font-weight: bold;
            text-transform: capitalize;
            color: #09172e;
        }
        form{
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