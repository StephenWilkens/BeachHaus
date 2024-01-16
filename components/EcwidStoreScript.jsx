/* eslint-disable @next/next/no-before-interactive-script-outside-document */
'use client'
import Script from "next/script";

export function EcwidStoreScript() {
  return(
    <div className="w-full">
      <Script
        src="https://app.ecwid.com/script.js?30876003&data_platform=code&data_date=2024-01-15"
        onLoad={() => {
          return (
            <div id="my-store-30876003">
              {xProductBrowser(
                "categoriesPerRow=3",
                "views=grid(20,3) list(60) table(60)",
                "categoryView=grid",
                "searchView=list",
                "id=my-store-30876003",
              )}
            </div>
          );
        }}
      />
    </div>
  )
}