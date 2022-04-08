// Iterative Model
// Versions of the Deployed: 10
/*
Build a monolithic app [only one database]
Functional Requirements
1.Merchant can crud houses (batch processing only)
Creating Houses --> DONE
1.0.[create a house schema]
1.1.[upload a batch excel file on the front end, and convert them to json file]
1.2.[send json to back server]
1.3.[get all houses already in collection, store houses that don't already exist]
Updating Houses
1.4.[get a json of a house to update]
1.5.[find that house in the houses collection]
1.6.[update that specific house]
Deleting Houses
1.7.[get a json of a house to delete]
1.8.[find that house in the houses collection]
1.9.[delete that specific house]
2.Merchant can manage payments
Creating Payments
2.1.[create a payments schema]
2.2.[upload a single json at a time on the front end]
2.3.[send json to back server]
2.4.[get all payments already in collection, store payments that don't already exist]
3.Client can read houses
Read Houses
3.1.
3.2.
3.3.
4.Client can send rent payment
Post payments
4.1.
4.2.
4.3.
5.Client can read history of payments
Read payments
5.1.
5.2.
5.3.
6.Authorization and authentication
[[extra feature]]
7.Chat between merchant and client

[[summary]]
1.Merchant can crud houses (batch processing only)
2.Merchant can crud payments
3.Client can read houses
4.Client can rent house by making the first payment [crud]
5.Client can read history of payments
6.Authorization and authentication
[[extra feature]]
7.Chat between merchant and client

//Best approach
//One final Api = 1 final UI
Apis
1.Create (Emphasis is Backend) and (Emphasis is frontend) Read Houses = Build Final UI
2.Update (Emphasis is Backend) and (Emphasis is frontend) Read Houses = Build Final UI
3.Delete (Emphasis is Backend) and (Emphasis is frontend) Read Houses = Build Final UI
4.Create (Emphasis is Backend) and (Emphasis is frontend) Read Due Payment = Build Final UI
5.Update (Emphasis is Backend) and (Emphasis is frontend) Read Due Payment = Build Final UI
6.Delete (Emphasis is Backend) and (Emphasis is frontend) Read Due Payment = Build Final UI
7.Authorization and authentication = Build Final UI

14 Different Tasks.
Background processes
1.According to who signed in, there will be restrictions of what one can do

TOTAL APIS TO BUILD = 7.
TOTAL UI FINAL COMPONENTS = 7.
*/