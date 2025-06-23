"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

const useQueryParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const currentSearchQuery = searchParams.toString();

  /**
   * Builds a query string by merging the provided parameters with the existing ones.
   * @param params - Key-value pairs of query parameters to add or update.
   * @returns A complete query string.
   */
  const buildQueryString = (params: Record<string, string | null | string[]>): string => {
    const queryParams = new URLSearchParams(currentSearchQuery)
    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        // if (Array.isArray(value)) {
        //   value.forEach((val) => queryParams.append(key, val))
        // } else {
          queryParams.set(key, value)
        // }
      } else {
        queryParams.delete(key)
      }
    })

    return queryParams.toString()
  }

  /**
   * Updates the URL by appending or modifying query parameters.
   * @param params - Key-value pairs of query parameters to add or update.
   */
  const updateQueryParams = (params: Record<string, string | null | string[]>): void => {
    const queryString = buildQueryString(params);
    router.push(`${pathname}?${queryString}`);
  };

  /**
   * Retrieves all current query parameters as an object.
   * @returns An object containing all query parameters.
   */
  const getAllQueryParams = (): Record<string, string> => {
    const queryParams: Record<string, string> = {}
    searchParams.forEach((value, key) => {
      queryParams[key] = value
    })
    return queryParams
  }

  /**
   * Removes specified keys from the URL's query parameters.
   * @param keysToRemove - An object where the keys represent the query parameters to be removed.
   */
  const removeQueryParams = (keysToRemove: string[]): void => {
    const queryParams = new URLSearchParams(currentSearchQuery);
    keysToRemove?.forEach((key) => {
      queryParams.delete(key);
    });

    router.push(`${pathname}?${queryParams.toString()}`);
  };

  /**
   * Checks if any of the specified keys exist and have values in the current URL's query parameters.
   * @param keysToCheck - An object where the keys represent the query parameters to check.
   * @returns A boolean indicating if at least one key exists and has a non-empty value.
   */
  const hasAnyQueryParams = (keysToCheck: Record<string, any>): boolean => {
    const queryParams = getAllQueryParams();

    return Object.keys(keysToCheck).some(
      (key) => queryParams[key] !== undefined && queryParams[key] !== ""
    );
  };


  return {
    updateQueryParams,
    getAllQueryParams,
    buildQueryString,
    removeQueryParams,
    hasAnyQueryParams,
    currentSearchQuery,
    pathname,
    searchParams
  };
};

export default useQueryParams;
