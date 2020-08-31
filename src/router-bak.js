import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from './views/welcome.vue'
import Stafflogin from './views/staff-login.vue'
import Patientlogin from './views/patient-login.vue'
import Staffhome from './views/staff-home.vue'
import Patientsearch from './views/patient-search.vue'
import Billing from './views/billing.vue'
import Registration from './views/registration.vue'
import Viewrecords from './views/view-records.vue'
import Appointments from './views/appointments.vue'

Vue.use(VueRouter)

const routes = [
     {
        path: '/',
        name: 'welcome',
        component: Welcome
      },
      {
        path: '/staff-login',
        name: 'stafflogin',
        component: Stafflogin
      },
      {
        path: '/patient-login',
        name: 'patientlogin',
        component: Patientlogin
      },
      {
        path: '/staff-home',
        name: 'staffhome',
        component: Staffhome
       },
       {
        path: '/registration',
        name: 'registration',
        component: Registration
        },
        {
        path: '/patient-search',
        name: 'patientsearch',
        component: Patientsearch
        },
        {
          path: '/billing',
          name: 'billing',
          component: Billing
        },
        {
          path: '/appointments',
          name: 'appointments',
          component: Appointments
        },
        {
          path: '/view-records',
          name: 'viewrecords',
          component: Viewrecords
        }
]

const router = new VueRouter({mode: 'history', routes: routes})
export default router
