import {Code, Function, IFunction, Runtime} from 'aws-cdk-lib/aws-lambda'
import { Construct } from 'constructs';
// import {} from 'aws-cdk-lib'
import {  RetentionDays } from 'aws-cdk-lib/aws-logs';

export class TodoLambda {
    private todoLambda:IFunction
    constructor(scope:Construct) {
       this.todoLambda=new Function (scope,'todoLambda',{
        functionName:'TodoLambda',
        description:'Getting todos from the database',
        runtime:Runtime.NODEJS_16_X,
        code:Code.fromAsset('lambdas'),
        handler:'getBooks.handler',
        logRetention:RetentionDays.ONE_WEEK
       })
       
        
    }
 public get thelambda(){
    return this.todoLambda
 }
}