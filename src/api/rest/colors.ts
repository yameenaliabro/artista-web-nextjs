import axios from "axios";

const SERVER_BASE_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

if (!SERVER_BASE_URL) {
	throw new Error("NEXT_PUBLIC_SERVER_BASE_URL is not defined");
}

const PUBLIC_COLORS_BASE_URL = `${SERVER_BASE_URL}/api/colors`;

export type Colors = {
	id: string;
	pictureId: string;
	name: string;
	slug: string;
	description: string;
	parentId: string | null;
	parent: Colors | null;
	subcolors: Colors[];
};

export type GetAllColorsQueryParams = {
	page: number;
	limit: number;
	sort: string;
	name?: string | undefined;
	slug?: string | undefined;
	parentId?: string | undefined;
	includeSubcolors?: boolean | undefined;
};

export type GetAllColorsResponse = {
	data: {
		colors: Colors[];
		total: number;
		pages: number;
		limit: number;
		page: number;
	};
	info: {
		message: string;
	};
};

export async function getAllColors({
	queryParams,
}: Readonly<{
	queryParams: GetAllColorsQueryParams;
}>): Promise<GetAllColorsResponse> {
	const { page, limit, sort, name, slug, parentId, includeSubcolors } =
		queryParams;

	const query = new URLSearchParams({
		page: page.toString(),
		limit: limit.toString(),
		sort,
		...(name && { name }),
		...(slug && { slug }),
		...(parentId && { parentId }),
		...(includeSubcolors && { includeSubcolors: "true" }),
	});

	const response = await axios.get(`${PUBLIC_COLORS_BASE_URL}?${query}`);

	return response.data;
}

export type GetColorParams = {
	id: string;
};

export type GetColorResponse = {
	data: {
		color: Colors;
	};
	info: {
		message: string;
	};
};

export async function getColor({
	params,
}: Readonly<{
	params: GetColorParams;
}>): Promise<GetColorResponse> {
	const response = await axios.get(`${PUBLIC_COLORS_BASE_URL}/${params.id}`);

	return response.data;
}
