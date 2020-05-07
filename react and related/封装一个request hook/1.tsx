import React, { useState, useEffect } from "react";

export const useRequest = (
  fn,
  dependencies
): { data: any; loading: boolean; request: Function } => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<Boolean>(false);

  // 请求的方法 这个方法会自动管理loading
  const request = () => {
    setLoading(true);
    fn()
      .then(setData)
      .finally(() => {
        setLoading(false);
      });
  };

  // 根据传入的依赖项来执行请求
  useEffect(() => {
    request();
  }, dependencies);

  return {
    // 请求获取的数据
    data,
    // loading状态
    loading,
    // 请求的方法封装
    request,
  };
};
