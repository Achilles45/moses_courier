import { mapActions } from 'vuex'
export default {
    methods:{
        logout(){
            this.$store.dispatch("logout")
        }
    }
}