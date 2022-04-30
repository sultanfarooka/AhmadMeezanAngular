export class depot {
  IsMeasurements: boolean;
  DepotContentId: string;
  DepotContentType: string;
  DepotContentName: string;
  DepotContentBrowseURL: string;
}

export class depotApiRes {
  success: boolean;
  Data: depot[];
  errorMessage: string;
}
