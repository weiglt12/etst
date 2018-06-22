import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { NodesState } from './types';
import { RootState } from '../../types';

export const state: NodesState = {
    nodes: undefined,
    currentNode: undefined,
};

const namespaced: boolean = true;

export const nodes: Module<NodesState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};
