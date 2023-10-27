import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
      <h1>Protected Page</h1>
    </div>
  );
}
