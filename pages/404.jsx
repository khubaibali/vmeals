import React, { useEffect } from 'react'
import { useRouter } from "next/router";

export default function Fourzerofour(props) {
  const router = useRouter();

  useEffect(() => {
    router.push("/pagenotfound")
  })
  return (
    <> </>
  )
}

