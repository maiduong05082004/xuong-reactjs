import * as z from "zod";

const productSchema = z.object({
	title: z.string().min(5).max(100),
    description: z.string().optional(),
	price: z.number().min(0),
    rating: z.number().positive(), 
	stock: z.number(),
    brand: z.string(),
    // category: z.string(),
});
export default productSchema;