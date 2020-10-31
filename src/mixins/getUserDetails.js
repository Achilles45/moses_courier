export default {
    created(){
        this.getUserDetails()
    },
    methods:{
       getUserDetails(){
        let user = JSON.parse(localStorage.getItem("user"));
        console.log(user)
        this.fullName = user.fullName,
        this.emailAddress = user.emailAddress
       }
    }
}