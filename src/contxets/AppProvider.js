import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
 defaultOptions: {
  queries: {
   refetchOnWindowFocus: false,
   retry: (failureCount, error) => {
    if (error.status === 400) {
     return false;
    } else if (failureCount < 2) {
     return true;
    } else {
     return false;
    }
   },
  },
 },
});

const AppProvider = ({ children }) => {
 return (
  <>
   <QueryClientProvider client={queryClient}>
    {children}
    <ReactQueryDevtools />
   </QueryClientProvider>
  </>
 );
};

export default AppProvider;
