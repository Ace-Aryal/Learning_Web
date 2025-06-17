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
