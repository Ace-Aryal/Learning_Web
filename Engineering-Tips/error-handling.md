# Error handling patterns 

## In React
1. Expected Errors (Generally: Client side validation such as form validation , file upload validation etc.)
-Use RHF with ZOD to handle these type of errors , and if these are not the option use the state provided
 by tools like react dropzone or use useState to handle these expected validation errors. 
In this we do not throw error rather we use visual indicarors or return object with status to handle
error gracefully

2.Unexpectes Erros
- Rendering Errors:
 Always wrap the suspected rendering error components in a error boundary for client component and error.tsx for server component. 
You can aslo go granular with this in both RSC and CC with error boundary.
Error thrown by browser is caught by Error Boundary. 
-Fetch errors: 
 usually our fetch error is handled by React Query but if we want async erros also to be thrwon to error boundary use the `react-error-boundary` 
package
