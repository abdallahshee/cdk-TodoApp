import {Stack, StackProps} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {AuthorizationType, LambdaIntegration, RestApi} from 'aws-cdk-lib/aws-apigateway'
import {Code, Function, IFunction, Runtime} from 'aws-cdk-lib/aws-lambda'
import {GraphqlApi,GraphqlApiProps} from 'aws-cdk-lib/aws-appsync'
import * as appsync from 'aws-cdk-lib/aws-appsync'
import {Effect, PolicyDocument, PolicyStatement} from 'aws-cdk-lib/aws-iam'
import { ITable, Table } from 'aws-cdk-lib/aws-dynamodb';
import {TodoTable} from '../lib/database'
import {TodoLambda} from '../lib/lambdas'



export class CdkWorkStack extends Stack {
  private todoTable:Table
  private getBooks: IFunction


 
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const table=new TodoTable(this)
    this.todoTable=table.getTable

 const API=new RestApi (scope, 'BooksAPI', {
  restApiName: 'BooksAPI',
  retainDeployments:false,
 })

this.getBooks=new TodoLambda(this).thelambda
 const BookResource=API.root.addResource('books')
 BookResource.addMethod('GET', new LambdaIntegration(this.getBooks),{
  authorizationType:AuthorizationType.COGNITO,
  // authorizationScopes:
  
 })








}}
