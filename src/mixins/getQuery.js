export default {
    created(){
        this.getQuery()
    },
    methods:{
        getQuery(){
            if(this.$route.query.deleted){
              let message = "The Listing was successfully deleted and now removed from your job ads"
              this.alertMessage = message;
              this.clearAlerts();
            }else if(this.$route.query.created){
              let message = "Congratulations. Your job listing was successfully created"
              this.alertMessage = message;
              this.clearAlerts();
            }else if(this.$route.query.edited){
              let message = "Job listing successfully edited"
              this.alertMessage = message
              this.clearAlerts();
            }
            
          },
    }
}