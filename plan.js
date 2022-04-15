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
Start or continue renting by creating a payment document depending on payment collection
(how to create a payment document?)
[[[
There has to be some kind of viewing houses that meet certain criterias
There has to be the processing of these criterias some kind of enforcement has to be implemented.
After viewing these kinds of houses, there has to be a button to open a modal that presents a form
to submit the payment to the back end.

After submitting the payment the house is still available among other houses until the merchant
collects payment.

It is really a problem of presenting some of the building, sending a simple create request,
and then go through the trouble of presenting some of the buildings so that most people can't
pay for the same house twice or two people paying for the same house.
]]]
(ability to pay rent any house that doesn't have a payment yet or any house whose payment
 has been made only in the first month of three months from now), 
 [[[
     displayed houses criteria:
     1.House whose id doesn't exist yet in payment collection
     2.House that exists in payment collection but meets following criterias:
        i.Sum of money paid in three consecutive months starting from current month going back
            must be less that the cost of rent in three months. [decision is based on past months]
            Current month payment, Current month - 1 payment, Current month - 2 payment
 ]]]
 and a payment cannot 
 exceed the rent due payment in a particular month, 
 but a there can be payments made to 
 the same house in one month as long as it doesn't exceed the limit.

 Summary Need 1: Create payments depending on payment collection.

 Input to the creating payments: 
    payment collection: for creating an array of house ids that must not be displayed
    house collection: for creating an array of houses to display depending on payment collection input

Todo today:
Explain Tenant Page Clearly in 500 sentences
Purpose of front end engineering
[1-50]
1.They are two collections in db10, one is house collection and second is payment collection
2.This app is all about populating these two collections, but also how the collections are populated
3.Collections populating is achieved by using a specific front end design, that controls data flow 
4.There is an idea that it is best to build all the application logic and db access not in the ui
5.There is an idea that all problem solving and business logic should be implemented inside db
6.And front end will only be used for showing db content, and submiting requests, what are the pros?
7.First of all I disagree that the app is all about populating the db and how it is populated
8.It is true that db population and its mechanisms are important but no user is going to use that
9.There is a strong need for beautiful user interfaces that attracts people and that traffic is success
10.And enough traffic is good for back end because the app get useful with more users,
11.Applying all business logic in back end wins, so in this case what are the functions that would
12.need to be implemented in the database access class, but before answering this what are the benefits
13.of implementing business logic in the database access class
14.when building a web application, there are three principles to bare in mind. From the customer's
15.point of view, the application should be simple, but what is a simple user interface?
16.A simple user interface in web development, focuses on anticipating what users might need to do
17.and ensuring that the interface has elements that are easy to access, understand, to use to
18.facilitate those actions. UI brings together concepts from interaction design, visual design and
19.information architecture.
20.Interaction design focuses on creating engaging interfaces with well thought out behaviors.
21.Understanding how users and technology communicate with each other is fundamental to this field.
22.With this understanding, you can anticipate how someone might interact with the system, fix  
23.problems early, as well as invent new ways of doing things.
24.Best practices for designing interactions
25.Consider these qualities and associated questions when creating digital products that have an
26.interactive design
27.Define how users can interact with the interface?
28.What can a user do with their mouse, finger, or stylus to directly interact with the interface?
29.This includes pushing buttons, dragging and dropping across the interface, etc.
30.What commands can a user give, that aren't directly a part of the product, to interact with it?
31.An example of an "indirect manipulation" is when user hits "Ctrl+C", they expect to be able to
32.copy a piece of content.
33.Give users clues about behaviors before actions are taken?
34.What about the appearance (color, shape, size, etc) gives the user a clue about how it may function?
35.These help the user understand how it can be used.
36.What information do you provide to let a user know what will happen before they perform an action
37.These tell users what will happen if they decide to move forward with their action. This can
38.include meaningful label on a button, instructions before a final submission, etc.
39.Anticipate and mitigate errors?How?
40.Are there constraints put in place to prevent errors?
41.The poka-yoka principle says that placing these constraints forces the user to adjust behavior in
42.order to move forward with their intended action.
43.Do error messages provide a way for the user to correct the problem or explain why the error
44.occurred? Helpful error messages provide solutions and context.
45.Consider system feedback and response time?
46.What feedback does a user get once an action is performed? When a user engages and performs an
47.action, the system needs to respond to acknowledge the action and to let know what it is doing
48.How long between an action and a product's response time? Responsiveness (latency) can be chara-
49.cterized at four levels: immediate (less that 0.1 second), stammer (0.1-1 second), interruption
50.(1-10 seconds), and disruption (more than 10 seconds).



Purpose of front end engineering
[51-100]
1.Strategically think about each elements? Are the interface elements a reasonable size to interact
2.with? Fitts' law says that elements, such as buttons, need to be big enough for a user to be able
3.to click it. This is particulary important in a mobile context that likely includes a touch
4.component. Are edges and corners strategically being used to locate interactive elements like menus
5.Fitts' law also states that since the edge provides a boundary that the mouse or finger cannot
6.go beyond, it tends to be a good location for menus and buttons
7.Are you following standards? Users have an understanding of how interface elements are supposed to
8.function. You should only depart from the standards if a new way improves upon the old.
9.Simplify for Learnability? Is information chunked into seven (plus or minus two) items at a time?
10.George Miller found that people are only able to keep five to nine items in the short-term memory
11.before they forgot or had errors. Is the user's end simplified as much as possible? Tesler's law
12.of conservation notes that you need to try to remove complexity as much as possible from the user
13.and instead build the system to take it into account. With that said, he also notes to keep in
14.mind that things can only be simplified to a certain point before they no longer function.
15.Are familiar formats used? Hick's law states that decision time is affected by how familiar a
16.format is for a user to follow, how familiar they are with the choices, and the number of choice
17.they need to decide between.
18.Visual Design Basics: focuses on the aesthetics of a site and its related materials by strategically
19.implementing images, colors, fonts, and other elements. A successful visual design does not take
20.away from the content on the page or function. Instead, it enhances it by engaging users and
21.helping to build trust and interest in the brand.
22.Basic elements of visual design
23.The basic elements that combine to create visual designs include the following:
24.Lines connect two points and can be used to help define shapes, make divisions, and create textures
25.All lines, if they're straight, have a length, width and direction.
26.Shapes are self-contained areas. To define the area, the graphic artist uses lines, differences
27.in value, color, and/or texture. Every object is composed of shapes.
28.Color palette choices and combinations are used to differentiate items, create depth, and emphasis
29.and/or help organize information. Color theory examines how various choices psychologically impact
30.users. Textures refers to how a surface feels or is perceived to feel. By repeating an element, a
31.texture will be created and a pattern formed. Depending on how a texture is applied, it may be
32.used strategically to attract or defer attention. Typography refers to which fonts are chosen,
33.their size, alignment, color, and spacing. Form applies to three-dimensional objects and describes
34.their volume and mass. Form may be created by combining two or more shapes and can be further
35.enhanced by different tones, textures, and colors.
36.Principles for creating a visual design
37.A successful visual design applies the following principles to the elements noted above and
38.effectively brings them together in a way that makes sense. When trying to figure out how to use
39.the basic elements consider:
40.Unity has to do with all elements on a page visually or conceptually appearing to belong together.
41.Visual design must strike a balance between unity and variety to avoid a dull or overwhelming
42.design. 
43.Information Architecture Basics: focuses on organizing, structuring, and labeling content in an
44.effective and sustainable way. The goal is to help users find information and complete tasks.
45.To do this, you need to understand how the pieces fit together to create the larger picture, how
46.items relate to each other within the system.
47.IA helps users understand where they are what they've found, what's around, and what to expect.
48.As a result, your IA informs the content strategy through identifying word choice as well as informing
49.user interface design and interaction design through playing a role in the wireframing and
50.prototyping processes, understanding industry standards for creating, storing, accessing and presenting information

*/

// CREATING PAYMENT DOCUMENT ALGORITHM [200 lines of code]
/*
what are the criterias of entering data in the payment collection.

payment collection's documents only based decision

0.Dealing with amount criteria [[]]
i.Deciding if the first payment is enough
ii.Preparing the output at this stage.

1.Dealing with status criteria [[]]
i.when payment is first created
ii.every time payment is going to be created



1.house id and time based decision:
i.find if the house id exists in the payment collection:
 i.i.if the house doesn't exists then create the payment document // return or keep going
 i.ii.if the house does exist in the payment collection follow the following protocol:
    i.ii.i.keep all the house payment documents that exist in the payment collection based on id
    i.ii.ii.sort the documents based on date, ascending order
    i.ii.iii.delete all documents except the ones that exist in the latest year which is req element's year
    // now I have managed to have the relevant documents level 1
    i.ii.iv.create a two dimensional array where each element contains documents that have same months
    KEEP GOING. THE ONLY RETURN IS THE FIRST RETURN.

2.ds_four is the input of this stage.
purpose of this stage: continue dealing with date criteria
i.for each returned objects, use the req amount to fill the payment amount until the req is >= 0.
i.i.log the input of this stage, and prepare the input to test this stage.
i.ii.select the house and store the house rent payment amount for use
i.iii.for each month, calculate the sum of payments made if sum < rent then do the following:
    i.iii.i.add the months sum to req sum, if new sum > rent, update req sum and move to next month
    i.iii.i if new sum < rent, move to ii.
    i.iii.ii. if new sum == rent, move to ii. 
ii.return an array of objects and the req object with the amount updated.
ii.i.the input is the updated months array, and the updated value of req amount
ii.ii.prepare the output of this stage, which is the the new months array and req amount
ii.ii.i.if the req amount is unchanged then there are no debts
ii.iii.ii.if the req amount is changed then debts were present
3.
purpose of this stage: finish dealing with date criteria, deal with comments extensively.
i.perform create or update for each object in argument
ii.perform only create for the second argument if amount > 0, and put it in the next month.
*/
//[I decide to deal with update and delete first because it is easy].
// UPDATE PAYMENT DOCUMENT ALGORITHM [100 lines of code] 
/*
what are the criterias of reading data in the payment collection.
payment collection's documents only based decision
1.For now only creating the payment, one can use update method.
*/

// DELETE PAYMENT DOCUMENT ALGORITHM [100 lines of code]
/*
what are the criterias of reading data in the payment collection.
payment collection's documents only based decision
1.For now deleting method should be off
*/


// READ PAYMENT DOCUMENT ALGORITHM [100 lines of code]
/*
what are the criterias of reading data in the payment collection.
payment collection's documents only based decision
I think there should be only one read all functionality, but it returns categorised output
1.what is the first thing the client want to see? 
Houses that can be rented for the first time from a variety of owners merchants
i.select all houses and payment collections from the database
ii.use the payment collection to filter the houses that get returned 
based on houses that doesn't exist in the payment collection.
2.what is the second thing the client want to see? A List of rented houses, for a specific user
i.input a current user
ii.return houses that current user rented using filtering.
*/

/*
// create the user interface to consume these backend apis.
Tenant
input: current tenant identifier
the User Interface Flow Can Be the following:
1.View Houses that can be rented
2.Ability to start renting by creating payment
3.View Houses that are rented by specific user
4.Ability to keep paying rent on a specific house.

Merchant cannot create payment, but he can view, so what about creating a special route where merchant
can:
input: current merchant identifier
    i.view houses that they are renting,
    ii.payments made to merchant from a specific house

*/

/*
now the backend apis have enough functionalities
*/

/*
two main user interface tasks remaining.
1.start and finish building tenant user interface components = deploy to heroku
2.add the payment user interface components to the merchant side = deploy to heroku
3.use the complete app to make sure it works = deploy to heroku

4.add authentication and use it to protect all routes. = deploy to heroku


*/

/*
1.start and finish building tenant user interface components = deploy to heroku

Things to do:
Payment Use Case
1.View houses that can be rented
2.By Clicking on one house, user view more infomation or fill a form to rent
3.Submiting the form closes the more information div.

Continuing Paying Use Case
1.
*/