"use client";
import { QueryClient, QueryClientProvider } from "react-query";

// Create a new instance of QueryClient
const queryClient = new QueryClient();

export default function QueryContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
