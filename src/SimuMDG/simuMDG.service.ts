import { Injectable } from '@nestjs/common';
import { stat } from 'fs';

@Injectable()
export class TasksService {

    // Simulated server response for tasks
    private positiveResponse = {
        status: 200,
        message: "Tasks fetched successfully",
        data: [
            {
                id: 1,
                title: "Task 1",
                description: "Description for Task 1",
                completed: false,
                createdAt: "2024-06-01T10:00:00Z"
            }
        ]
    }

    private negativeResponse = {
        status: 500,
        message: "Failed to fetch tasks",
        error: "Internal Server Error"
    }



    postResponse(msisdn: any) {
        const msisdnNum = Number(msisdn);

        if (isNaN(msisdnNum) || msisdnNum <= 0) {
            return {
                status: 400,
                message: "Invalid MSISDN provided",
                error: "Bad Request"
            };
        } else if(!msisdnNum){
            return {
                status: 400,
                message: "MSISDN is required, animal",
            }
        }else{
            return {
                status: 200,
                message: "Nice MSISDN provided bro, are you sure you are not a bot?",
                error: "No errors crack"
            };
        }
    }

    getPinResponse(pin: any){
        const pinNumb = Number(pin);

        if (!pinNumb || isNaN(pinNumb) || pinNumb <= 0) {
            return {
                status: 400,
                message: "Invalid PIN provided",
                error: "Bad Request"
            };
        } else {
            return {
                status: 200,
                message: "Nice PIN provided bro, are you sure you are not a fucking botardo ?",
                error: "No errors crack"
            };
        }
    }

    getPositiveResponse() {
        return this.positiveResponse;
    }

    getNegativeResponse() {
        return this.negativeResponse;
    }
}
