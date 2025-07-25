import * as zod from "zod";

export function booleanSchema(identifier: string = "Field"): zod.ZodBoolean {
	return zod.coerce.boolean({
		invalid_type_error: `${identifier} must be a boolean`,
		required_error: `${identifier} is required`,
	});
}

export function numberSchema(
	identifier: string = "Field",
	min?: number,
	max?: number,
	int?: boolean,
): zod.ZodNumber {
	if (min && max && min > max) {
		throw new Error("'min' cannot be greater than 'max'");
	}

	let temp = zod.coerce.number({
		invalid_type_error: `${identifier} must be a number`,
		required_error: `${identifier} is required`,
	});

	if (int) {
		temp = temp.int({
			message: `${identifier} must be an integer`,
		});
	}

	if (min !== undefined) {
		temp = temp.min(min, {
			message: `${identifier} must be at least ${min}`,
		});
	}

	if (max !== undefined) {
		temp = temp.max(max, {
			message: `${identifier} must be at most ${max}`,
		});
	}

	return temp;
}

export function positiveNumberSchema(
	identifier: string = "Field",
	max?: number,
	int?: boolean,
): zod.ZodNumber {
	return numberSchema(identifier, 0.01, max, int);
}

export function stringSchema(
	identifier: string = "Field",
	len?: number,
	min?: number,
	max?: number,
): zod.ZodString {
	if (len && (min || max)) {
		throw new Error("Cannot use 'len' parameter together with 'min' or 'max'");
	}

	if (min && max && min > max) {
		throw new Error("'min' cannot be greater than 'max'");
	}

	let temp = zod.string({
		invalid_type_error: `${identifier} must be a string`,
		required_error: `${identifier} is required`,
	});

	if (len) {
		return temp.length(len, {
			message: `${identifier} must be exactly ${len} characters`,
		});
	}

	if (min) {
		temp = temp.min(min, {
			message: `${identifier} must be at least ${min} characters`,
		});
	}

	if (max) {
		temp = temp.max(max, {
			message: `${identifier} must be at most ${max} characters`,
		});
	}

	return temp;
}

export function nameSchema(
	identifier: string = "Name",
	min: number = 3,
	max: number = 24,
): zod.ZodString {
	return stringSchema(identifier, undefined, min, max).regex(
		/^[a-zA-Z\s'-]+$/,
		{
			message: `${identifier} can only contain letters, spaces, hyphens, and apostrophes`,
		},
	);
}

export function usernameSchema(
	identifier: string = "Username",
	min: number = 3,
	max: number = 24,
): zod.ZodString {
	return stringSchema(identifier, undefined, min, max).regex(
		/^[a-zA-Z0-9_-]+$/,
		{
			message: `${identifier} can only contain letters, numbers, underscores, and hyphens`,
		},
	);
}

export function slugSchema(
	identifier: string = "Slug",
	min: number = 3,
	max: number = 128,
): zod.ZodString {
	return stringSchema(identifier, undefined, min, max).regex(
		/^[a-z0-9]+(?:-[a-z0-9]+)*$/,
		{
			message: `${identifier} must be lowercase with hyphens separating words`,
		},
	);
}

export function urlSchema(identifier: string = "URL"): zod.ZodString {
	return stringSchema(identifier).url({
		message: `${identifier} must be a valid URL`,
	});
}

export function uuidSchema(identifier: string = "ID"): zod.ZodString {
	return stringSchema(identifier).uuid({
		message: `${identifier} must be a valid UUID`,
	});
}

export function emailSchema(identifier: string = "Email"): zod.ZodString {
	return stringSchema(identifier).email({
		message: `${identifier} must be a valid email address`,
	});
}

export function passwordSchema(
	identifier: string = "Password",
	min: number = 8,
	max: number = 32,
	requireSpecialChar: boolean = true,
	requireNumber: boolean = true,
	requireUppercase: boolean = true,
	requireLowercase: boolean = true,
): zod.ZodString {
	let temp = stringSchema(identifier, undefined, min, max);

	if (requireSpecialChar) {
		temp = temp.regex(/[!@#$%^&*(),.?":{}|<>]/, {
			message: `${identifier} must contain at least one special character`,
		});
	}

	if (requireNumber) {
		temp = temp.regex(/\d/, {
			message: `${identifier} must contain at least one number`,
		});
	}

	if (requireUppercase) {
		temp = temp.regex(/[A-Z]/, {
			message: `${identifier} must contain at least one uppercase letter`,
		});
	}

	if (requireLowercase) {
		temp = temp.regex(/[a-z]/, {
			message: `${identifier} must contain at least one lowercase letter`,
		});
	}

	return temp;
}

export function pinSchema(
	identifier: string = "Pin",
	length: number = 6,
): zod.ZodString {
	return stringSchema(identifier, length).regex(/^\d+$/, {
		message: `${identifier} must contain only numbers`,
	});
}

export function phoneSchema(
	identifier: string = "Phone number",
	allowInternational: boolean = true,
): zod.ZodString {
	const pattern = allowInternational
		? /^\+?[1-9]\d{1,14}$/ // E.164 format
		: /^\d{10}$/; // US format (10 digits)

	return stringSchema(identifier).regex(pattern, {
		message: allowInternational
			? `${identifier} must be a valid phone number`
			: `${identifier} must be a 10-digit phone number`,
	});
}

export function dateSchema(
	identifier: string = "Date",
	minDate?: Date,
	maxDate?: Date,
): zod.ZodDate {
	if (minDate && maxDate && minDate > maxDate) {
		throw new Error("'minDate' cannot be greater than 'maxDate'");
	}

	let temp = zod.date({
		invalid_type_error: `${identifier} must be a valid date`,
		required_error: `${identifier} is required`,
	});

	if (minDate) {
		temp = temp.min(minDate, {
			message: `${identifier} must be after ${minDate.toDateString()}`,
		});
	}

	if (maxDate) {
		temp = temp.max(maxDate, {
			message: `${identifier} must be before ${maxDate.toDateString()}`,
		});
	}

	return temp;
}

export function arraySchema<T extends zod.ZodTypeAny>(
	identifier: string = "Field",
	elementSchema: T,
	min?: number,
	max?: number,
): zod.ZodArray<T> {
	if (min && max && min > max) {
		throw new Error("'min' cannot be greater than 'max'");
	}

	let temp = zod.array(elementSchema, {
		invalid_type_error: `${identifier} must be an array`,
		required_error: `${identifier} is required`,
	});

	if (min !== undefined) {
		temp = temp.min(min, {
			message: `${identifier} must contain at least ${min} item${
				min !== 1 ? "s" : ""
			}`,
		});
	}

	if (max !== undefined) {
		temp = temp.max(max, {
			message: `${identifier} must contain at most ${max} item${
				max !== 1 ? "s" : ""
			}`,
		});
	}

	return temp;
}

export function enumSchema<T extends [string, ...string[]]>(
	identifier: string = "Field",
	values: T,
): zod.ZodEnum<T> {
	return zod.enum(values, {
		invalid_type_error: `${identifier} must be one of: ${values.join(", ")}`,
		required_error: `${identifier} is required`,
	});
}

export function fileSchema(
	identifier: string = "File",
	maxSize?: number,
	allowedTypes?: string[],
) {
	let temp = zod.instanceof(File, {
		message: `${identifier} must be a file`,
	});

	if (maxSize) {
		temp = temp.refine((file) => file.size <= maxSize, {
			message: `${identifier} size must be at most ${maxSize} bytes`,
		});
	}

	if (allowedTypes) {
		temp = temp.refine((file) => allowedTypes.includes(file.type), {
			message: `${identifier} type must be one of: ${allowedTypes.join(", ")}`,
		});
	}

	return temp;
}
