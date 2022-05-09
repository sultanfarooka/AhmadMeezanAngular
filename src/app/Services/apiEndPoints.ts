import { environment } from 'src/environments/environment';

export const apiEndPointsProd = {
  baseURL: environment.production, //
  measurementTreeNodesApi: 'http://localhost:3000/rootNodes',
  measurementTreeChildNodesApi2: 'http://localhost:3000/childNodes',

  channelsDataApi: 'https://xyz_server:44382/api/Config/getUIMapping',
};

export const apiEndPointsDev = {
  // baseURL: 'http://localhost:3000/',
  baseURL: 'https://xyz_server:44382', // while using proxy use . as base url

  measurementTreeNodesApi: '/api/PAKcloud/browseCloud',
  measurementTreeChildNodesApi2: 'http://localhost:3000/childNodes',

  channelsDataApi: '/api/Config/getUIMapping',
};


export const apiEndPointsLocalDev = {
  baseURL: 'http://localhost:3000/', //
  measurementTreeNodesApi: 'rootNodes',
  measurementTreeChildNodesApi2: 'childNodes',

  channelsDataApi: 'channelsData',
  userName: 'username'
};