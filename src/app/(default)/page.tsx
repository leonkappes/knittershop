'use client'
import Hero from "@/components/Default/Hero";

export default function Home() {
  return (
      <>

        <Hero showButton={true} />
        <Hero showButton={false}/>
      </>
  )
}
