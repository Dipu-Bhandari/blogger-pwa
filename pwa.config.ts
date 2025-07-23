import type { Config } from './types';

export default {
  id: '/',
  name: 'DBS AMGURI',
  shortName: 'DBS',
  description: 'WELCOME TO DBS FAMILY',
  direction: 'auto',
  language: 'en-US',
  backgroundColor: '#fff',
  themeColor: '#fff',
  display: 'standalone',
  orientation: 'natural',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'ABOUT',
      shortName: 'Shortcut 1',
      description: 'ABOUT DBS',
      url: '/p/about.html',
    },
    {
      name: 'notifications',
      shortName: 'Shortcut 2',
      description: 'notifications',
      url: '/p/notifications.html',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal is not available if you are not using cloudflare workers
    oneSignalEnabled: true,
    oneSignalConfig: {
      appId: '1805a5b4-c5d5-4f47-85a7-42c56491f366',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://www.dbsamguri.qzz.io',
} satisfies Config;
