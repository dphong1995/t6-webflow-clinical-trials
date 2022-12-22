import '../styles/globals.css'
import Head from "next/head";
import {useEffect} from "react";

export default function App({Component, pageProps}) {
  useEffect(() => {
    if (!window) {
      return;
    }

    (function (w, d, x, id) {
      const s = d.createElement('script');
      s.src = 'https://db08fjupg2abb.cloudfront.net/amazon-connect-chat-interface-client.js';
      s.async = true;
      s.id = id;
      d.getElementsByTagName('head')[0].appendChild(s);
      w[x] = w[x] || function () {
        (w[x].ac = w[x].ac || []).push(arguments)
      };
    })(window, document, 'amazon_connect', '05663374-f821-465e-8cdc-a4a75d427827');
    amazon_connect('styles', {
      openChat: {color: '#ffffff', backgroundColor: '#092045'},
      closeChat: {color: '#ffffff', backgroundColor: '#092045'}
    });
    amazon_connect('snippetId', 'QVFJREFIaTVucjV6blZLVmVuUmIvVHpJa0xaVTRpNURvQ3pianQ3R1hoWGhVcmtmTlFGeENGd0VlWkpYV1JrTmZYOEtqb01qQUFBQWJqQnNCZ2txaGtpRzl3MEJCd2FnWHpCZEFnRUFNRmdHQ1NxR1NJYjNEUUVIQVRBZUJnbGdoa2dCWlFNRUFTNHdFUVFNams1eGVWTDFaeXB0RlI3MEFnRVFnQ3Z3aGVQMmFGVXpPTW1ucFREOUh1Sjk3Sk1BNTRhVXdVamxhZkllUGJkTTZnV0lhcjhjTUFRMXNBM1U6Ok5hb1BXQ3NscXNiV3pzOXB0VXIxdDMxU005VkdiSTA2cUo1Mnc0cU5BOHM5NElHSGxXM3g3UkI1b3h4eUp2UnA2Z0xWUFFYTFpycGU4N1BhazIvOEI5UzR0UnR6MFN3SE9vQ2JEL0x4d043bEIvbS9Sb0tCNDRyaTRFOFVkRzQ0ZnNldEZ3a1hnUTZnWXhSLy9MclBZdWV5M1dLNCs1OD0=');
    amazon_connect('supportedMessagingContentTypes', ['text/plain', 'text/markdown']);
  }, []);

  return (
    <>
      <Head>
        <title>Talosix | Clinical Trials</title>
        <meta name="description" content="Generated by create next app"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://study.talosix.com/images/favicon-32x32.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
