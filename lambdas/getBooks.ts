import {APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler} from 'aws-lambda'
import {User} from '../models/User'

export const handler:APIGatewayProxyHandler=async(event:APIGatewayProxyEvent):Promise<APIGatewayProxyResult>=>{
    const users:User[]=[
        {
           firstname:'Abdallah',
           lastname:'Shee',
           address:[
            {
            email:'develop@getMaxListeners.com',
            city:'Mombasa'
           }
        ]
        },

        {
            firstname:'Nuru',
            lastname:'Abdallah',
            address:[
                {
             email:'develop@fulla.com',
             city:'Mombasa'
            },
            {
                email:'pato@javadev.com',
                city:'Kakamega'}
            ]
         },

         {
            firstname:'Patrick',
            lastname:'Eshikumo',
            address:[
                {
             email:'pato@javadev.com',
             city:'Kakamega'
            },{
            email:'pato@javadev.com',
            city:'Kakamega'},
            {
                email:'pato@javadev.com',
                city:'Kakamega'
            }
                ]
         },
  
    ]
    return {
        statusCode:200,
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            items:users
        })
    }
}