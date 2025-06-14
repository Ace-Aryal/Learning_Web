// dont use context api just like that . create a wrapper and pass as props to avoid re rendering issuue

// use custom hook for useCOntext which returns context but handles the error of using it outside the context

// ----------------------------------------------------------------------------------------------------------
// **Sementics abd <>
//  use <Fragmenet > if you want to returtn mulple elensts but with key . sth in like grid 
// use sementic tags for accessibility
// header | main |aside| footer
// header : header tag > nav > ul >li > Link
// h1-h6, p , q, strong and em for emphasis not for styling use span and div for styling , code , article ,footer , sumary , captions


// use state and useEffect mistakes:
//1. batching state | soln: using prevstate
// 2. condionally rendering hooks | soln : use return keyword after hooks
//3. diretly mutating objects | soln: use spread
//4. sice components renrender on useState no need to keep dervied vaiables in useState jut use const, you have fname , lnane no need for use state for fullname
//5. if state value doesnt changes even after calling setter then component doesnt re rendrer but it does for objects| soln

useEffect(()=>{
// do dth
},[object.primitiveKey]) // only trigger if the primitive values insdide state changes

// 6. Not using custom hooks . note utils !== react custom hooks
// custom hooks have hooks like useState , useEffeft , useContext etc inside them . 
// used to perform same actions inside multiple components so just use custom hooks often

//7. stale closures : like setInterval they inherit the value of the variale when the fn was created so every interval we ned to clearInrerval and recreate the fn 
// for fresh variables or just use prevValue useState style
//8. You can easily mimic debouncing ( cancelling previous requsest inside useEffecr with abortController)

// Reusing
-if you want to use JSX markup again create component
-if you want to use function without react hooks again create utility functions
-if you want to use function with react hooks again create custom hooks

//hybrid data fetchig
1. Abstract interactive ui that needs data into client component
2. call the server /database /api on rsc but dont await 
3. pass the unawaited promsie to client component, use suspense to wrap the component
4. use(Promise) which suspends the client component just like await 
5. wallah fetched via server and also user interactivity
