<template>
  <div class="reset">
      <div class="wrapper">
          <div class="d-flex align-items-center justify-content-between">
             <div class="d-flex align-items-center">
                  <img src="../assets/images/pwd.png" class="msg_img" alt="">
                <div class="pl-3">
                  <h5>Passwords & Settings</h5>
                  <p>To change your password, make sure you are the owner of this account.</p>
              </div>
             </div>
             <div class="d-none d-lg-block">
                 <img src="../assets/images/bar.png" class="bar" alt="">
             </div>
          </div><hr><br>
          <form action="">
              <span class="title">
                  <span>Old Password</span>
              </span><br><br>
            <div class="row">
                <div class="col-md-7">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Your old password">
                    </div>
                </div>
            </div><br>
            <span class="title package">
                  <span>New Details</span>
              </span><br><br>
              <div class="row">
                  <div class="col-md-7">
                      <div class="form-group">
                          <input type="text" class="form-control" placeholder="New password">
                      </div>
                  </div>
              </div>
               <div class="row">
                  <div class="col-md-7">
                      <div class="form-group">
                          <input type="text" class="form-control" placeholder="Confirm new password">
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-md-7">
                      <button type="submit" class="form__btn">Chnage Password</button>
                  </div><br><br>
              </div>
          </form>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.reset{
padding: 0 1.3rem;
height: 100vh;
.wrapper{
    background: #fff; 
    padding: 2rem;
    border-radius: 4px;
    margin-bottom: 1rem;
    .msg_img, .bar{
        max-width: 80px;
        height: auto;
    }
     h5{
        color: #48465b;
    }
    p{
        color:#74788d;
        font-size: .9rem;
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
         input{
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
                background: #FFB822;
            }
            }
    }
}
}
</style>