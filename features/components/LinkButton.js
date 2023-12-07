import Button from "@/components/elements/Button";
import Link from 'next/link';

export default function LinkButton({href, children}) {
    return (
        <Link href={href}>
            <Button>{children}</Button>
        </Link>
    );
}