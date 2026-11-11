"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

function Reader({ name, onValue }: { name: string; onValue: (value: string) => void }) {
  const params = useSearchParams();
  const value = params.get(name);

  useEffect(() => {
    if (value) onValue(value);
  }, [value, onValue]);

  return null;
}

/** Reads a URL query parameter inside its own Suspense boundary without blocking static shells. */
export function QueryParamSync({ name, onValue }: { name: string; onValue: (value: string) => void }) {
  return (
    <Suspense fallback={null}>
      <Reader name={name} onValue={onValue} />
    </Suspense>
  );
}

