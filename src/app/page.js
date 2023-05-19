import React from "react";
import {desc} from "@/base/siteConfig";

export const metadata = {
    title: 'Home - BEGOINGTO',
    description: desc,
    url: '/',
    locale: 'en-US',
    category: 'education',
    type: 'website',
    siteName: 'BEGOINGTO',
    manifest: '/manifest.json',
    openGraph:{
        images: [
            {
                url: '/og-image.jpg',
                width: 800,
                height: 600,
            },
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: {
            template: 'Home - BEGOINGTO'
        },
        description: desc,
        creator: '@begoingtoMe',
        images: ['/og-image.jpg'],
    }
}

export default function Home() {
  return (
      <>
          <div className="flex min-h-screen flex-col items-center justify-center">
              <h1 className={"text-2xl text-center "}>Welcome</h1>
              <h1 className="font-bold text-pink-700 text-5xl my-3">
                  BEGOINGTO
                  <i className="bi bi-badge-8k ms-2"></i>
              </h1>
              <h1 className={"text-2xl text-center "}>1<sup>st</sup> Scholarship of Full Stack Web Development</h1>
              <h1 className={"text-2xl text-center "}>at</h1>
              <h1 className="font-bold text-blue-700 text-4xl my-3">
                  ISTAD
                  <i className="bi bi-mortarboard"></i>
              </h1>
          </div>
      </>
  )
}