import * as z from "zod";

const loginSchema = z.object({
	email: z.string().email(),
    password: z.string().min(6),
});

const registerSchema = z.object({
    name:z.string(),
    email: z.string().email(),
    password: z.string().min(6),
})
export {registerSchema, loginSchema};
