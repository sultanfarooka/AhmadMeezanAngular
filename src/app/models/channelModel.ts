export interface Page {
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
  name: string; //GROUP NAME
  pages: Page[];
}

export interface DataTypes {
  name: string; //e.g Overall Anly:
  dataSections: DataSections[];
  selected: boolean;
  __metaInfo: MetaInfo[];
}

export interface MainSection {
  name: string; // e.g Single measurement / multiple....
  dataTypes: DataTypes[];
  __metaInfo: MetaInfo[];
}

export interface MetaInfo {
  browseButtonName: string;
  contentCollectionName: string;
  aliasTable: string;
  processAllAtOnce: boolean;
  selectedMeasurements: string[]; //"depotContentId":
}

export interface ChannelData {
  tabName: string;
  mainSections: MainSection[];
}

export interface ConfigRes {
  sucess: boolean;
  Data: ChannelData[];
}
