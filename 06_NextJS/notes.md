## Next.js server tips

1. Not protecting server actions propertly ------ x
- Always validate shape of data with zod before qurering db

2. Want to validate if email is valid or not use ArcJet,

3. Also verify the requests in API routes

4. Using params and search params for data , validate their sturcture ,
also for confidential pages use auth check

5. SQL injection attacks using 1==1 or sth like that, 
safe solution, validate email format or any input format with zod , then use ORM to query database

6. Use RBAC 

7. Use rate limiting , generally using auth + userId and referrring it . Upstash is nice

8. Bot protection 

9. Server-only package if you dont want any utility function to run on client that may leak data, 
also

10. Seperate client and server functions , Pages and utils into serve and client folder structure

11. Use Data Access Layer for sensitive information and use it most of the time
