//Dashboard sections for a company or employer
import Dashboard from '../authpages/Dashboard'
import Overview from '../authpages/Overview'
import Profile from '../authpages/Profile'
import CreateListing from '../authpages/CreateListing'
import MyListings from '../authpages/MyListings'
import MySingleListing from '../authpages/MySingleListing'
import EditListing from '../authpages/EditListing'
import Messages from '../authpages/Messages'
import SingleMessage from '../authpages/SingleMessage'
import ResetPassword from '../authpages/ResetPassword'
//End of Dashboard section

const routes = [
     //Employers section statrts here
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta:{
      requiresAuth: true,
      is_employer: true
    },
    children: [
      {
        path: 'overview',
        component: Overview
      },
      {
        path: 'profile',
        component: Profile
      },
      {
        path: 'create-listing',
        component: CreateListing
      },
      {
        path: 'listings',
        component: MyListings
      },
      {
        path: '/details/listings/:id',
        component: MySingleListing
      },
      {
        path: '/listings/edit/:id',
        component: EditListing
      },
      {
        path: '/dashboard/messages',
        component: Messages
      },
      {
        path: '/messages/:id',
        component: SingleMessage
      },
      {
        path: '/dashboard/reset-password',
        component: ResetPassword
      }
    ]
  },
]

export default routes;