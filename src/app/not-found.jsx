import Link from "next/link";

const NotFound = () => {
    return (
        <>
            <span className="text-4xl font-semibold"> 404 | Page not found </span>
            <h1>
                Click to return {' '}
                <Link href="/" className="text-blue-500 hover:underline"> home. </Link>
            </h1>
        </>
    );
}
 
export default NotFound;