import Link from "next/link";

export default function Nav() {
  return (
    <div className="p-5 bg-green-400 p-4 rounded-md flex justify-end fixed top-0 left-0 w-full z-10">
      <Link href={'./'} className="text-2xl mr-8 text-green-100 no-underline hover:text-green-900">Home</Link>
      <Link href={'./posts'} className="text-2xl mr-8 text-green-100 no-underline hover:text-green-900">Post</Link>
      <Link href={'./Users'} className="text-2xl mr-8 text-green-100 no-underline hover:text-green-900">Users</Link>
      <Link href={'./create'} className="text-2xl mr-8 text-green-100 no-underline hover:text-green-900">Create</Link>
      <Link href={'./contact'} className="text-2xl text-green-100 no-underline hover:text-green-900">Contact</Link>
    </div>
  );
}
