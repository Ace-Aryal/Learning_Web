// tanstack_query_reference.js
// 📘 TanStack Query Reference Notes
// This file serves as a comprehensive guide to TanStack Query (formerly React Query), covering why we need it,
// its key features, comparison with other data fetching methods, and usage examples for useQuery, useMutation, and more.

// --------------------------------------------------------------
// 1. TanStack Query and Why We Need It
// --------------------------------------------------------------
// TanStack Query is a powerful library that simplifies asynchronous data fetching,
// caching, synchronizing, and updating "server state" in React apps. It reduces boilerplate
// code compared to manually managing loading, error, and caching with useEffect/useState.
// It offers features like automatic refetching, background updates, and query caching.


// --------------------------------------------------------------
// 2. TanStack Query vs. React Router Loader vs. useEffect for Data Fetching
// --------------------------------------------------------------
// - useEffect: You manually fetch data and update state; you must handle loading/error states and caching yourself.
// - React Router Loader: Integrates data fetching with route loading, useful for SSR-like behavior, but with limited caching/refetching control.
// - TanStack Query: Provides built-in caching, background refetching, and state management. It minimizes boilerplate and improves performance.

// --------------------------------------------------------------
// 3. Key Features of TanStack Query
// --------------------------------------------------------------
// - **Caching:** Caches data based on query keys to avoid redundant requests.
// - **Stale Time:** Data remains "fresh" for a set time; no refetch occurs during this period.
// - **Cache Time (Garbage Collection):** Unused queries are removed from the cache after a specified duration.
// - **Background Refetching:** Data is refetched in the background when stale.
// - **Optimistic Updates:** Immediate UI updates for mutations before server confirmation.
// - **Pagination & Infinite Scrolling:** Built-in support for handling paginated data.
// - **Polling:** Automatic periodic refetching of data.
// - **Error Handling & Retries:** Automatic retries for failed requests.

// --------------------------------------------------------------
// 4. React Query Dev Tools
// --------------------------------------------------------------
// React Query Dev Tools help you inspect query states, cache data, and troubleshoot performance issues.
// Installation: npm install @tanstack/react-query-devtools
// Wrap your app with <ReactQueryDevtools initialIsOpen={false} /> to use it.

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// --------------------------------------------------------------
// 5. Caching and Garbage Collection
// --------------------------------------------------------------
// TanStack Query caches fetched data using unique query keys. 
// "Stale Time" defines how long data is considered fresh; beyond that, it becomes stale.
// "Cache Time" (or GC time) determines how long unused data stays in memory before being garbage collected.

// --------------------------------------------------------------
// 6. GC Time, Stale Time, Fresh Data, and Stale Data
// --------------------------------------------------------------
// - **Fresh Data:** Data is fresh if it's within the staleTime window (e.g., 10 seconds).
// - **Stale Data:** Data beyond the staleTime; it’s still displayed but will trigger a background refetch.
// - **GC (Cache) Time:** Duration for which inactive data is retained (e.g., 60 seconds) before being removed.

// Example configuration:
const queryOptionsExample = {
    staleTime: 10000,       // Data remains fresh for 10 seconds
    cacheTime: 60000,       // Cached data is kept for 60 seconds after the last use
    refetchInterval: 30000, // Data is refetched every 30 seconds (polling)
    refetchOnWindowFocus: true, // Refetch on window focus
};

///********************************************************************************************************** */

const fetchData = async () => {
    const res = await fetch('https://api.github.com/users/ace-aryal');
    if (!res.ok) throw new Error('Failed to fetch data');
    return res.json();
};

const { data, error, isLoading, isError, isPending } = useQuery({
    queryKey: ['data'],
    queryFn: fetchData
}); // dependency and fn
//✅ isLoading === true → When the query is fetching for the first time and has no cached data.

// ✅ isPending === true → When the query is currently fetching, whether it's:

// the first fetch (cold load)or a background refetch (stale data) or manually triggered with refetch().

if (isLoading) return <div>Loading...</div>; // loading comp
if (error) return <div>Error: {error.message || "Something Went Wrong"}</div>;// error comp

return (

    <div>
        <h1>Fetched Data</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>

);

// --------------------------------------------------------------
// 7. Query States: isLoading, isFetching, isError, error, (isPending)
// --------------------------------------------------------------
// - **isLoading:** True on the initial fetch when no cached data exists.
// - **isFetching:** True whenever a query is fetching (includes background refetches).
// - **isError:** True if an error occurred during fetching.
// - **error:** Contains the error object (message, etc.).
// - **isPending:** Often discussed interchangeably with isFetching (depends on context).

// Usage in a component:
import { useQuery } from '@tanstack/react-query';

function QueryStatusExample() {
    const { data, isLoading, isFetching, isError, error } = useQuery({
        queryKey: ['dataKey'],
        queryFn: fetchDataFunction,
    });

    if (isLoading) return <div>Loading (first load)...</div>;
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <div>
            <p>Data: {JSON.stringify(data)}</p>
            {isFetching && <p>Updating in background...</p>}
        </div>
    );
}

// --------------------------------------------------------------
// 8. Polling, Refetch Interval, and Refetch Behavior
// --------------------------------------------------------------
// Polling: Automatic refetching of data at set intervals using the `refetchInterval` option.
// Example: Polling every 15 seconds.
useQuery({
    queryKey: ['pollData'],
    queryFn: fetchDataFunction,
    refetchInterval: 15000, // Poll every 15 seconds
});

// Also, `refetchOnWindowFocus` enables refetching when the window regains focus.

// --------------------------------------------------------------
// 9. Query Keys
// --------------------------------------------------------------
// Query keys uniquely identify queries and determine caching and refetching behavior.
// They can be strings or arrays that include variables (e.g., ['user', userId]).
const queryKey = ['user', 123];
useQuery({ queryKey, queryFn: () => fetchUserData(123) });

// --------------------------------------------------------------
// 10. Pagination
// --------------------------------------------------------------
// Pagination in TanStack Query is handled by incorporating page information into the query key.
// Use the option `keepPreviousData: true` to retain data from the previous page while fetching new data.
function PaginatedUsers({ page }) {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['users', page],
        queryFn: () => fetch(`/api/users?page=${page}`).then(res => res.json()),
        keepPreviousData: true,
    });

    if (isLoading) return <div>Loading page {page}...</div>;
    if (isError) return <div>Error fetching users.</div>;

    return (
        <ul>
            {data.users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    );
}

// --------------------------------------------------------------
// 12. Dynamic Routing with React Router and React Query
// --------------------------------------------------------------
// Use React Router's dynamic route parameters with TanStack Query to fetch data based on the URL.
// Example using useParams from React Router:
import { useParams } from 'react-router-dom';

function UserProfile() {
    const { userId } = useParams();
    const { data, isLoading, isError } = useQuery({
        queryKey: ['user', userId],
        queryFn: () => fetch(`/api/user/${userId}`).then(res => res.json()),
    });

    if (isLoading) return <div>Loading user...</div>;
    if (isError) return <div>Error loading user.</div>;

    return <div>User Name: {data.name}</div>;
}

// --------------------------------------------------------------
// 13. Placeholder Data
// --------------------------------------------------------------
// Placeholder data allows you to show default content while the real data is loading,
// minimizing layout shifts.
function ProductList() {
    const { data, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts, // Your data-fetching function
        placeholderData: { products: [] }, // Show an empty list until data loads
    });

    if (isLoading) return <div>Loading products...</div>;

    return (
        <ul>
            {data.products.map(product => <li key={product.id}>{product.name}</li>)}
        </ul>
    );
}

// --------------------------------------------------------------
// 14. useQuery Hook
// --------------------------------------------------------------
// useQuery is the primary hook for fetching data in TanStack Query.
// It accepts a query key and a query function, and returns status, data, error, etc.
function ExampleUseQuery() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['exampleData'],
        queryFn: () => fetch('https://api.example.com/data').then(res => res.json()),
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;

    return <div>Data: {JSON.stringify(data)}</div>;
}

// --------------------------------------------------------------
// 15. useMutation, onSuccess, queryClient, and .setQueryData
// --------------------------------------------------------------
// useMutation is used for creating, updating, or deleting data.
// onSuccess is a callback executed after a successful mutation.
// queryClient.setQueryData is used to update the cached data manually.
import { useMutation, useQueryClient } from '@tanstack/react-query';

function CreateItem() {
    const queryClient = useQueryClient();
    const mutation = useMutation(newItem =>
        fetch('/api/items', { method: 'POST', body: JSON.stringify(newItem) })
            .then(res => res.json()),
        {
            onSuccess: (data) => {
                // Update the 'items' cache with the new item
                queryClient.setQueryData(['items'], old => [...old, data]);
            }
        }
    );

    const handleCreate = () => {
        mutation.mutate({ name: 'New Item' });
    };

    return (
        <div>
            <button onClick={handleCreate}>Create Item</button>
            {mutation.isLoading && <p>Creating item...</p>}
            {mutation.isError && <p>Error creating item.</p>}
            {mutation.isSuccess && <p>Item created successfully!</p>}
        </div>
    );
}

// --------------------------------------------------------------
// 16. Infinite Scrolling
// --------------------------------------------------------------
// Infinite scrolling is supported by combining useInfiniteQuery with pagination.
// It fetches pages of data and allows appending more data when scrolling.
import { useInfiniteQuery } from '@tanstack/react-query';

function InfiniteScrollComponent() {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isError,
        error
    } = useInfiniteQuery({
        queryKey: ['infiniteData'],
        queryFn: ({ pageParam = 1 }) =>
            fetch(`/api/items?page=${pageParam}`).then(res => res.json()),
        getNextPageParam: (lastPage, pages) => {
            // Determine the next page number, or return undefined if no more pages
            return lastPage.nextPage ? lastPage.nextPage : undefined;
        },
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <div>
            {data.pages.map((page, index) => (
                <div key={index}>
                    {page.items.map(item => (
                        <div key={item.id}>{item.name}</div>
                    ))}
                </div>
            ))}
            <button disabled={!hasNextPage || isFetchingNextPage} onClick={fetchNextPage}>
                {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load More' : 'No more data'}
            </button>
        </div>
    );
}

// --------------------------------------------------------------
// End of TanStack Query Reference Notes
