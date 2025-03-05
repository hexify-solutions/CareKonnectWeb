import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { SEARCH } from '../queryKey';
import { searchHandler } from './service';


export function useSearch(params) {
    return useQuery({
        queryKey: [ ...SEARCH, params],
        placeholderData: keepPreviousData,
        queryFn: () => searchHandler(params),
    })
}