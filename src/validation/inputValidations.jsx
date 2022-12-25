import { z } from "zod";

export const nameValidation = z.string().min(4).max(20);
export const emailValidation = z.string().email();
export const messageValidation = z.string().min(10);
