export default {
    //Method to show side bar in small screens
    methods:{
    showSideBar(){
        const sideBar = document.querySelector('.dashboard__left')
        const navLinks = document.querySelector('.links')
        sideBar.classList.toggle('showNav');
        },
        removeSideBar(){
            const sideBar = document.querySelector('.dashboard__left')
            sideBar.classList.remove('showNav')
        },
    }
}