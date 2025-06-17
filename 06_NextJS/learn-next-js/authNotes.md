#Auth notes

### where to run auth checks ?

- in the server actions before any db work as they are fetch api behind the scenes and may be triggered by anyone
- in the route handlers if you are using any same logic , also check authorization check they may be different users even if they are in same level of hierarchy
  -check access control too before navigating to the page or making intercations to the server,
- RSCs on every render/ navigation via middleware or page
- also force dynamic render or do autrh check directly on page for highly sensetive pages
- Data access layer , exactly what i did with that appwrite auth and db services and make auth check there too

### How ?

- its usually via jwt token in the cookie checkinmg if someone is logged in, provided by auth providers

### not to do ?

- do not add auth check in layout as they do no re reder on every page navigation
- add them in pages , yes it is duplication but it is worth it , dont want that ?
- then use middle ware , this also prevents accidental dynamic rendering of the pages from reading cookies
- do not handle sign up , login , logout directly in the header, refactor them to their own components to prevent dynamic rendering

## Data Acess Layer ( DAL )

- React components are meant for reuasblility so do not use direct db methods , they may be used in the page that is public for displaying data. there instead use the layer like you meade during the appwrite and run auth check there if the user has auth or not , this way you prevent your db ( auth exactly at the mouth)
- make a file and make functions or methods an abstract layer
- not protecting the page but protectig the db methods which is what we want to protect
- do this and you can use the roles in pages too for Ui feedback
- with dal you dont have to add auth check on server actions and components
- But be sure that these fns make your app dynamic so if you want it staically rendered you still have the middleware
- if a component is going through a lot of auth checks and is not that much of a high risk you can wrap the fn with cache method from next js
- also a good thing to make a utility fn / DAl fn that checks the auth and returns user id and auth = true for simplw auth where you dont need access control

## sepetate server utils (server only package) and client utils (client only package) and hybdrid utils they can also be lablled Server-utils-DAL if it is DAL
