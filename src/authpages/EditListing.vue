<template>
  <div class="create">
    <div class="form__wrapper mb-5">
        <h5>Edit Package Here</h5>
        <hr>
         <form @submit.prevent="editListing()" method="post" class="pt-3">
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
                        <input type="text" class="form-control" v-model="details.receiversName">
            </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="title">Receiver's Email Address</label>
                    <input type="text" class="form-control" v-model="details.receiversEmail">
            </div>
                </div>
            </div><br>
              <span class="title package">
                        <span>Package Information</span>
                    </span> <br> <br>
            <div class="row">
                <div class="col-md-6">
                      <div class="form-group">
                        <label for="experince">Total Items</label>
                   <input type="text" class="form-control" v-model="details.totalItems">     
            </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                    <label for="location">Total Weight</label>
                 <input type="text" class="form-control" v-model="details.weight">
            </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                     <div class="form-group">
                    <label for="salary">Current Location</label>
                    <input type="text" class="form-control" v-model="details.currentLocation">
                </div>
            </div>
            <div class="col-md-6">
                  <div class="form-group">
                    <div class="form-group">
                    <label for="description">Insurance status</label>
                    <input type="text" v-model="details.insurance" class="form-control">
                </div>
                </div>
            </div>
            </div>
             <div class="row">
                <div class="col-md-6">
                     <div class="form-group">
                    <label for="salary">Shipping Address</label>
                    <input type="text" class="form-control" v-model="details.shipingAddress">
                </div>
            </div>
            <div class="col-md-6">
                  <div class="form-group">
                    <div class="form-group">
                    <label for="description">Shipping Date</label>
                    <input type="date" v-model="details.shipingDate" class="form-control">
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
                    <input type="text" v-model="details.status" class="form-control">
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
                                <input type="text" class="form-control"  v-model="details.sendersName">
                            </div>
                        </div>
                         <div class="col-md-6">
                            <div class="form-group">
                                <label for="">Sender's Address</label>
                                <input type="text" class="form-control" v-model="details.sendersAddress">
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
                            <input type="text" class="form-control" v-model="details.comment">
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
            token: "",
            text: "Edit Package"
        }
    },
    methods:{
       async editListing(){
           try {
               this.text = "Editing...."
               //Check if all the fields has been filled out
               if(!this.details.receiversName || !this.details.receiversEmail || !this.details.totalItems || !this.details.weight || !this.details.currentLocation || !this.details.insurance || !this.details.shipingAddress || !this.details.shipingDate || !this.details.deliveryDate || !this.details.status || !this.details.sendersName || !this.details.sendersAddress || !this.details.comment){
                   alert("Please make sure you fill the form completely")
               } else {
                    const response = await axios.post(`https://courierdemo.herokuapp.com/package/edit/${this.$route.params.id}`, this.details)
                    .then((response) =>{
                        this.success = "Congrats! Package was successfully updated"
                     this.redirectToOverview();
                })
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
        axios.get(`https://courierdemo.herokuapp.com/package/${this.$route.params.id}`)
        .then((response)=>{
            this.details.receiversName = response.data.data.receiversName,
            this.details.receiversEmail = response.data.data.receiversEmail,
            this.details.totalItems = response.data.data.totalItems,
            this.details.weight = response.data.data.weight,
            this.details.currentLocation = response.data.data.currentLocation,
            this.details.insurance = response.data.data.insurance,
            this.details.shipingAddress = response.data.data.shipingAddress,
            this.details.shipingDate = response.data.data.shipingDate,
            this.details.deliveryDate = response.data.data.deliveryDate,
            this.details.status = response.data.data.status,
            this.details.sendersName = response.data.data.sendersName,
            this.details.sendersAddress = response.data.data.sendersAddress,
            this.details.comment = response.data.data.comment
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