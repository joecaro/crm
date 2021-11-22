import { useRouter } from "next/dist/client/router";
import React from "react";
import Lists from "../components/Lists/Lists";

export default function list() {
  const router = useRouter();

  const list = router.query.q;

  return <Lists selectedList={list} />;
}
