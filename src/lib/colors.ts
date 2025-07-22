/**
 * Artista Color System
 *
 * This file contains all the colors from your design system.
 * Use these constants for consistent theming across your application.
 */

// Primary Colors
export const primary = {
	1000: "#00365F",
	900: "#004574",
	800: "#206593",
	700: "#206593",
	600: "#2291DA",
	500: "#439BD5",
	400: "#6DB1DE",
	300: "#6DB1DE",
	200: "#C0DEF1",
	100: "#C0DEF1",
} as const;

// Secondary Colors
export const secondary = {
	1000: "#332303",
	900: "#332303",
	800: "#4C3504",
	700: "#986A08",
	600: "#FDB00D",
	500: "#FDB00D",
	400: "#FDC03D",
	300: "#FED06E",
	200: "#FEDF9E",
	100: "#FFF7E7",
} as const;

// Tertiary Colors
export const tertiary = {
	1000: "#052210",
	900: "#073319",
	800: "#094421",
	700: "#0E6631",
	600: "#128842",
	500: "#17AA52",
	400: "#42BA72",
	300: "#6CCB92",
	200: "#C1ECD3",
	100: "#ECFCF3",
} as const;

// Text Colors
export const text = {
	1000: "#111827",
	900: "#1F2937",
	800: "#374151",
	700: "#4B5563",
	600: "#6B7280",
	500: "#9CA3AF",
	400: "#D1D5DB",
	300: "#E5E7EB",
	200: "#F3F4F6",
	100: "#F9FAFB",
} as const;

// Neutral Colors
export const neutral = {
	900: "#1F1F1F",
	700: "#4B4B4B",
	600: "#8E8E8E",
	500: "#CACACA",
	400: "#E1E1E1",
	300: "#EEEEEE",
	200: "#F5F5F5",
	100: "#FAFAFA",
} as const;

// Danger Colors
export const danger = {
	800: "#EC2D30",
	700: "#F64C4C",
	600: "#EB6F70",
	500: "#F49898",
	400: "#FFCCD2",
	300: "#FFEBEE",
	200: "#FEF2F2",
	100: "#FFFBFB",
} as const;

// Warning Colors
export const warning = {
	800: "#FE9B0E",
	700: "#FFAD0D",
	600: "#FFC62B",
	500: "#FFDD82",
	400: "#FFEAB3",
	300: "#FFF7E1",
	200: "#FFF9EE",
	100: "#FFFDFA",
} as const;

// Success Colors
export const success = {
	800: "#0C9D61",
	700: "#47B881",
	600: "#6BC497",
	500: "#97D4B4",
	400: "#C0E5D1",
	300: "#E5F5EC",
	200: "#F2FAF6",
	100: "#FBFEFC",
} as const;

// Info Colors
export const info = {
	800: "#3A70E2",
	700: "#3B82F6",
	600: "#4BA1FF",
	500: "#93C8FF",
	400: "#BDDDFF",
	300: "#E4F2FF",
	200: "#F1F8FF",
	100: "#F8FCFF",
} as const;

// Black, White & Stroke
export const base = {
	black: "#000000",
	white: "#FFFFFF",
	stroke: "#EAECF0",
} as const;

// Gradients
export const gradients = {
	a: {
		from: "#005D43",
		to: "#0EBB7E",
	},
	b: {
		from: "#1F1D2B",
		to: "#4D4B5A",
	},
	c: {
		from: "#58381A",
		to: "#BF9D41",
	},
	d: {
		from: "#374151",
		to: "#636C7B",
	},
	e: {
		from: "#4B4B4B",
		to: "#848484",
	},
} as const;

// Complete color palette export
export const colors = {
	primary,
	secondary,
	tertiary,
	text,
	neutral,
	danger,
	warning,
	success,
	info,
	base,
	gradients,
} as const;

// Utility functions for gradient creation
export const createGradient = (
	gradient: keyof typeof gradients,
	direction = "to right",
) => {
	const { from, to } = gradients[gradient];
	return `linear-gradient(${direction}, ${from}, ${to})`;
};

// CSS variable helpers
export const getCSSVar = (colorPath: string) => `var(--color-${colorPath})`;

// Type definitions for better TypeScript support
export type PrimaryColor = keyof typeof primary;
export type SecondaryColor = keyof typeof secondary;
export type TertiaryColor = keyof typeof tertiary;
export type TextColor = keyof typeof text;
export type NeutralColor = keyof typeof neutral;
export type DangerColor = keyof typeof danger;
export type WarningColor = keyof typeof warning;
export type SuccessColor = keyof typeof success;
export type InfoColor = keyof typeof info;
export type BaseColor = keyof typeof base;
export type GradientName = keyof typeof gradients;

export default colors;
