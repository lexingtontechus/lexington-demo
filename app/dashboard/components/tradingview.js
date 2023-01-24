"use client";
import Script from "next/script";
import Link from "next/link";

export default function TradingView() {
  return (
    <div className="container mx-auto">
      <Script type="text/javascript" src="https://s3.tradingview.com/tv.js" />
      <div className="h-min-screen w-full">
        <Script type="text/javascript">
          var tradingview_embed_options = {}; tradingview_embed_options.width =
          "640"; tradingview_embed_options.height = "400";
          tradingview_embed_options.chart = "Uh56j6xv"; new
          TradingView.chart(tradingview_embed_options);
        </Script>
      </div>
      <p>
        <Link href="https://www.tradingview.com/chart/BBTT/Uh56j6xv-BTAB/">
          OTC:BBTT
        </Link>{" "}
        by{" "}
        <Link href="https://www.tradingview.com/u/LexingtonTech/">
          Lexington Tech
        </Link>
      </p>
    </div>
  );
}
