export interface Page {
    id: string //GUID;
    name: string;
    connectedPageName: string;
    selected: boolean;
    scaledTo: string;
    scaledFrom: string;
    isScaled: boolean;
    channelSelection: boolean;
    channelSelectionText: string;
    selectedChannels: string[];
}

export interface DataSections {
    id: string //GUID;
    name: string; //GROUP NAME
    pages: Page[];

}

export interface DataTypes {
    id: string //GUID;
    name: string; //e.g Overall Anly:
    dataSections: DataSections[];
    __metaInfo: MetaInfo[];
}

export interface MainSection {
    id: string //GUID;
    name: string; // e.g Single measurement / multiple....
    dataTypes: DataTypes[];
    __metaInfo: MetaInfo[];
}

export interface MetaInfo {
    id: string //GUID;
    browseButtonName: string;
    contentCollectionName: string;
    aliasTable: string;
    processAllAtOnce: boolean;
    selectedMeasurements: string[] //"depotContentId": 

}

export interface ChannelData {
    id: string //GUID;
    tabName: string;
    mainSections: MainSection[];
}