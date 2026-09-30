export const config = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'https://portnovaio.com/api',
  appName: 'Portnova',
  version: '1.0.0',
  razorpay: {
    keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '',
  },
    setu: {
    clientId: process.env.NEXT_PUBLIC_SETU_CLIENT_ID || '',
    baseUrl: process.env.NEXT_PUBLIC_SETU_BASE_URL || '',
  },
    payu: {
    merchantKey: process.env.NEXT_PUBLIC_PAYU_MERCHANT_KEY || '',
    mode: process.env.NEXT_PUBLIC_PAYU_MODE || 'TEST',
  },
  payment: {
    successUrl: process.env.NEXT_PUBLIC_PAYMENT_SUCCESS_URL || '/payment/success',
    failureUrl: process.env.NEXT_PUBLIC_PAYMENT_FAILURE_URL || '/payment/failure',
  }
}