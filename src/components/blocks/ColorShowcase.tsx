"use client";

import type { FC } from "react";

import { colors, createGradient } from "~/lib/colors";

interface ColorSwatchProps {
	color: string;
	name: string;
	textColor?: string;
}

const ColorSwatch: FC<ColorSwatchProps> = ({
	color,
	name,
	textColor = "#000",
}) => (
	<div className="flex flex-col items-center space-y-2">
		<div
			className="w-16 h-16 rounded-lg shadow-md border border-stroke"
			style={{ backgroundColor: color }}
		/>
		<span
			className="text-xs font-medium text-center"
			style={{ color: textColor }}
		>
			{name}
		</span>
	</div>
);

interface GradientSwatchProps {
	gradientName: keyof typeof colors.gradients;
	name: string;
}

const GradientSwatch: FC<GradientSwatchProps> = ({ gradientName, name }) => (
	<div className="flex flex-col items-center space-y-2">
		<div
			className="w-16 h-16 rounded-lg shadow-md border border-stroke"
			style={{ background: createGradient(gradientName) }}
		/>
		<span className="text-xs font-medium text-center text-text-700">
			{name}
		</span>
	</div>
);

const ColorSection: FC<{
	title: string;
	colors: Record<string, string>;
	className?: string;
}> = ({ title, colors: colorObj, className = "" }) => (
	<div className={`space-y-4 ${className}`}>
		<h3 className="text-lg font-semibold text-text-900">{title}</h3>
		<div className="grid grid-cols-5 md:grid-cols-10 gap-4">
			{Object.entries(colorObj).map(([key, value]) => (
				<ColorSwatch
					key={key}
					color={value}
					name={key}
					textColor={colors.text[700]}
				/>
			))}
		</div>
	</div>
);

export const ColorShowcase: FC = () => {
	return (
		<div className="p-8 space-y-12 bg-white min-h-screen">
			<div className="max-w-7xl mx-auto space-y-12">
				<h1 className="text-3xl font-bold text-text-1000 mb-8">Color System</h1>

				{/* Primary Colors */}
				<ColorSection title="Primary Colors" colors={colors.primary} />

				{/* Secondary Colors */}
				<ColorSection title="Secondary Colors" colors={colors.secondary} />

				{/* Tertiary Colors */}
				<ColorSection title="Tertiary Colors" colors={colors.tertiary} />

				{/* Text Colors */}
				<ColorSection title="Text Colors" colors={colors.text} />

				{/* Neutral Colors */}
				<ColorSection title="Neutral Colors" colors={colors.neutral} />

				{/* Semantic Colors */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					<ColorSection title="Danger" colors={colors.danger} />
					<ColorSection title="Warning" colors={colors.warning} />
					<ColorSection title="Success" colors={colors.success} />
					<ColorSection title="Info" colors={colors.info} />
				</div>

				{/* Base Colors */}
				<ColorSection title="Base Colors" colors={colors.base} />

				{/* Gradients */}
				<div className="space-y-4">
					<h3 className="text-lg font-semibold text-text-900">Gradients</h3>
					<div className="grid grid-cols-5 gap-4">
						{Object.keys(colors.gradients).map((key) => (
							<GradientSwatch
								key={key}
								gradientName={key as keyof typeof colors.gradients}
								name={`Gradient ${key.toUpperCase()}`}
							/>
						))}
					</div>
				</div>

				{/* Usage Examples */}
				<div className="space-y-6">
					<h3 className="text-lg font-semibold text-text-900">
						Usage Examples
					</h3>

					{/* Tailwind Classes */}
					<div className="space-y-4">
						<h4 className="text-md font-medium text-text-800">
							Using Tailwind Classes
						</h4>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
							<div className="p-4 bg-primary-1000 text-white rounded-lg">
								<code>bg-primary-1000 text-white</code>
							</div>
							<div className="p-4 bg-secondary-600 text-white rounded-lg">
								<code>bg-secondary-600 text-white</code>
							</div>
							<div className="p-4 bg-success-600 text-white rounded-lg">
								<code>bg-success-600 text-white</code>
							</div>
						</div>
					</div>

					{/* CSS Variables */}
					<div className="space-y-4">
						<h4 className="text-md font-medium text-text-800">
							Using CSS Variables
						</h4>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
							<div
								className="p-4 text-white rounded-lg"
								style={{ backgroundColor: "var(--color-primary-1000)" }}
							>
								<code>var(--color-primary-1000)</code>
							</div>
							<div
								className="p-4 text-white rounded-lg"
								style={{ backgroundColor: "var(--color-danger-800)" }}
							>
								<code>var(--color-danger-800)</code>
							</div>
							<div
								className="p-4 text-white rounded-lg"
								style={{ backgroundColor: "var(--color-info-700)" }}
							>
								<code>var(--color-info-700)</code>
							</div>
						</div>
					</div>

					{/* JavaScript Constants */}
					<div className="space-y-4">
						<h4 className="text-md font-medium text-text-800">
							Using JavaScript Constants
						</h4>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
							<div
								className="p-4 text-white rounded-lg"
								style={{ backgroundColor: colors.tertiary[600] }}
							>
								<code>colors.tertiary[600]</code>
							</div>
							<div
								className="p-4 text-white rounded-lg"
								style={{ backgroundColor: colors.warning[700] }}
							>
								<code>colors.warning[700]</code>
							</div>
							<div
								className="p-4 rounded-lg"
								style={{
									background: createGradient("a"),
									color: "white",
								}}
							>
								<code>createGradient('a')</code>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ColorShowcase;
