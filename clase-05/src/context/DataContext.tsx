"use client"
import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";

interface IDataContext {
    user: User | null;
    setUser: Dispatch<SetStateAction<User | null>>;
}

interface IDataProvideProps {
    children: JSX.Element[] | JSX.Element | React.ReactNode;
}

const supabase = createClient();

const DataContext = createContext<IDataContext>({
    user: null,
    setUser: () => {},
}); 

export const DataProvider = ({ children }: IDataProvideProps ) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const getUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setUser(session?.user ?? null);

            const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
                setUser(session?.user ?? null);
            });

            return () => {
                authListener.subscription.unsubscribe();
            };
        };

        getUser();
    }, []);

    return (
        <DataContext.Provider value={{user, setUser}}>
            {children}
        </DataContext.Provider>
      );
  };

  export function useDataContext(){
    return useContext(DataContext);
  }