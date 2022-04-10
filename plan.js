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
Emphasis on Merchant
1.Create (Emphasis is Backend) and (Emphasis is frontend) Read Houses = Build Final UI
2.Update (Emphasis is Backend) and (Emphasis is frontend) Read Houses = Build Final UI [today]
3.Delete (Emphasis is Backend) and (Emphasis is frontend) Read Houses = Build Final UI [today]
Emphasis on Tenant
4.Create (Emphasis is Backend) and (Emphasis is frontend) Read Due Payment = Build Final UI [today]
5.Update (Emphasis is Backend) and (Emphasis is frontend) Read Due Payment = Build Final UI [today]
6.Delete (Emphasis is Backend) and (Emphasis is frontend) Read Due Payment = Build Final UI [today]

7.Sync payment and housing [Building Final UI and Back end Integration]

8.Authorization and authentication = Build Final UI

14 Different Tasks.
Background processes
1.According to who signed in, there will be restrictions of what one can do

TOTAL APIS TO BUILD = 7.
TOTAL UI FINAL COMPONENTS = 7.

Task 1: Describe the tenant's user experience
Task 2: Break the tenant's user experience into small tasks
Task 3: Start implementing tenant's user experience

Task 1: Tenant's user experience:
Need 1: Start or continue renting by creating a payment document depending on payment collection (ability to pay rent any house that doesn't have a payment yet or any house whose payment has been made only in the first month of three months from now), and a payment cannot exceed the rent due payment in a particular month, but a there can be payments made to the same house in one month as long as it doesn't exceed the limit.
Summary Need 1: Create payments depending on payment collection
Need 2: View all houses that aren't rented in a particular month, even if rent has not been paid for the next two month.
Summary Need 2: View by filtering houses depending on payment collection
Need 3: Viewing all pending rents in one place, (the only place to delete from payment collection)with the ability to delete payment if it has not been collected yet.
Summary Need 3: View all pending rents depending on payment collection
Need 4: Viewing all rented houses in one place, and that is where a user should keep paying rent
Summary Need 4: View all rented houses depending on payment collection

Task 2: Small tasks in creating tenant's user experience
Need 1:
*/
