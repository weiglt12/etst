import { ActionTree } from 'vuex';
import axios from 'axios';
import { NodesState } from './types';
import { RootState } from '../../types';
import {ApiService} from '../../../services/api-mock'
const apiService = new ApiService()

export const actions: ActionTree<NodesState, RootState> = {
    fetchAll({ commit }): void {
        apiService.getAllNode().then((result:any) => {
            commit('updateNodes', result.data)
        })
    }, 
    fetchCurrentNode({ commit }, addr) {
    
       apiService.getNodeInfo(addr).then((result:any) => {
            commit('updateCurrentNode', result.data)
       })
    },
    changeNodeLabel({ commit }, label) {
        apiService.setNodeLabel(label).then((result:any) => {
            commit('updateCurrentNode', result.data)
       })
    },
    rebootNode({ commit }, addr) {
        apiService.reboot(addr)
    }

}
