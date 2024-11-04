import React, { Suspense } from "react";

const UsernamePage = React.lazy(() => import("./components/UserPage"));

type Props = {
  params: { username: string };
};

export default function App({ params }: Props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UsernamePage params={params} />
    </Suspense>
  );
}
