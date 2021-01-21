import TheDefaultView from '@/core/viewDefault/TheDefaultView';
import TheHomeLayout from '@/core/viewDefault/layouts/TheHomeLayout';
import TheHowItWorksLayout from '@/core/viewDefault/layouts/TheHowItWorksLayout';
import CompanyPage from '@/modules/company/Company';
import TeamPage from '@/modules/team/Team';
import PressKit from '@/modules/press-kit/PressKit';
import BuyHardwareWallet from '@/modules/hardware/Hardware';
import ToolsPage from '@/modules/tools/Tools';
import CreateWallet from '@/modules/wallets/pages/create/Create';
import AccessWallet from '@/modules/wallets/pages/access/Access';
import HardwareWallets from '@/modules/wallets/pages/access/hardware-wallets/HardwareWallets';
import MobileApps from '@/modules/wallets/pages/access/mobile-apps/MobileApps';
import BrowserExtension from '@/modules/wallets/pages/access/browser-extension/BrowserExtension';
import BrowserExtensionInstall from '@/modules/wallets/pages/access/browser-extension/install-extension/InstallExtension';
import BrowserExtensionAccess from '@/modules/wallets/pages/access/browser-extension/access-extension/AccessExtension';
import PrivacyPolicy from '@/modules/privacy-policy/PrivacyPolicy';
import TermsOfService from '@/modules/terms-of-service/TermsOfService';
import WalletRoutes from '@/modules/wallets/routes.js';

const routes = [
  {
    path: '/',
    component: TheDefaultView,
    props: true,
    children: [
      {
        path: '',
        name: 'Home',
        component: TheHomeLayout,
        meta: {
          requiresAuth: false
        }
      },
      {
        path: 'how-it-works',
        name: 'HowItWorks',
        component: TheHowItWorksLayout,
        meta: {
          requiresAuth: false
        }
      },
      {
        path: 'privacy-policy',
        name: 'PrivacyPolicy',
        component: PrivacyPolicy,
        meta: {
          requiresAuth: false
        }
      },
      {
        path: 'terms-of-service',
        name: 'TermsOfService',
        component: TermsOfService,
        meta: {
          requiresAuth: false
        }
      },
      {
        path: 'tools',
        name: 'Tools',
        component: ToolsPage,
        meta: {
          requiresAuth: false
        }
      },
      {
        path: 'buy-hardware-wallet',
        name: 'BuyHardwareWallet',
        component: BuyHardwareWallet,
        meta: {
          requiresAuth: false
        }
      },
      {
        path: 'company',
        name: 'CompanyPage',
        component: CompanyPage,
        meta: {
          requiresAuth: false
        }
      },
      {
        path: 'team',
        name: 'TeamPage',
        component: TeamPage,
        meta: {
          requiresAuth: false
        }
      },
      {
        path: 'presskit',
        name: 'PressKit',
        component: PressKit,
        meta: {
          requiresAuth: false
        }
      },
      {
        path: 'wallet/create',
        name: 'CreateWallet',
        component: CreateWallet,
        meta: {
          requiresAuth: false
        }
      },
      {
        path: 'wallet/access',
        name: 'AccessWallet',
        component: AccessWallet,
        meta: {
          requiresAuth: false
        }
      },
      {
        path: 'wallet/access/hardware-wallets',
        name: 'HardwareWallets',
        component: HardwareWallets,
        meta: {
          requiresAuth: false
        }
      },
      {
        path: 'wallet/access/browser-extension',
        name: 'BrowserExtension',
        component: BrowserExtension,
        meta: {
          requiresAuth: false
        }
      },
      {
        path: 'wallet/access/browser-extension/install',
        name: 'BrowserExtensionInstall',
        component: BrowserExtensionInstall,
        meta: {
          requiresAuth: false
        }
      },
      {
        path: 'wallet/access/browser-extension/access',
        name: 'BrowserExtensionAccess',
        component: BrowserExtensionAccess,
        meta: {
          requiresAuth: false
        }
      },
      {
        path: 'wallet/access/mobile-apps',
        name: 'MobileApps',
        component: MobileApps,
        meta: {
          requiresAuth: false
        }
      }
    ]
  },
  WalletRoutes
];

export default routes;
