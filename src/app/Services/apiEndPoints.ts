import { environment } from "src/environments/environment"

export const apiEndPointsProd = {

    baseURL: environment.production, //
    measurementTreeNodesApi: 'http://localhost:3000/rootNodes',
    measurementTreeChildNodesApi2: 'http://localhost:3000/childNodes',

    channelsDataApi: 'https://wv1485:44392/api/Config/getUIMapping',

}

export const apiEndPointsDev = {

    // baseURL: 'http://localhost:3000/',
    baseURL: '.', // while using proxy use . as base url



    measurementTreeNodesApi: 'http://localhost:3000/rootNodes',
    measurementTreeChildNodesApi2: 'http://localhost:3000/childNodes',

    channelsDataApi: 'https://wv1485:44392/api/Config/getUIMapping',

}