<template>
  <div class="new">
      <div class="container">
          <div class="row">
              <div class="col-md-4 text">
                  <h6>Our Newsletter</h6>
                  <p>Sign up for industry news & insights.</p>
              </div>
              <div class="col-md-8">
                  <form>
                      <input type="text" class="form-control" placeholder="Name">
                       <input type="text" class="form-control" placeholder="Email Address">
                       <input type="submit" placeholder="Submit" value="Subscribe Now">
                  </form>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
.new{
    background: #FF5E14;
    padding: 2rem 0;
    // margin-bottom: 2rem;
    font-family: 'Poppins';
    .text{
        h6{
            color: #fff;
            font-weight: bold;
        }
        p{
            font-size: .9rem;
            color: #fff;
            opacity: .8;
        }
    }
    form{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        grid-gap: 10px;
        input{
            border-radius: 0;
            background: #F9F9F9;
            box-shadow: none;
            font-size: .85rem;
            height: 3rem;
            &::placeholder{
            font-size: .85rem;
            }
        }
        input[type=submit]{
            background: #121C45;
            border: none;
            color: #fff;
        }
    }
}
</style>