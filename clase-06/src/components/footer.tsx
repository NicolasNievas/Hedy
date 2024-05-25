import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations("Home");

    return (
        <footer className="flex flex-col justify-center items-center p-5 w-full left-0 fixed bg-gray-800 text-white bottom-0">
            <div className="flex justify-center items-center space-x-4 text-sm">
                <p className="text-center">
                    {t("copyright")}
                </p>
                <a 
                    href="https://github.com/NicolasNievas" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="underline text-white"
                >
                    {t("github")}
                </a>
            </div>
        </footer>
    );
}