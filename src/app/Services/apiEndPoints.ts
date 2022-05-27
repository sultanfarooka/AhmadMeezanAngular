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
  measurementTreeChildNodesApi: '/api/PAKcloud/browseCloud',
  // channelsDataApi: '/api/PAKcloud/getMeasurements/',
  channelsDataApi: '/api/Config/getUIMapping',
  userName: '/api/PAKcloud/getAuthUser',
  getChannels: '/api/PAKcloud/getMeasurementChannels',

  //authentication endPoints
  isAuthenticated: '/api/pakcloud/IsAuthenticated',
  authenticate: '/api/PAKcloud/Authenticate',
  SendTabConfig: '/api/Jobs',
};

export const apiEndPointsLocalDev = {
  baseURL: 'http://localhost:3000/', //
  measurementTreeNodesApi: 'rootNodes',
  measurementTreeChildNodesApi: 'childNodes',
  getChannels: 'getChannels',
  channelsDataApi: 'channelsData',
  userName: 'username',
  SendTabConfig: 'jobs',

  //authentication endPoints
  isAuthenticated: 'isauthenticated',
  authenticate: 'authenticate',
};
