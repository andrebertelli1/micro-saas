export const config = {
  stripe: {
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    secretKey: process.env.STRIPE_SECRET_KEY,
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
    plans: {
      free: {
        priceId: 'price_1P5z8uESOKrol9NBcyTYqELK',
        quota: {
          TASKS: 5,
        },
      },
      pro: {
        priceId: 'price_1P5z95ESOKrol9NBHpsLMoBN',
        quota: {
          TASKS: 100,
        },
      },
    },
  },
}
