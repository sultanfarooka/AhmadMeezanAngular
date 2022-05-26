export class depot {
  IsMeasurements: boolean;
  DepotContentType: string;
  DepotContentId: string;
  DepotContentName: string;
  DepotContentBrowseURL: string;
}

export class depotApiRes {
  success: boolean;
  Data: depot[];
  errorMessage: string;
}
