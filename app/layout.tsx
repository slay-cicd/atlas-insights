import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Atlas Insights – Prediction Markets für Fußball',
    template: '%s | Atlas Insights',
  },
  description:
    'Atlas Insights ist das führende deutschsprachige Wissensportal über Prediction Markets im Fußball. Bundesliga-Prognosen, Champions League Analysen und alles über Sportwetten-Alternativen.',
  keywords: [
    'Prediction Market',
    'Fußball Vorhersage',
    'Bundesliga Prognose',
    'Sportwetten Alternative',
    'Atlas Market',
  ],
  authors: [{ name: 'Atlas Market', url: 'https://atlas.market' }],
  creator: 'Atlas Market',
  metadataBase: new URL('https://slay-cicd.github.io/atlas-insights'),
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Atlas Insights',
    title: 'Atlas Insights – Prediction Markets für Fußball',
    description:
      'Prediction Markets erklärt: Bundesliga, Champions League und die smartere Alternative zu klassischen Sportwetten.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atlas Insights – Prediction Markets für Fußball',
    description:
      'Prediction Markets erklärt: Bundesliga, Champions League und die smartere Alternative zu klassischen Sportwetten.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,a){if(!a.__SV){var b=window;try{var d,m,j,k=b.location,f=k.hash;d=function(a,b){return(m=a.match(RegExp(b+"=([^&]*)")))?m[1]:null};f&&d(f,"state")&&(j=JSON.parse(decodeURIComponent(d(f,"state"))),"mpeditor"===j.action&&(b.sessionStorage.setItem("_mpcehash",f),history.replaceState(j.desiredHash||"",c.title,k.pathname+k.search)))}catch(n){}var l,h;window.mixpanel=a;a._i=[];a.init=function(b,d,g){function c(a,b){var c=b.split(".");2==c.length&&(a=a[c[0]],b=c[1]);a[b]=function(){a.push([b].concat(Array.prototype.slice.call(arguments,0)))}}var e=a;"undefined"!==typeof g?e=a[g]=[]:g="mixpanel";e.people=e.people||[];e.toString=function(a){var b="mixpanel";"mixpanel"!==g&&(b+="."+g);a||(b+=" (stub)");return b};e.people.toString=function(){return e.toString(1)+".people (stub)"};l="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");for(h=0;h<l.length;h++)c(e,l[h]);var f="set set_once union unset remove delete".split(" ");e.get_group=function(){function a(c){b[c]=function(){call2_args=arguments;call2=[c].concat(Array.prototype.slice.call(call2_args,0));e.push(["get_group"].concat(call2))}}for(var b={},c=0;c<f.length;c++)a(f[c]);return b};a._i.push([b,d,g])};a.__SV=1.2;b=c.createElement("script");b.type="text/javascript";b.async=!0;b.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===c.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";d=c.getElementsByTagName("script")[0];d.parentNode.insertBefore(b,d)}})(document,window.mixpanel||[]);
              mixpanel.init("1e4c480d84cd0fd22031ffc141447183", {track_pageview: true}); mixpanel.register({"site_name": "atlas-insights", "network": "atlas-seo"});
            `,
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
