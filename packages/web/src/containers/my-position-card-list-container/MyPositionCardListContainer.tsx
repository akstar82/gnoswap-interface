import MyPositionCardList from "@components/common/my-position-card-list/MyPositionCardList";
import { useWindowSize } from "@hooks/common/use-window-size";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ValuesType } from "utility-types";

export const POSITION_CONTENT_LABEL = {
  VALUE: "Value",
  APR: "APR",
  CURRENT_PRICE: "Current Price",
  MIN_PRICE: "Min Price",
  MAX_PRICE: "Max Price",
  STAR_TAG: "✨",
} as const;

export type POSITION_CONTENT_LABEL = ValuesType<typeof POSITION_CONTENT_LABEL>;

interface MyPositionCardListContainerProps {
  loadMore?: boolean;
}

const MyPositionCardListContainer: React.FC<
  MyPositionCardListContainerProps
> = () => {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width } = useWindowSize();
  const [mobile, setMobile] = useState(false);
  const handleResize = () => {
    if (typeof window !== "undefined") {
      window.innerWidth < 1000 ? setMobile(true) : setMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const movePoolDetail = (id: string) => {
    router.push(`/earn/pool/${id}`);
  };

  const onClickLoadMore = () => {
    // Todo
  };

  return (
    <MyPositionCardList
      loadMore={true}
      isFetched={true}
      onClickLoadMore={onClickLoadMore}
      positions={[]}
      movePoolDetail={movePoolDetail}
      currentIndex={currentIndex}
      mobile={mobile}
      width={width}
      showPagination={false}
      showLoadMore={false}
    />
  );
};

export default MyPositionCardListContainer;
