<template>
  <div class="contact">
    <Navbar />
    <div class="contact__heading">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>Contact Us</h2>
                    <p>The support team is always ready to help out!</p>
                </div>
            </div>
        </div>
    </div>
    <div class="contact__details">
       <div class="container">
            <div class="row">
            <div class="col-md-6 text">
                <h1>Reach out to us today!</h1>
                <p>We have a top notch team reaady to help you should you find any difficulties using our platform</p>
                <div class="details pt-3">
                    <h5><i class="fa fa-home"></i>Contact Office</h5>
                    <p>22 Eastern bye-pass, Bristol City, United Kingdom</p>
                    <h5><i class="fa fa-envelope"></i>Support Email</h5>
                    <p>support@customsolutionsng.com</p>
                    <h5><i class="fa fa-phone"></i> Phone Number</h5>
                    <p><a href="tel:08122717322">08122717322</a></p>
                </div>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-5">
                <h3>Send us a message</h3>
                <form action="">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Full name *" v-model="name">
                    </div>
                     <div class="form-group">
                        <input type="text" class="form-control" placeholder="Email address *" v-model="email">
                    </div>
                     <div class="form-group">
                        <input type="text" class="form-control" placeholder="Phone number *" v-model="phone">
                    </div>
                    <textarea name="" class="form-control" placeholder="Your message" id="" cols="10" rows="6" v-model="message"></textarea>
                    <div v-if="err" class="alert alert-danger">
                        {{err}}
                    </div>
                    <div v-if="success" class="alert alert-success">
                        {{success}}
                    </div>
                    <button type="submit" class="message__btn">Send Message</button>
                </form>
            </div>
        </div>
       </div>
    </div>
    <News />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import News from "@/components/News.vue"
import Footer from "@/components/Footer.vue"
export default {
components:{
    Navbar,
    News,
    Footer
},
data(){
    return{
        name:null,
        email:null,
        phone:null,
        message:null,
        err:null,
        success:null
    }
},
methods:{
    sendMessage(){
        //Check if the user has filled in the form
        if(!this.name || !this.email || !this.phone || !this.message){
            this.err = 'All fields are required'
        }else{
            //Send the message to the databaseddd
            db.collections('messages').add({
                name:this.name,
                email:this.email,
                phone: this.phone,
                message:this.message
            })
           this.success = 'Message sent. The team will get back to you shortly'
        }
    }
}
}
</script>

<style lang="scss" scoped>
.contact__heading{
    background: linear-gradient(rgba(4,9,30,.5), rgba(4,9,30,.5)), url('../assets/images/worker.jpg');
    background-size: cover;
    background-position: center;
    padding: 10rem 0;
    color:#fff;
    h2{
        font-weight: bold;
        font-size: 2.5rem;
    }
    p{
        font-size: .9rem;
        opacity: .6;
    }
}
.contact__details{
    padding: 4rem 0;
    .fa-home, .fa-envelope, .fa-phone{
        margin-right: 1rem;
        color: #313131;
        font-size: 1rem;
    }
    h5{
        font-weight: 400;
        font-size: 1rem;
        color: #627081;
    }
    h1{
        font-weight: bold;
        color:#121C45;
    }
    p, a{
        color: #627081;
        font-size: .9rem;
        text-decoration: none;
    }
}
h3{
    color: #121C45;
    font-weight: bold;
    padding-bottom: 1rem;
}
form{
    input{
        height: 3rem;
        font-size: .9rem;
        box-shadow: none;
        border-radius: 1px;
        &::placeholder{
            font-size: .9rem;
           color: #627081;
        }
    }
    textarea{
        font-size: .9rem;
        box-shadow: none;
        border-radius: 1px;
        margin-bottom: 1.5rem;
    }
    .message__btn{
        background: #FF5E14;
        color: #fff;
        border:none;
        padding: 1rem 3rem;
        border-radius: 50px;
        outline: none;
    }
}
</style>