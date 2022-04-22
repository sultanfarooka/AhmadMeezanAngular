export class depot {
    isMeasurements: boolean;
    depotContentId: string;
    depotContentType: string;
    depotContentName: string;
    depotContentBrowseURL: string;
}

export class depotApiRes {
    success: boolean;
    data: depot[];
    errorMessage: string;
}
