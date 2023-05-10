import { RemovalPolicy, aws_dynamodb } from 'aws-cdk-lib';buildSync({
    bundle:true,
    entryPoints:[path.resolve(__dirname,'bin','cdk_work.ts')],
    format:'cjs',
    outfile:path.join(__dirname,,'dist','cdk_work.js' ),
    platform:'node',
    sourceMap:true,
    target:'node14'
  });
import {AttributeType, BillingMode, Table} from 'aws-cdk-lib/aws-dynamodb'
import { Construct } from 'constructs';

export class TodoTable{
     private todoTable:Table
    constructor(scope:Construct) {
       this.todoTable=new Table(scope,'table',{
        partitionKey:{name:'id', type: AttributeType.STRING},
        sortKey:{name:'createdAt', type:AttributeType.STRING},
        removalPolicy:RemovalPolicy.DESTROY,
        tableName:'TodoTable',
        billingMode:BillingMode.PAY_PER_REQUEST,
        
       }) 
        this.todoTable.addGlobalSecondaryIndex({
            partitionKey:{name:'owner',type:AttributeType.STRING},
            indexName: 'OwnerGlobalIndex'
        })

    }
    public get getTable(){
        return this.todoTable
    }
}