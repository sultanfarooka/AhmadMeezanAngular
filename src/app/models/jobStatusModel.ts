export class JobStatus {
  IsCompleted: boolean;
  jobGroupId: string;
  Name: string;
  Progress: string;
  State: number;
  Priority: number;
  Datetime_Received: string;
  Datetime_StartProcess: string;
  Datetime_Completed: string;
  Jobs: Job[];
}

export class Job {
  JobId: string;
  DataType: string;
  Progress: string;
  Remarks: string;
  ReceivedBy: string;
  State: number;
  Priority: number;
  IsCompleted: boolean;
  IsSuccess: boolean;
  Datetime_Received: string;
  Datetime_StartProcess: string;
  Datetime_Completed: string;
}
