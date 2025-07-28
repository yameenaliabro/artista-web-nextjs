import {
	type QueryKey,
	type UseQueryOptions,
	type UseQueryResult,
	useQuery,
} from "@tanstack/react-query";

import {
	type GetAllColorsQueryParams,
	type GetAllColorsResponse,
	type GetColorParams,
	type GetColorResponse,
	getAllColors,
	getColor,
} from "../rest/colors";

export function useAllColors(
	queryParams: GetAllColorsQueryParams,
	options?: Omit<
		UseQueryOptions<
			GetAllColorsResponse,
			Error,
			GetAllColorsResponse,
			QueryKey
		>,
		"queryKey" | "queryFn"
	>,
): UseQueryResult<GetAllColorsResponse, Error> {
	return useQuery({
		queryKey: ["colors", queryParams],
		queryFn: () => getAllColors({ queryParams }),
		...options,
	});
}

export function useColor(
	params: GetColorParams,
	options?: Omit<
		UseQueryOptions<GetColorResponse, Error, GetColorResponse, QueryKey>,
		"queryKey" | "queryFn"
	>,
): UseQueryResult<GetColorResponse, Error> {
	return useQuery({
		queryKey: ["color", params],
		queryFn: () => getColor({ params }),
		...options,
	});
}
