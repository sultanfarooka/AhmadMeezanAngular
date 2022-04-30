export class JobStatus {
  isCompleted: boolean;
  jobGroupId: string;
  name: string;
  progress: string;
  state: number;
  priority: number;
  datetime_Received: string;
  datetime_StartProcess: string;
  datetime_Completed: string;
  jobs: Job[];
}

export class Job {
  jobId: string;
  dataType: string;
  progress: string;
  remarks: string;
  receivedBy: string;
  state: number;
  priority: number;
  isCompleted: boolean;
  isSuccess: boolean;
  datetime_Received: string;
  datetime_StartProcess: string;
  datetime_Completed: string;
}
