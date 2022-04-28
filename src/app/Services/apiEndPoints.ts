import { environment } from "src/environments/environment"

export const apiEndPointsProd = {

    baseURL: environment.production, //

    measurementTreeNodesApi: 'http://localhost:3000/rootNodes',

    measurementTreeChildNodesApi2: 'http://localhost:3000/childNodes',

    channelsDataApi: 'http://localhost:3000/channelsData',

}

export const apiEndPointsDev = {

    baseURL: 'http://localhost:3000/',

    measurementTreeNodesApi: 'http://localhost:3000/rootNodes',

    measurementTreeChildNodesApi2: 'http://localhost:3000/childNodes',

    channelsDataApi: 'http://localhost:3000/channelsData',

}