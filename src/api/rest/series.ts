import axios from "axios";

const SERVER_BASE_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

if (!SERVER_BASE_URL) {
	throw new Error("NEXT_PUBLIC_SERVER_BASE_URL is not defined");
}

const PUBLIC_SERIES_BASE_URL = `${SERVER_BASE_URL}/api/series`;

export type Series = {
	id: string;
	pictureId: string;
	name: string;
	slug: string;
	description: string;
	parentId: string | null;
	parent: Series | null;
	subseries: Series[];
};

export type GetAllSeriesQueryParams = {
	page: number;
	limit: number;
	sort: string;
	name?: string | undefined;
	slug?: string | undefined;
	parentId?: string | undefined;
	includeSubseries?: boolean | undefined;
};

export type GetAllSeriesResponse = {
	data: {
		series: Series[];
		total: number;
		pages: number;
		limit: number;
		page: number;
	};
	info: {
		message: string;
	};
};

export async function getAllSeries({
	queryParams,
}: Readonly<{
	queryParams: GetAllSeriesQueryParams;
}>): Promise<GetAllSeriesResponse> {
	const { page, limit, sort, name, slug, parentId, includeSubseries } =
		queryParams;

	const query = new URLSearchParams({
		page: page.toString(),
		limit: limit.toString(),
		sort,
		...(name && { name }),
		...(slug && { slug }),
		...(parentId && { parentId }),
		...(includeSubseries && { includeSubseries: "true" }),
	});

	const response = await axios.get(`${PUBLIC_SERIES_BASE_URL}?${query}`);

	return response.data;
}

export type GetSeriesParams = {
	id: string;
};

export type GetSeriesResponse = {
	data: {
		series: Series;
	};
	info: {
		message: string;
	};
};

export async function getSeries({
	params,
}: Readonly<{
	params: GetSeriesParams;
}>): Promise<GetSeriesResponse> {
	const response = await axios.get(`${PUBLIC_SERIES_BASE_URL}/${params.id}`);

	return response.data;
}
