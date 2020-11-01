<template>
  <div class="profile">
  <div class="profile__wrapper mb-5">
    <form>
      <div class="form-group row">
        <label for="firstname" class="col-sm-4 col-form-label"> <strong>First Name</strong> <br> <small>Customize your first name</small></label>
        <div class="col-sm-7">
          <input type="text" class="form-control" v-model="firstName">
        </div>
      </div>
       <div class="form-group row">
        <label for="lastname" class="col-sm-4 col-form-label"> <strong>Last Name</strong> <br><small>Customize your last name</small></label>
        <div class="col-sm-7 mt-2">
          <input type="text" class="form-control" v-model="lastName">
        </div>
      </div>
      <div class="form-group row">
        <label for="othername" class="col-sm-4 col-form-label"> <strong>Email Address</strong> <br><small>Customize your email address</small></label>
        <div class="col-sm-7 mt-2">
          <input type="text" class="form-control" v-model="emailAddress"  disabled>
        </div>
      </div>
      <div class="form-group row">
        <label for="lastname" class="col-sm-4 col-form-label"> <strong>Company Contact Number</strong> <br><small>Customize your company mobile number</small></label>
        <div class="col-sm-7 mt-2">
          <input type="tel" class="form-control" v-model="phoneNumber">
        </div>
      </div>
      <div class="button__wrapper text-center pt-4">
        <button class="form__btn">Save Changes</button>
      </div>
  </form>
  </div>
  </div>
</template>

<script>
//Bring in mixins
export default {
  data(){
    return{
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: ""
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.profile{
  padding: 0 2rem;
  .profile__wrapper{
    box-shadow: -3px 3px 12px rgba(10,46,101,.03);
    background: #fff;
    padding: 3rem 3rem;
    border-radius: 5px;
    form{
      padding: 1rem 0;
      label{
        small{
          color: #627081;
          font-weight: 400;
          opacity: .8;
        }
      }
      input{
        height: 3.5rem;
        box-shadow: none;
      }
      .form__btn{
        background: $secondary-color;
        color: #fff;
        border: none;
        padding: 1rem 2rem;
        border-radius: 5px;
      }
    }
  }
}
</style>