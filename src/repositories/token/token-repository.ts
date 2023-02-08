import { SearchOption } from "@/common/types/data-prop-types";
import {
	TokenDatatableResponse,
	TokenInfoResponse,
	SummaryPopularTokenListResponse,
	SummaryHighestRewardListResponse,
	SummaryRecentlyAddedListResponse,
	TokenSearchListResponse,
	ExchangeRateResponse,
	TokenMetaListResponse,
	USDExchangeRateResponse,
} from "./response";

export interface TokenRepository {
	getAllTokenMetas: () => Promise<TokenMetaListResponse>;

	getTokenById: (tokenId: string) => Promise<TokenInfoResponse>;

	searchTokens: (
		keyword: string,
		address: string,
	) => Promise<TokenSearchListResponse>;

	getAllExchangeRates: (tokenId: string) => Promise<ExchangeRateResponse>;

	getUSDExchangeRate: (tokenId: string) => Promise<USDExchangeRateResponse>;

	getTokenDatatable: () => Promise<TokenDatatableResponse>;

	getSummaryPopularTokens: () => Promise<SummaryPopularTokenListResponse>;

	getSummaryHighestRewardTokens: () => Promise<SummaryHighestRewardListResponse>;

	getSummaryRecentlyAddedTokens: () => Promise<SummaryRecentlyAddedListResponse>;
}
