export class Page {
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

export class DataSections {
  name: string; //GROUP NAME
  pages: Page[];
}

export class DataTypes {
  name: string; //e.g Overall Anly:
  dataSections: DataSections[];
  selected: boolean;
  __metaInfo: MetaInfo[];
}

export class MainSection {
  name: string; // e.g Single measurement / multiple....
  dataTypes: DataTypes[];
  __metaInfo: MetaInfo[];
}

export class MetaInfo {
  browseButtonName: string;
  contentCollectionName: string;
  aliasTable: string;
  processAllAtOnce: boolean;
  selectedMeasurements: string[] = []; //depotContentId:
}

export class ChannelData {
  tabName: string;
  mainSections: MainSection[];
}

export class ConfigRes {
  sucess: boolean;
  Data: ChannelData[];
}




export class channelsRes {
  success: boolean;
  data: channelsData;
  errorMessage: string
}

export class channelsData {
  name: string;
  direction: string;
  mptype: string;
  datatype: string;
  quantity: string;
  quantityref: string;
  x_axis_type: string;
  shape: string;
  nth_octave: string;
  sub_type: string;
  data_format: string;
}