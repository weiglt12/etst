import { ActionTree } from 'vuex';
import axios from 'axios';
import { AuthState } from './types';
import { RootState } from '../../types';
import {ApiService} from '../../../services/api-mock'
import router from '../../../router'
const apiService = new ApiService()

export const actions: ActionTree<AuthState, RootState> = {
    login({ commit }, password): void {
        var data: FormData = new FormData()
        data.set('pass', password)
        apiService.login(data)
            .then((result: any) => {
                if (result.data === true) {
                    commit('login')
                    router.push('app/nodes');
                }
                } )
            .catch((error: any) => {
                commit('loginError', 'Wrong Password');
        });
}};
