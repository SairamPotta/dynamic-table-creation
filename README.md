# Dynamic-Table-Creation

Dynamic Table Creation component can create a table using JSON data given by the user.
We can use the table creation component, this is a reusuable component.

## Output Format

 <p align='center'><img src="https://github.com/SairamPotta/dynamic-table-creation/blob/master/Images/dynamic%20table.png"></p>
 

 To preview demo of Dynamic Table Creation project, [Click here](https://angular-aqccfs.stackblitz.io/)
 
 

## Getting Started
Download the Dynamic Table creation component and install the required packages and run the application.


### Installing
    - npm install

### Run server
    - ng serve

## Adding accordion list component in your project
Download the dynamic table creation component and use it in your project.



####  Use this below syntax to send data to accordion component
    <app-table-creation [jsonData]='data' [headers]='header' [search]="true" [sorting]="true"> </app-table-creation>

### Input Decorator Info
- <b>headers</b> is the Input type for TableCreation component of table headers.
- <b>jsonData</b> is the Input type for TableCreation component of table rows.
- <b>search</b> is the Input type for TableCreation component used for Filtering the data.
- <b>sorting</b> is the Input Type for TableCreation component used for Sorting the data.

   
### JSON location

#### headers and jsonData
  header and jsonData can take from either external link(assets) then use http request to get Json data or directlyn use json format into component.ts by creating json format variable file  .

### search and sorting
  search and sorting are the boolean data only. If sorting requires then use the input decorator as sorting="true", similar to searching also.

## Example JSON data
<pre>
<b>headers = ["Names", "Location", "Pincode"];</b>
<b>data= [
    {
      'name':'A',
      'location': 'MTM',
      "pincode": 510210
    },
    {
      'name':'B',
      'location': 'MAS',
      "pincode": 501201
    }];
 </b>
</pre>
