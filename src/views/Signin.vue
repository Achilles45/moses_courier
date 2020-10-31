<template>
  <div class="signup">
    <div class="content">
        <form @submit.prevent="signIn()">
            <div class="logo-img text-center">
                <router-link to="/" class=""><img src="../assets/images/logo.png" class="logo__img" alt=""></router-link>
            </div>
            <!-- <p>Login and continue to your dashboard</p> -->
            <!-- <br> -->
        <div class="form-group pt-1">
            <!-- <label for="email">Email Address</label> -->
            <input type="email" class="form-control" placeholder="Email Address" v-model="details.emailAddress" required>
        </div>
         <div class="form-group">
            <!-- <label for="password">Password</label> -->
            <input type="password" class="form-control" placeholder="Password" v-model="details.password" required>
        </div>
        <div v-if="err" class="alert alert-danger alert-dismissible fade show mt-3" role="alert">
            {{  err }}
        </div>
        <div v-if="success" class="alert alert-success alert-dismissible fade show mt-3" role="alert">
            {{  success }}
        </div>
        <button type="submit" class="form__btn">{{ text }}</button>
        <hr>
        <div class="form__bottom pb-2 text-center">
            <p>Yet to have an account? <router-link to="/signup" class="signin__link">Create Account</router-link> </p>
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
            details:{
                emailAddress: "",
                password: ""
            },
            success: null,
            err: null,
            text: "Sign In",
        }
    },
    methods:{
        async signIn(){
            //First check to make sure all the fields has been filled out
                if(this.details.emailAddress && this.details.password){
                //Make a request to the endpoint for signing in
               this.$store.dispatch("signin", {
                   details: this.details
               })

               .catch((error) =>{
                   if(error.message == "Request failed with status code 500"){
                       this.err = "Oops! It seems like your credentials did not match"
                       this.clearAlerts();
                   }
               })
            }  
        },
        redirectForEmployer(){
            setTimeout(() => {
                this.$router.push({path: '/dashboard/overview'})
            }, 5000);
        },
          redirectForTalents(){
            setTimeout(() => {
                this.$router.push({path: '/overview'})
            }, 5000);
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
.signup{
    background: #fff;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    .content{
         margin: 0 1.5rem;
        form{
            max-width: 350px;
            width: 100%;
            // margin: 0 auto;
            padding: 0rem .5rem;
            border-radius: 4px;
            // box-shadow: 0 0.75rem 1.5rem rgba(18,38,63,.03);
           .logo__img{
               max-width: 140px;
           }
            p{
                color: #9aa9bd;
                font-size: 1rem;
                padding-bottom: .4rem;
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
                border:1px solid #DDDDDD;
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
            .alert{
                font-size: .85rem;
            }
            .form__btn{
                background: #2568EF;
                border: none;
                width: 100%;
                padding: .8rem 0;
                border-radius: 5px;
                color: #fff;
                outline: none !important;
                &:hover{
                    background: #ec7112;
                    transition: all ease .5s;
                }
            }
                p{
                    color: #627081;
                }
                a{
                    color: #2568EF;
                    font-size: .85rem;
                    text-decoration: none;
                }
        }
    }
}
</style>