import Vue from 'vue';
import Router from 'vue-router';
import Home from './HomePage/home.vue';

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes:[
        {
            path:'/ProjectHome',
            name:'HomePage' ,
            component: Home
        },
        {
            path:'/ErrorPage',
            name:'ErrorPage' ,
            component:() => import('./ErrorPage/ErrorPage.vue')
        },
        {
            path:'/MainFormPage',
            name:'MainFormPage' ,
            component:() => import('./components/CommonComponents/MainFormPage')
        },
        {
            path:'/In01',
            name:'newIncome' ,
            component:() => import('./components/InputPage/newIncome')
        },
        {
            path:'/In02',
            name:'newExpenditure' ,
            component:() => import('./components/InputPage/newExpenditure')
        }
    ]
});