"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDataContext } from "@/context/DataContext";

const isAuth = (Component: any) => {
    return function AuthenticatedComponent(props: any) {
        const { user } = useDataContext();
        const router = useRouter();

        useEffect(() => {
            if (!user) {
                router.replace("/login");
            }
        }, [user, router]);

        if (!user) {
            return <p>Loading...</p>;
        }

        return <Component {...props} />;
    };
};

export default isAuth;
