import {
	type QueryKey,
	type UseQueryOptions,
	type UseQueryResult,
	useQuery,
} from "@tanstack/react-query";

import {
	type GetAllCategoriesQueryParams,
	type GetAllCategoriesResponse,
	type GetCategoryParams,
	type GetCategoryResponse,
	getAllCategories,
	getCategory,
} from "../rest/categories";

export function useAllCategories(
	queryParams: GetAllCategoriesQueryParams,
	options?: Omit<
		UseQueryOptions<
			GetAllCategoriesResponse,
			Error,
			GetAllCategoriesResponse,
			QueryKey
		>,
		"queryKey" | "queryFn"
	>,
): UseQueryResult<GetAllCategoriesResponse, Error> {
	return useQuery({
		queryKey: ["categories", queryParams],
		queryFn: () => getAllCategories({ queryParams }),
		...options,
	});
}

export function useCategory(
	params: GetCategoryParams,
	options?: Omit<
		UseQueryOptions<GetCategoryResponse, Error, GetCategoryResponse, QueryKey>,
		"queryKey" | "queryFn"
	>,
): UseQueryResult<GetCategoryResponse, Error> {
	return useQuery({
		queryKey: ["category", params],
		queryFn: () => getCategory({ params }),
		...options,
	});
}
