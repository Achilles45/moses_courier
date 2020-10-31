<template>
  <div class="signup">
    <div class="content">
        <form @submit.prevent="register()">
             <div class="logo-img text-center">
                <router-link to="/" class=""><img src="../assets/images/logo.png" class="logo__img" alt=""></router-link>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="form-group">
                        <label for="">Full Name</label>
                        <input type="text" class="form-control" placeholder="Your full name" v-model="details.fullName">
                    </div>
                </div>
            </div>
             <div class="row">
                <div class="col-12">
                    <div class="form-group">
                        <label for="">Email Address</label>
                        <input type="text" class="form-control" placeholder="A valid email address" v-model="details.emailAddress">
                    </div>
                </div>
            </div>
             <div class="row">
                <div class="col-12">
                    <div class="form-group">
                        <label for="">Your Password</label>
                        <input type="password" class="form-control" v-model="details.password">
                    </div>
                </div>
            </div>
                <small id="passwordHelpBlock" class="form-text">
            By clicking on the create account button, you have read and agreed to our terms and conditions of service
        </small><br>
                <div v-if="err" class="alert alert-danger alert-dismissible fade show" role="alert">
                    {{ err }}
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
            </div>
            <div v-if="success" class="alert alert-success alert-dismissible fade show" role="alert">
                    {{ success }}
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
            </div>
        <button type="submit" class="form__btn">{{ text }}</button>
        <hr>
        <div class="form__bottom text-center pt-2 pb-2">
        <p>Already have an account? <router-link to="/signin" class="signin__link">Sign In</router-link></p>
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
            details: {
               fullName: null,
               emailAddress: null,
               password: null
            },
            err: null,
            success: null,
            text: "Create Account",
        }
    },
    methods:{
        //Function to create a new account for a user
       async register(){
           
           try {
                // First check if the user has completely filled out the form
                if(!this.details.fullName || !this.details.emailAddress || !this.details.password){
                    //Now send an error back to the user
                    this.err = "Empty field(s). Please fill the form and try again";
                    this.clearAlerts();
                }
                //Check if the passwords match
                else if(this.password != this.repeatPassword){
                    this.err = "Your password combination did not match!"
                }
                else{
                    //Run the actually fuction to signup the user
                    this.$store.dispatch("createAccount", {
                        details: this.details
                    })
                    this.text = "Loading..."
        
                //    const response = await axios.post("http://localhost:1337/user/signup", this.details);
                //    console.log(response)
                //    let token = response.data.token;
                //    let userDetails = response.data.data;
                //    //If there is a token, save same in local storage
                //    if(token){
                //        localStorage.setItem("jwt", token)
                //        //Also set the user so we can get his details across other places
                //         localStorage.setItem('user', JSON.stringify(userDetails));
                //    }

                   this.text = "Create Account"
                   this.success = "Account successfully created. Redirecting to your dashboard in 5 seconds."

                //    //Now check if the use is a lalent or employer and redirect to it's respective dashboard
                //    if(response.data.data.accountType == "employer"){
                //        this.$router.push({path: '/dashboard/overview'})
                //    }
                //    else{
                //        //Redirect to the user dashboard
                //        this.$router.push({path: '/overview'})
                //    }
                }
           } catch (error) {
               console.log(error.message)
               if(error.message == "Request failed with status code 500"){
                   this.err = "Oops! Something went wrong. Please try again"
               }
               if(error.message == "Request failed with status code 400"){
                   this.err = "An account is already associated with this email address"
               }

           }
        },
        clearAlerts(){
            //Function to clear alerts
            setTimeout(() => {
                document.querySelector('.alert').remove()
            }, 5000);
        }
        
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
.signup{
    background: #fff;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    font-family: 'Nunito';
    .content{
         margin: 0 1.5rem;
        form{
            // background: #fff;
            max-width: 500px;
            width: 100%;
            margin: 0 auto;
            padding: 0rem 1rem;
            border-radius: 4px;
            // box-shadow: 0 0.75rem 1.5rem rgba(18,38,63,.03);
           .logo__img{
               max-width: 140px;
           }
            p{
                color: #9aa9bd;
                font-size: .8rem;
                padding-bottom: .4rem;
                line-height: .3rem;
            }
            label{
                font-weight: bold;
                color: #627081;
                font-size: .8rem;
                opacity: .9;
            }
            input, select{
                height: 3rem;
                border-radius: 4px;
                box-shadow: none;
                border:1px solid #dddddd;
                background: #fff;
                color: #2b2b2b;
                opacity: .8;
                &::placeholder{
                    text-transform: capitalize;
                    font-size: .85rem;
                    color: #9aa9bd;
                }
            }
            small{
                color: #9aa9bd;
                font-size: .7rem;
                line-height: 1.7;
            }
            .form__btn{
                background: $tertiary-color;
                border: none;
                width: 100%;
                height: 3.2rem;
                border-radius: 4px;
                color: #fff;
                outline: none !important;
                &:hover{
                    background: #ec7112;
                    transition: all ease .5s;
                }
            }
            .form__bottom{
                 p{
                    color: #627081;
                }
                a{
                    color: $tertiary-color;
                    font-size: .85rem;
                    text-decoration: none;
                }
            }
        }
    }
}
</style>