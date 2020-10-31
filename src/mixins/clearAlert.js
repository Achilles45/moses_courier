export default {
    methods:{
        clearAlerts(){
            setTimeout(() => {
              document.querySelector('.alert').remove();
            }, 5000);
          }
    }
}