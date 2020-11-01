export default {
    created(){
        this.getQuery()
    },
    methods:{
        getQuery(){
            if(this.$route.query.deleted){
              let message = "The Package was successfully deleted and now removed from your packages list"
              this.alertMessage = message;
              this.clearAlerts();
            }else if(this.$route.query.created){
              let message = "Congrats. Your package has been successfully created"
              this.alertMessage = message;
              this.clearAlerts();
            }else if(this.$route.query.edited){
              let message = "Package was successfully updated"
              this.alertMessage = message
              this.clearAlerts();
            }
            
          },
    }
}