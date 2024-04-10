import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHourglassHalf } from '@fortawesome/free-regular-svg-icons';
import {
  Icon,
  UilChartPie,
  UilFilesLandscapesAlt
} from '@iconscout/react-unicons';

export interface Route {
  name: string;
  icon?: IconProp | string | string[];
  iconSet?: 'font-awesome' | 'feather' | 'unicons';
  pages?: Route[];
  path?: string;
  pathName?: string;
  flat?: boolean;
  topNavIcon?: string;
  dropdownInside?: boolean;
  active?: boolean;
  new?: boolean;
  hasNew?: boolean;
}

export interface RouteItems {
  label: string;
  horizontalNavLabel?: string;
  icon: Icon;
  labelDisabled?: boolean;
  pages: Route[];
  megaMenu?: boolean;
  active?: boolean;
}

export const routes: RouteItems[] = [
  {
    label: 'dashboard',
    horizontalNavLabel: 'home',
    active: true,
    icon: UilChartPie,
    labelDisabled: true,
    pages: [
      {
        name: 'home',
        icon: 'pie-chart',
        active: true,
        flat: true,
        pages: [
          {
            name: 'e-commerce',
            path: '/',
            pathName: 'default-dashboard',
            topNavIcon: 'shopping-cart',
            active: true
          },
          {
            name: 'project-management',
            path: '/dashboard/project-management',
            pathName: 'project-management-dashbaord',
            topNavIcon: 'clipboard',
            active: true
          },
          {
            name: 'CRM',
            path: '/dashboard/crm',
            pathName: 'crm',
            topNavIcon: 'phone',
            active: true
          },
          {
            name: 'social-feed',
            path: '/apps/social/feed',
            pathName: 'social-feed',
            topNavIcon: 'share-2',
            active: true
          }
        ]
      }
    ]
  },
  {
    label: 'pages',
    icon: UilFilesLandscapesAlt,
    pages: [
      {
        name: 'starter',
        icon: 'compass',
        path: '/pages/starter',
        pathName: 'starter-page',
        active: true
      },
      {
        name: 'faq',
        icon: 'help-circle',
        active: true,
        hasNew: true,
        pages: [
          {
            name: 'faq-accordion',
            path: '/pages/faq/faq-accordion',
            pathName: 'faq-accordion',
            active: true
          },
          {
            name: 'faq-tab',
            path: '/pages/faq/faq-tab',
            pathName: 'faq-tab',
            active: true,
            new: true
          }
        ]
      },
      {
        name: 'landing',
        icon: 'globe',
        active: true,
        hasNew: true,
        pages: [
          {
            name: 'default',
            path: '/pages/landing/default',
            pathName: 'landing-default',
            active: true
          },
          {
            name: 'alternate',
            path: '/pages/landing/alternate',
            pathName: 'landing-alternate',
            active: true,
            new: true
          }
        ]
      },
      {
        name: 'pricing',
        icon: 'tag',
        active: true,
        pages: [
          {
            name: 'pricing-column',
            path: '/pages/pricing/pricing-column',
            pathName: 'pricing-column',
            active: true
          },
          {
            name: 'pricing-grid',
            path: 'pages/pricing/pricing-grid',
            pathName: 'pricing-grid',
            active: true
          }
        ]
      },
      {
        name: 'notifications',
        icon: 'bell',
        path: '/pages/notifications',
        pathName: 'notifications-page',
        active: true
      },
      {
        name: 'members',
        icon: 'users',
        path: '/pages/members',
        pathName: 'members-page',
        active: true
      },
      {
        name: 'timeline',
        icon: 'clock',
        path: '/pages/timeline',
        pathName: 'timeline-page',
        active: true,
        new: true
      },
      {
        name: 'coming-soon',
        iconSet: 'font-awesome',
        icon: faHourglassHalf,
        path: '/pages/coming-soon',
        pathName: 'coming-soon',
        active: true,
        new: true
      },
      {
        name: 'errors',
        icon: 'alert-triangle',
        active: true,
        pages: [
          {
            name: '403',
            path: 'pages/errors/403',
            pathName: 'error403',
            active: true
          },
          {
            name: '404',
            path: 'pages/errors/404',
            pathName: 'error404',
            active: true
          },
          {
            name: '500',
            path: 'pages/errors/500',
            pathName: 'error500',
            active: true
          }
        ]
      },
      {
        name: 'authentication',
        icon: 'lock',
        active: true,
        pages: [
          {
            name: 'simple',
            active: true,
            pages: [
              {
                name: 'login',
                path: '/pages/authentication/simple/login',
                pathName: 'simple-signin',
                active: true
              },
              {
                name: 'sign-in',
                path: '/pages/authentication/simple/sign-in',
                pathName: 'simple-signin',
                active: true
              },
              {
                name: 'sign-up',
                path: '/pages/authentication/simple/sign-up',
                pathName: 'simple-signup',
                active: true
              },
              {
                name: 'register',
                path: '/pages/authentication/simple/register',
                pathName: 'simple-signup',
                active: true
              },
              {
                name: 'sign-out',
                path: '/pages/authentication/simple/sign-out',
                pathName: 'simple-signout',
                active: true
              },
              {
                name: 'forgot-password',
                path: '/pages/authentication/simple/forgot-password',
                pathName: 'simple-forgot-password',
                active: true
              },
              {
                name: 'reset-password',
                path: '/pages/authentication/simple/reset-password',
                pathName: 'simple-reset-password',
                active: true
              },
              {
                name: 'lock-screen',
                path: '/pages/authentication/simple/lock-screen',
                pathName: 'simple-lock-screen',
                active: true
              },
              {
                name: '2FA',
                path: '/pages/authentication/simple/2FA',
                pathName: 'simple-2FA',
                active: true
              }
            ]
          },
          {
            name: 'split',
            active: true,
            pages: [
              {
                name: 'sign-in',
                path: '/pages/authentication/split/sign-in',
                pathName: 'split-signin',
                active: true
              },
              {
                name: 'sign-up',
                path: '/pages/authentication/split/sign-up',
                pathName: 'split-signup',
                active: true
              },
              {
                name: 'sign-out',
                path: '/pages/authentication/split/sign-out',
                pathName: 'split-signout',
                active: true
              },
              {
                name: 'forgot-password',
                path: '/pages/authentication/split/forgot-password',
                pathName: 'split-forgot-password',
                active: true
              },
              {
                name: 'reset-password',
                path: '/pages/authentication/split/reset-password',
                pathName: 'split-reset-password',
                active: true
              },
              {
                name: 'lock-screen',
                path: '/pages/authentication/split/lock-screen',
                pathName: 'split-lock-screen',
                active: true
              },
              {
                name: '2FA',
                path: '/pages/authentication/split/2FA',
                pathName: 'split-2FA',
                active: true
              }
            ]
          },
          {
            name: 'Card',
            active: true,
            pages: [
              {
                name: 'sign-in',
                path: 'pages/authentication/card/sign-in',
                pathName: 'card-signin',
                active: true
              },
              {
                name: 'sign-up',
                path: 'pages/authentication/card/sign-up',
                pathName: 'card-signup',
                active: true
              },
              {
                name: 'sign-out',
                path: 'pages/authentication/card/sign-out',
                pathName: 'card-signout',
                active: true
              },
              {
                name: 'forgot-password',
                path: 'pages/authentication/card/forgot-password',
                pathName: 'card-forgot-password',
                active: true
              },
              {
                name: 'reset-password',
                path: 'pages/authentication/card/reset-password',
                pathName: 'card-reset-password',
                active: true
              },
              {
                name: 'lock-screen',
                path: 'pages/authentication/card/lock-screen',
                pathName: 'card-lock-screen',
                active: true
              },
              {
                name: '2FA',
                path: '/pages/authentication/card/2FA',
                pathName: 'card-2FA',
                active: true
              }
            ]
          }
        ]
      },
      {
        name: 'layouts',
        icon: 'layout',
        active: true,
        pages: [
          {
            name: 'vertical-sidenav',
            path: '/pages/demo/vertical-sidenav',
            pathName: 'demo-vertical-sidenav',
            active: true
          },
          {
            name: 'dark-mode',
            path: '/pages/demo/dark-mode',
            pathName: 'demo-dark-mode',
            active: true
          },
          {
            name: 'sidenav-collapse',
            path: '/pages/demo/sidenav-collapse',
            pathName: 'demo-sidenav-collapse',
            active: true
          },
          {
            name: 'darknav',
            path: '/pages/demo/darknav',
            pathName: 'demo-darknav',
            active: true
          },
          {
            name: 'topnav-slim',
            path: '/pages/demo/topnav-slim',
            pathName: 'demo-topnav-slim',
            active: true
          },
          {
            name: 'navbar-top-slim',
            path: '/pages/demo/navbar-top-slim',
            pathName: 'demo-navbar-top-slim',
            active: true
          },
          {
            name: 'navbar-top',
            path: '/pages/demo/navbar-top',
            pathName: 'demo-navbar-top',
            active: true
          },
          {
            name: 'horizontal-slim',
            path: '/pages/demo/horizontal-slim',
            pathName: 'demo-horizontal-slim',
            active: true
          },
          {
            name: 'combo-nav',
            path: '/pages/demo/combo-nav',
            pathName: 'demo-combo-nav',
            active: true
          },
          {
            name: 'combo-nav-slim',
            path: '/pages/demo/combo-nav-slim',
            pathName: 'demo-combo-nav-slim',
            active: true
          },
          {
            name: 'dual-nav',
            path: '/pages/demo/dual-nav',
            pathName: 'demo-dual-nav',
            active: true
          }
        ]
      }
    ]
  }
];

export interface TopButtonItems {
  key: string;
  route: string;
}
export const topButtons = [
  {
    key: 'Challenges',
    route: '/pages/challenges'
  },
  {
    key: 'Deployments',
    route: '/pages/deployments'
  }
];
