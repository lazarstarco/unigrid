// ** Icons Import
import {
  Key,
  User,
  Info,
  Mail,
  File,
  Unlock,
  Circle,
  Square,
  FileText,
  Settings,
  Clipboard,
  DollarSign,
  HelpCircle
} from 'react-feather'

export default [
  {
    id: 'pages',
    title: 'Pages',
    icon: <FileText />,
    children: [
      {
        id: 'authentication',
        title: 'Authentication',
        icon: <Unlock />,
        children: [
          {
            id: 'login',
            title: 'Login',
            icon: <Circle size={12} />,
            children: [
              {
                id: 'login-basic',
                title: 'Basic',
                permissions: ['admin', 'editor'],
                navLink: '/pages/login-basic',
                newTab: true
              },
              {
                id: 'login-cover',
                title: 'Cover',
                permissions: ['admin', 'editor'],
                navLink: '/pages/login-cover',
                newTab: true
              }
            ]
          },
          {
            id: 'register',
            title: 'Register',
            icon: <Circle size={12} />,
            children: [
              {
                id: 'register-basic',
                title: 'Basic',
                permissions: ['admin', 'editor'],
                navLink: '/pages/register-basic',
                newTab: true
              },
              {
                id: 'register-cover',
                title: 'Cover',
                permissions: ['admin', 'editor'],
                navLink: '/pages/register-cover',
                newTab: true
              },
              {
                id: 'multi-steps-register',
                title: 'Multi-Steps',
                permissions: ['admin', 'editor'],
                navLink: '/pages/register-multi-steps',
                newTab: true
              }
            ]
          },
          {
            id: 'forgot-password',
            title: 'Forgot Password',
            icon: <Circle size={12} />,
            children: [
              {
                id: 'forgotPassword-basic',
                title: 'Basic',
                permissions: ['admin', 'editor'],
                navLink: '/pages/forgot-password-basic',
                newTab: true
              },
              {
                id: 'forgotPassword-cover',
                title: 'Cover',
                permissions: ['admin', 'editor'],
                navLink: '/pages/forgot-password-cover',
                newTab: true
              }
            ]
          },
          {
            id: 'resetPassword',
            title: 'Reset Password',
            icon: <Circle size={12} />,
            children: [
              {
                id: 'resetPassword-basic',
                title: 'Basic',
                permissions: ['admin', 'editor'],
                navLink: '/pages/reset-password-basic',
                newTab: true
              },
              {
                id: 'resetPassword-cover',
                title: 'Cover',
                permissions: ['admin', 'editor'],
                navLink: '/pages/reset-password-cover',
                newTab: true
              }
            ]
          },
          {
            id: 'verify-email',
            title: 'Reset Password',
            icon: <Circle size={12} />,
            children: [
              {
                id: 'verify-email-basic',
                title: 'Basic',
                permissions: ['admin', 'editor'],
                navLink: '/pages/verify-email-basic',
                newTab: true
              },
              {
                id: 'verify-email-cover',
                title: 'Cover',
                permissions: ['admin', 'editor'],
                navLink: '/pages/verify-email-cover',
                newTab: true
              }
            ]
          },
          {
            id: 'two-step',
            title: 'Two Steps',
            icon: <Circle size={12} />,
            children: [
              {
                id: 'two-steps-basic',
                title: 'Basic',
                permissions: ['admin', 'editor'],
                navLink: '/pages/two-steps-basic',
                newTab: true
              },
              {
                id: 'two-steps-cover',
                title: 'Cover',
                permissions: ['admin', 'editor'],
                navLink: '/pages/two-steps-cover',
                newTab: true
              }
            ]
          }
        ]
      },
      {
        id: 'accountSettings',
        title: 'Account Settings',
        icon: <Settings />,
        navLink: '/pages/account-settings'
      },
      {
        id: 'faq',
        title: 'FAQ',
        icon: <HelpCircle />,
        navLink: '/pages/faq'
      },
      {
        id: 'miscellaneous',
        title: 'Miscellaneous',
        icon: <File />,
        children: [
          {
            id: 'comingSoon',
            title: 'Coming Soon',
            icon: <Circle />,
            navLink: '/misc/coming-soon',
            newTab: true
          },

          {
            id: 'notAuthorized',
            title: 'Not Authorized',
            icon: <Circle />,
            navLink: '/misc/not-authorized',
            newTab: true
          },
          {
            id: 'maintenance',
            title: 'Maintenance',
            icon: <Circle />,
            navLink: '/misc/maintenance',
            newTab: true
          },
          {
            id: 'error',
            title: 'Error',
            icon: <Circle />,
            navLink: '/misc/error',
            newTab: true
          }
        ]
      }
    ]
  }
]
