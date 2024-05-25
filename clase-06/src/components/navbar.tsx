"use client"
import Link from "next/link";
import Image from "next/image";
import Flag_ES from "../public/es_flag.png";
import Flag_PT from "../public/pt_flag.png";
import Flag_EN from "../public/en_flag.jpg";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Navbar() {
    const pathname = usePathname();
    const segments = pathname.split('/');
    const currentLocale = segments[1]; 
    const currentPath = segments.slice(2).join('/'); 
    const t = useTranslations('Navbar');

    return (
        <nav className="flex items-center justify-between w-full p-4 bg-gray-800 text-white">
            <div className="flex items-center space-x-4">
                <Link href={`/${currentLocale}`}>
                    <p>{t('home')}</p>
                </Link>
                <Link href={`/${currentLocale}/about`}>
                    <p>{t('about')}</p>
                </Link>
            </div>
            <div className="flex items-center space-x-4">
                <Link href={`/es/${currentPath}`}>
                    <Image src={Flag_ES} alt="ES Flag" width={30} height={30} />
                </Link>
                <Link href={`/pt/${currentPath}`}>
                    <Image src={Flag_PT} alt="PT Flag" width={30} height={30} />
                </Link>
                <Link href={`/en/${currentPath}`}>
                    <Image src={Flag_EN} alt="EN Flag" width={30} height={30} />
                </Link>
            </div>
        </nav>
    );
}
