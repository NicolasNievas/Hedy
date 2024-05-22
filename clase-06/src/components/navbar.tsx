"use client"
import Link from "next/link";
import Image from "next/image";
import Flag_ES from "../public/es_flag.png";
import Flag_PT from "../public/pt_flag.png";
import Flag_UK from "../public/uk_flag.png";
import { usePathname, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Navbar() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const locale = pathname.split('/')[1];
    const t = useTranslations('Navbar');

    return (
        <nav className="flex items-center justify-between w-full p-4 bg-gray-800 text-white">
            <div className="flex items-center space-x-4">
                <Link href={`/${locale}`}>
                    <p>{t('home')}</p>
                </Link>
                <Link href={`/${locale}/about`}>
                    <p>{t('about')}</p>
                </Link>
            </div>
            <div className="flex items-center space-x-4">
                <Link href="/es">
                    <Image src={Flag_ES} alt="ES Flag" width={30} height={30} />
                </Link>
                <Link href="/pt">
                    <Image src={Flag_PT} alt="PT Flag" width={30} height={30} />
                </Link>
                <Link href="/uk">
                    <Image src={Flag_UK} alt="UK Flag" width={30} height={30} />
                </Link>
            </div>
        </nav>
    );
}
