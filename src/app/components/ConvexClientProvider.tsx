'use client'

import { ClerkProvider, useAuth } from "@clerk/nextjs"
import { ConvexProviderWithClerk } from "convex/react-clerk"
import { ConvexReactClient } from "convex/react"
import { ReactNode } from "react"

// Initialize the Convex client
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL || "");
export function ConvexClientProvider({ children }: { children: ReactNode}) 


{

    return (
  <ClerkProvider
    afterSignOutUrl={"/"}
    // routerPush={(url) => window.location.assign(url)}
    // routerReplace={(url) => window.location.replace(url)}
    // isSatellite={false}
    // proxyUrl={""}
  >

    <ConvexProviderWithClerk
      useAuth = {useAuth} client = {convex}>
      {children}

    </ConvexProviderWithClerk>
   
  </ClerkProvider>
    )
}