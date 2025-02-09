import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";

const HeaderTitle = ({ to, className, children }) => {
    return (
        <div className="flex gap-1 items-center group w-fit">
            <span id={to} className={`scroll-mt-4 ${className}`}> {children} </span>
            <Link href={`#${to}`} className="opacity-0 group-hover:opacity-100">
                <LinkIcon className="h-[14px]" />
            </Link>
        </div>
    );
}
 
export default HeaderTitle;