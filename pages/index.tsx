import Head from "next/head";
import Image from "next/image";
import { Timeline } from "@/src/components/Timeline";

export default function Home() {
  return (
    <>
      <Head>
        <title>SNS Udemy</title>
      </Head>

      <div>
        <Timeline />
      </div>
    </>
  );
}
