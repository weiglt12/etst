import { resolve } from 'url';
import { NodeDetails } from '@/store/modules/nodes/types';

export class ApiService {

  
    addOrder(data: FormData) {
        new Promise((resolve, reject) => {
            resolve({});
        });
    }
    getConvertible(data: FormData) {
        new Promise((resolve, reject) => {
            resolve({});
        });
    }
    getBalance(data: FormData) {
        new Promise((resolve, reject) => {
            resolve({});
        });
    }
    getNodeOrders(data: FormData) {
        new Promise((resolve, reject) => {
            resolve({});
        });
    }
    getSig(addr: string, hash: string) {
        new Promise((resolve, reject) => {
            resolve({});
        });
    }
    getServerInfo() {
        new Promise((resolve, reject) => {
            resolve({});
        });
    }
    closeApp(addr: string, data: FormData) {
        new Promise((resolve, reject) => {
            resolve({});
        });
    }
    login(data: FormData):Promise<any> {
        return new Promise((resolve, reject) => {
            console.log(data.get('pass'))
            if(data.get('pass') == 'pass') {
                resolve({ data: true });
            } else {
                reject({data: false})
            }
            
        });
    }
    updatePass(data: FormData) {
        new Promise((resolve, reject) => {
            resolve({});
        });
    }
  
    getManagerPort() {
        new Promise((resolve, reject) => {
            resolve({});
        });
    }
  
    checkLogin() {
        new Promise((resolve, reject) => {
            resolve({});
        });
    }
    getAllNode():any {
        return new Promise((resolve, reject) => {
            const result = {data: [{
                key: '0354530f0b758fe88c65f9baf41d03d76beff88ce3681ada34324aed44deb90407',
                last_ack_time: 234324,
                received: 24.54,
                receivedUnit: 'TB',
                sent: 395,
                sentUnit: 'GB',
                start_time: 34932903433,
                type: 'TCP',
                label: 'Node1',
            },
            {
                key: 'da34324aed44deb904070354530f0b758fe8beff88ce3681a8c67f9baf41d03d76',
                last_ack_time: 234324,
                received: 24.54,
                receivedUnit: 'TB',
                sent: 395,
                sentUnit: 'GB',
                start_time: 34903433,
                type: 'Antenna',
                label: 'Node2',
            }]}
            resolve(result);
        });
    }
    setNodeLabel(label:string):any {
        return new Promise((resolve, reject) => {
            resolve({data: {
                key: '0354530f0b758fe88c65f9baf41d03d76beff88ce3681ada34324aed44deb90407',
                last_ack_time: 234324,
                received: 24.54,
                receivedUnit: 'TB',
                sent: 395,
                sentUnit: 'GB',
                start_time: 34932903433,
                type: 'TCP',
                label: label,
                ip: '192.168.2.2',
                manager: {
                    ip: '192.168.2.1',
                }
            }});
        });
    }
    getNodeStatus(data: FormData) {
        new Promise((resolve, reject) => {
            resolve({});
        });
    }
    setNodeConfig(addr: string, data: FormData) {
        new Promise((resolve, reject) => {
            resolve({});
        });
    }
    updateNodeConfig(addr: string) {
        new Promise((resolve, reject) => {
            resolve({});
        });
    }
    getMsgs(addr:any) {
        new Promise((resolve, reject) => {
            resolve({});
        });
    }
    getApps(addr: string) {
        new Promise((resolve, reject) => {
            resolve({});
        });
    }
  
    getNodeInfo(addr: string):Promise<any> {
        return new Promise((resolve, reject) => {
            resolve({data: {
                key: addr,
                last_ack_time: 234324,
                received: 24.54,
                receivedUnit: 'TB',
                sent: 395,
                sentUnit: 'GB',
                start_time: 34932903433,
                type: 'TCP',
                label: 'Node1',
                ip: '192.168.2.2',
                manager_ip: '192.168.2.1',
                
            }});
        });
    }
    reboot(addr: string) {
        new Promise((resolve, reject) => {
            resolve({});
        });
    }
    getAutoStart(addr: string, data: FormData) {
        new Promise((resolve, reject) => {
            resolve({});
        });
    }
    setAutoStart(addr: string, data?: FormData) {
        new Promise((resolve, reject) => {
            resolve({});
        });
    }
    checkAppMsg(addr: string, data?: FormData) {
        new Promise((resolve, reject) => {
            resolve({});
        });
    }
    searchServices(addr: string, data?: FormData) {
        new Promise((resolve, reject) => {
            resolve({});
        });
    }
    getServicesResult(addr: string, data?: FormData) {
        new Promise((resolve, reject) => {
            resolve({});
        });
    }
    connectSSHClient(addr: string, data?: FormData) {
        new Promise((resolve, reject) => {
            resolve({});
        });
    }
    connectSocketClicent(addr: string, data?: FormData) {
        new Promise((resolve, reject) => {
            resolve({});
        });
    }
    runSSHServer(addr: string, data?: FormData) {
     // return this.handleReq(addr, '/node/run/sshs', data);
    }
    runSockServer(addr: string, data?: FormData) {
     // return this.handleReq(addr, '/node/run/sockss', data);
    }
    runNodeupdate(addr: string) {
     // return this.handleReq(addr, '/node/run/update');
    }
    getNodeupdateProcess(addr: string) {
     // return this.handleReq(addr, '/node/run/updateProcess');
    }
    getDebugPage(addr: string) {
      //return this.handleReq(addr, '/debug/pprof');
    }
    checkUpdate(addr: string) {
      //return this.handleReq(addr, '/node/run/checkUpdate');
    }
    saveClientConnection(data: FormData) {
      //return this.handlePost(this.connUrl + 'saveClientConnection', data);
    }
    removeClientConnection(data: FormData) {
     // return this.handlePost(this.connUrl + 'removeClientConnection', data);
    }
    editClientConnection(data: FormData) {
      //return this.handlePost(this.connUrl + 'editClientConnection', data);
    }
    SetClientAutoStart(data: FormData) {
     // return this.handlePost(this.connUrl + 'setClientAutoStart', data);
    }
    getClientConnection(data: FormData) {
     // return this.handlePost(this.connUrl + 'getClientConnection', data);
    }
  
    getWalletNewAddress(data: FormData) {
     // return this.handleReq(this.bankUrl, 'skypay/tools/newAddress', data);
    }
    getWalletInfo(data: FormData) {
     // return this.handleReq(this.bankUrl, 'skypay/node/get', data);
    }
    jsonp(url: string) {
      if (url === '') {
        
      }
     // return axios.jsonp(url, this.callbackParm);
    }
}