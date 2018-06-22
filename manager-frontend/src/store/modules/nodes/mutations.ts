import { MutationTree } from 'vuex';
import { NodesState } from './types';

export const mutations: MutationTree<NodesState> = {
    updateNodes(state, nodes) {
        state.nodes = nodes;
    },
    updateCurrentNode(state, node) {
        state.currentNode = node;
    },
};
