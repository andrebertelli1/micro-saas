import { z } from 'zod'

export const themeFormSchcema = z.object({
  theme: z.string(),
})
