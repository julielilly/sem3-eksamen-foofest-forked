"use client";
import LoadingScreen from "./LodingScreen";
import { useIsFetching } from "@tanstack/react-query";

const GlobalLoading = () => {
  const isFetching = useIsFetching();

  return (
    isFetching > 0 && (
      <div className="global-loading">
        <LoadingScreen></LoadingScreen>
      </div>
    )
  );
};

export default GlobalLoading;
