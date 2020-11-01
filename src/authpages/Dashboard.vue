<template>
  <div class="wrapper">
    <div class="dashboard__wrapper">
      <div class="dashboard__left">
        <div class="logo__wrapper pt-4 text-center d-flex align-items-center">
          <div class="box">
            <span>SY</span>
          </div>
          <h5 class="text-light">System Administrator</h5>
        </div>
    
        <nav class="nav__wrapper">
           <ul>
             <li @click="removeSideBar()"><router-link to="/dashboard/create-listing" class="add"><i class="fa fa-plus"></i> &nbsp;&nbsp; CREATE PACKAGE</router-link></li>
          <li @click="removeSideBar()"><router-link to="/dashboard/overview"><i class="fa fa-home icon"></i>&nbsp; Overview</router-link></li>
          <li @click="removeSideBar()"><router-link to="/dashboard/listings"><i class="fa fa-edit icon"></i>&nbsp; All Shipments</router-link></li>
          <li @click="removeSideBar()"><router-link to="/dashboard/messages"><i class="fa fa-envelope icon"></i>&nbsp; Messages</router-link></li>
           <!-- <li @click="removeSideBar()"><router-link to="/dashboard/reset-password"><i class="fa fa-lock icon"></i>&nbsp; Change Password</router-link></li>
          <li @click="logout()" class="logout"><i class="fa fa-power-off icon"></i>&nbsp; Logout</li> -->
        </ul>
        </nav>
      </div>
      <div class="dashboard__right">
         <div class="heading d-flex justify-content-between pt-4 pb-3 align-items-center">
          <div>
            <h5>Dashboard</h5>
          <h6>Overview of your activities</h6>
          </div>
          <div>
            <div class="d-none d-md-block">
              <div class="d-flex align-items-center">
                <h6 class="pr-2">Hi, System administrator</h6>
                <div class="box">
                   <span>SY</span>
              </div>
              </div>
            </div>
             <div @click="showSideBar()" class="navbar__toggler">
          <i class="fa fa-bars"></i>
        </div>
          </div>
      </div>
      <div class="message">
        Please remember that anyone with your password can access your data. Share it with caution with only trusted friends.
      </div>
       <transition name="animate" enter-active-class="animate__animated animate__slideInRight">
         <router-view></router-view>
       </transition>
      </div>
    </div>
  </div>
</template>

<script>
//Bring in the mixins file
import logoutMixin from '../mixins/logoutMixin';
import showSideBar from '../mixins/showSideBar';
export default {
  mixins: [logoutMixin, showSideBar],
  data(){
    return{
      firstName: "",
      lastName: "",
      emailAddress: "",
      accountType: "",
      phoneNumber: ""
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
.wrapper{
  height: auto;
  font-family: 'Nunito';
  //Dashboard wrapper
  .dashboard__wrapper{
    display: grid;
    height: auto;
    grid-template-columns: 300px 1fr;
    //Dashboard left
    .dashboard__left{
      background: #FFFFFF;
      height: 100%;
      box-shadow: 0px 0px 13px 0px rgba(82, 63, 105, 0.05);
      position: fixed;
      left: 0;
      width: 20%;
      .logo__wrapper{
        padding: 0rem 1rem;
        .box{
        background: #2568EF;
        padding: 1rem;
        border-radius: 4px;
        color: #fff;
        font-weight: bold;
        }
        h5{
          text-align: left;
          color: #48465b !important;
          padding-left: 1rem;
        }
      }
      .logo__img{
        max-width: 200px;
        height: auto;
      }
      small{
        opacity: .8;
      }
      .nav__wrapper{
        padding: 2rem 1rem;
        .icon{
          // color: #fff;
          margin-right: 20px;
        }
        ul li a, .logout{
          color: #48465b;
          // opacity: .7;
          font-weight: bold;
          line-height: 4;
          text-decoration: none;
          display: block;
          margin-bottom: .5rem;
          font-size: .9rem;
          padding: 0 2rem;
          cursor: pointer;
          &:hover{
            background: #2568EF;
            color: #fff;
            font-weight: bold;
            border-radius: 4px;
          }
        }
        .add{
          background: #2568EF;
          color: #fff;
          font-weight: bold;
          border-radius: 4px;
          font-size: .95rem;
        }
      }
    }

    //Dashboard right
    .dashboard__right{
      position: absolute;
      left: 20%;
      background: #F2F2F8;
      width: 80%;
      padding-bottom: 20rem;
      .heading{
        padding: 0rem 1.3rem;
        background: #fff;
        box-shadow: 0px 0px 13px 0px rgba(82, 63, 105, 0.05);
        .navbar__toggler{
          display: none;
        }
        h6{
          color: #74788d;
          font-size: .9rem;
          // font-weight: bold;
          // opacity: .6;
        }
        .box{
         background: #2568EF;
        padding: .3rem .5rem;
        border-radius: 4px;
        color: #fff;
        font-weight: bold;
      }
      }
      .message{
        background: #FFB822;
        padding: 1rem 2rem;
        margin: 1rem 1.3rem;
        border-radius: 4px;
        font-weight: bold;
        font-size: .9rem;
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .dashboard__left{
    display: none;
  }
  .dashboard__right{
    width: 100% !important;
    left: 0 !important;
    padding: 0 !important;
    .navbar__toggler{
      display: block !important;
    }
  }
}
    .showNav{
    display: block !important;
    z-index: 10;
    width: 70% !important;

}

  h2{
    font-size: 1.3rem;
  }
</style>