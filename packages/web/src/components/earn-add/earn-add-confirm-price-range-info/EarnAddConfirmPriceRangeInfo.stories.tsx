import EarnAddConfirmPriceRangeInfo, { type EarnAddConfirmPriceRangeInfoProps } from "./EarnAddConfirmPriceRangeInfo";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "earn-add/EarnAddConfirmPriceRangeInfo",
  component: EarnAddConfirmPriceRangeInfo,
} as Meta<typeof EarnAddConfirmPriceRangeInfo>;

const priceRangeInfo = {
  minPrice: "123",
  minPriceLable: "GNOS per ETH",
  maxPrice: "123",
  maxPriceLable: "GNOS per ETH",
  currentPrice: "11 ETH per GNOT",
  feeBoost: "x10.23",
  estimatedAPR: "N/A",
};

export const Default: StoryObj<EarnAddConfirmPriceRangeInfoProps> = {
  args: { ...priceRangeInfo },
};