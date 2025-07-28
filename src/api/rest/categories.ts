import axios from "axios";

const SERVER_BASE_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

if (!SERVER_BASE_URL) {
	throw new Error("NEXT_PUBLIC_SERVER_BASE_URL is not defined");
}

const PUBLIC_CATEGORIES_BASE_URL = `${SERVER_BASE_URL}/api/categories`;

export type Category = {
	id: string;
	pictureId: string;
	name: string;
	slug: string;
	description: string;
	parentId: string | null;
	parent: Category | null;
	subcategories: Category[];
};

export type GetAllCategoriesQueryParams = {
	page: number;
	limit: number;
	sort: string;
	name?: string | undefined;
	slug?: string | undefined;
	parentId?: string | undefined;
	includeSubcategories?: boolean | undefined;
};

export type GetAllCategoriesResponse = {
	data: {
		categories: Category[];
		total: number;
		pages: number;
		limit: number;
		page: number;
	};
	info: {
		message: string;
	};
};

export async function getAllCategories({
	queryParams,
}: Readonly<{
	queryParams: GetAllCategoriesQueryParams;
}>): Promise<GetAllCategoriesResponse> {
	const { page, limit, sort, name, slug, parentId, includeSubcategories } =
		queryParams;

	const query = new URLSearchParams({
		page: page.toString(),
		limit: limit.toString(),
		sort,
		...(name && { name }),
		...(slug && { slug }),
		...(parentId && { parentId }),
		...(includeSubcategories && { includeSubcategories: "true" }),
	});

	const response = await axios.get(`${PUBLIC_CATEGORIES_BASE_URL}?${query}`);

	return response.data;
}

export type GetCategoryParams = {
	id: string;
};

export type GetCategoryResponse = {
	data: {
		category: Category;
	};
	info: {
		message: string;
	};
};

export async function getCategory({
	params,
}: Readonly<{
	params: GetCategoryParams;
}>): Promise<GetCategoryResponse> {
	const response = await axios.get(
		`${PUBLIC_CATEGORIES_BASE_URL}/${params.id}`,
	);

	return response.data;
}
