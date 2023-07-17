// import { Subscription, UserDetails } from "@/types/supabase";
import { Database } from "@/types/supabase";
import { User } from "@supabase/auth-helpers-nextjs";
import {
  useSessionContext,
  useUser as useSupaUser,
} from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type UserData = Database["public"]["Tables"]["users"]["Row"];

type UserContextType = {
  accessToken: string | null;
  user: User | null;
  userDetails: UserData | null;
  isLoading: boolean;
  // subscription: Subscription | null;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export interface Props {
  [propName: string]: any;
}

export const MyUserProvider = (props: Props) => {
  const {
    session,
    isLoading: isLoadingUser,
    supabaseClient: supabase,
  } = useSessionContext();
  const user = useSupaUser();
  const accessToken = session?.access_token ?? null;
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [userDetails, setUserDetails] = useState<UserData | null>(null);
  // const [subscription, setSubscription] = useState<Subscription | null>(null);

  const router = useRouter();

  const getUserDetails = () => supabase.from("users").select("*");
  // const getSubscription = () =>
  //   supabase
  //     .from("subscriptions")
  //     .select("*, prices(*, products(*))")
  //     .in("status", ["trailing", "active"])
  //     .single();

  useEffect(() => {
    if (user && !isLoadingData && !userDetails) {
      setIsLoadingData(true);
      Promise.allSettled([getUserDetails()]).then((results) => {
        const userDetailsPromise = results[0];
        // const subscriptionPromise = results[1];

        if (userDetailsPromise.status === "fulfilled") {
          console.log(userDetailsPromise.value.data);

          setUserDetails(userDetailsPromise.value.data as UserData | null);
        }

        // if (subscriptionPromise.status === "fulfilled") {
        //   setSubscription(subscriptionPromise.value.data as Subscription);
        // }
        setIsLoadingData(false);
      });
    } else if (!user && !isLoadingData && !isLoadingUser) {
      
      router.push("/");

      setUserDetails(null);
      // setSubscription(null);
    }
  }, [user, isLoadingUser]);

  const value = {
    accessToken,
    user,
    userDetails,
    isLoading: isLoadingUser || isLoadingData,
    // subscription,
  };

  return <UserContext.Provider value={value} {...props} />;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a MyUserContextProvider");
  }
  return context;
};
