import { Component, OnInit } from '@angular/core';
import { faXmark, faBell, faBrush, faListCheck } from '@fortawesome/free-solid-svg-icons';
import { JobStatus } from 'src/app/models/jobStatusModel';

@Component({
  selector: 'app-job-status-dropdown',
  templateUrl: './job-status-dropdown.component.html',
  styleUrls: ['./job-status-dropdown.component.css']
})
export class JobStatusDropdownComponent implements OnInit {

  constructor() { }


  bellIcon = faBell;

  //Getting the Job status data
  // jobStatus: JobStatus[] = [];

  jobStatus = [
    {
      "IsCompleted": true,
      "JobGroupId": "1650891358_Demo_Calpo_API",
      "Name": "M254",
      "Progress": "85.00",
      "State": 3,
      "Priority": 30,
      "Datetime_Received": "2022-04-25T12:55:58.2534335Z",
      "Datetime_StartProcess": "2022-04-25T12:58:07.1308312Z",
      "Datetime_Completed": "2022-04-25T12:58:49.8842378Z",
      "Jobs": [
        {
          "JobId": "1650891358257",
          "DataType": "Testcandidate Prep",
          "Progress": "100.00%",
          "Remarks": "Job completed successfully.",
          "ReceivedBy": "Demo_Calpo_API",
          "State": 3,
          "Priority": 30,
          "IsCompleted": true,
          "IsSuccess": true,
          "Datetime_Received": "2022-04-25T12:55:58.2586818Z",
          "Datetime_StartProcess": "2022-04-25T12:58:42.9110562Z",
          "Datetime_Completed": "2022-04-25T12:58:49.8287674Z"
        },
        {
          "JobId": "1650891358281",
          "DataType": "Overall Anly",
          "Progress": "100.00%",
          "Remarks": "Job completed successfully.",
          "ReceivedBy": "Demo_Calpo_API",
          "State": 3,
          "Priority": 30,
          "IsCompleted": true,
          "IsSuccess": true,
          "Datetime_Received": "2022-04-25T12:55:58.2810443Z",
          "Datetime_StartProcess": "2022-04-25T12:58:31.1451952Z",
          "Datetime_Completed": "2022-04-25T12:58:42.8468384Z"
        },
        {
          "JobId": "1650891358297",
          "DataType": "APS",
          "Progress": "100.00%",
          "Remarks": "Job completed successfully.",
          "ReceivedBy": "Demo_Calpo_API",
          "State": 3,
          "Priority": 30,
          "IsCompleted": true,
          "IsSuccess": true,
          "Datetime_Received": "2022-04-25T12:55:58.2974048Z",
          "Datetime_StartProcess": "2022-04-25T12:58:23.1304858Z",
          "Datetime_Completed": "2022-04-25T12:58:31.0872647Z"
        }
      ]
    },
    {
      "IsCompleted": false,
      "JobGroupId": "1650891358_Demo_Calpo_API",
      "Name": "M255",
      "Progress": "64.00",
      "State": 3,
      "Priority": 30,
      "Datetime_Received": "2022-04-25T12:55:58.2534335Z",
      "Datetime_StartProcess": "2022-04-25T12:58:07.1308312Z",
      "Datetime_Completed": "2022-04-25T12:58:49.8842378Z",
      "Jobs": [
        {
          "JobId": "1650891358257",
          "DataType": "Testcandidate Prep",
          "Progress": "100.00%",
          "Remarks": "Job completed successfully.",
          "ReceivedBy": "Demo_Calpo_API",
          "State": 3,
          "Priority": 30,
          "IsCompleted": true,
          "IsSuccess": true,
          "Datetime_Received": "2022-04-25T12:55:58.2586818Z",
          "Datetime_StartProcess": "2022-04-25T12:58:42.9110562Z",
          "Datetime_Completed": "2022-04-25T12:58:49.8287674Z"
        },
        {
          "JobId": "1650891358281",
          "DataType": "Overall Anly",
          "Progress": "100.00%",
          "Remarks": "Job completed successfully.",
          "ReceivedBy": "Demo_Calpo_API",
          "State": 3,
          "Priority": 30,
          "IsCompleted": true,
          "IsSuccess": true,
          "Datetime_Received": "2022-04-25T12:55:58.2810443Z",
          "Datetime_StartProcess": "2022-04-25T12:58:31.1451952Z",
          "Datetime_Completed": "2022-04-25T12:58:42.8468384Z"
        },
        {
          "JobId": "1650891358297",
          "DataType": "APS",
          "Progress": "100.00%",
          "Remarks": "Job completed successfully.",
          "ReceivedBy": "Demo_Calpo_API",
          "State": 3,
          "Priority": 30,
          "IsCompleted": true,
          "IsSuccess": true,
          "Datetime_Received": "2022-04-25T12:55:58.2974048Z",
          "Datetime_StartProcess": "2022-04-25T12:58:23.1304858Z",
          "Datetime_Completed": "2022-04-25T12:58:31.0872647Z"
        }
      ]
    },
    {
      "IsCompleted": false,
      "JobGroupId": "1650891358_Demo_Calpo_API",
      "Name": "M255",
      "Progress": "5.00",
      "State": 3,
      "Priority": 30,
      "Datetime_Received": "2022-04-25T12:55:58.2534335Z",
      "Datetime_StartProcess": "2022-04-25T12:58:07.1308312Z",
      "Datetime_Completed": "2022-04-25T12:58:49.8842378Z",
      "Jobs": [
        {
          "JobId": "1650891358257",
          "DataType": "Testcandidate Prep",
          "Progress": "100.00%",
          "Remarks": "Job completed successfully.",
          "ReceivedBy": "Demo_Calpo_API",
          "State": 3,
          "Priority": 30,
          "IsCompleted": true,
          "IsSuccess": true,
          "Datetime_Received": "2022-04-25T12:55:58.2586818Z",
          "Datetime_StartProcess": "2022-04-25T12:58:42.9110562Z",
          "Datetime_Completed": "2022-04-25T12:58:49.8287674Z"
        },
        {
          "JobId": "1650891358281",
          "DataType": "Overall Anly",
          "Progress": "100.00%",
          "Remarks": "Job completed successfully.",
          "ReceivedBy": "Demo_Calpo_API",
          "State": 3,
          "Priority": 30,
          "IsCompleted": true,
          "IsSuccess": true,
          "Datetime_Received": "2022-04-25T12:55:58.2810443Z",
          "Datetime_StartProcess": "2022-04-25T12:58:31.1451952Z",
          "Datetime_Completed": "2022-04-25T12:58:42.8468384Z"
        },
        {
          "JobId": "1650891358297",
          "DataType": "APS",
          "Progress": "100.00%",
          "Remarks": "Job completed successfully.",
          "ReceivedBy": "Demo_Calpo_API",
          "State": 3,
          "Priority": 30,
          "IsCompleted": true,
          "IsSuccess": true,
          "Datetime_Received": "2022-04-25T12:55:58.2974048Z",
          "Datetime_StartProcess": "2022-04-25T12:58:23.1304858Z",
          "Datetime_Completed": "2022-04-25T12:58:31.0872647Z"
        }
      ]
    }
  ]


  ngOnInit(): void {
  }

}
