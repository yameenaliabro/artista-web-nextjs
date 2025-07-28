import {
	type QueryKey,
	type UseQueryOptions,
	type UseQueryResult,
	useQuery,
} from "@tanstack/react-query";

import {
	type GetAllSeriesQueryParams,
	type GetAllSeriesResponse,
	type GetSeriesParams,
	type GetSeriesResponse,
	getAllSeries,
	getSeries,
} from "../rest/series";

export function useAllSeries(
	queryParams: GetAllSeriesQueryParams,
	options?: Omit<
		UseQueryOptions<
			GetAllSeriesResponse,
			Error,
			GetAllSeriesResponse,
			QueryKey
		>,
		"queryKey" | "queryFn"
	>,
): UseQueryResult<GetAllSeriesResponse, Error> {
	return useQuery({
		queryKey: ["series", queryParams],
		queryFn: () => getAllSeries({ queryParams }),
		...options,
	});
}

export function useSeries(
	params: GetSeriesParams,
	options?: Omit<
		UseQueryOptions<GetSeriesResponse, Error, GetSeriesResponse, QueryKey>,
		"queryKey" | "queryFn"
	>,
): UseQueryResult<GetSeriesResponse, Error> {
	return useQuery({
		queryKey: ["series", params],
		queryFn: () => getSeries({ params }),
		...options,
	});
}
