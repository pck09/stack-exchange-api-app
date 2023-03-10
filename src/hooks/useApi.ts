import { notification } from "antd";
import { useCallback, useEffect, useState } from "react";
import { ErrorData } from "../models/models";

interface UseApiParams<RequestDataType, ResponseDataType> {
  request: (values: RequestDataType) => Promise<ResponseDataType>;
}

const useApiRequest = <RequestDataType, ResponseDataType>({
  request,
}: UseApiParams<RequestDataType, ResponseDataType>) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorData>();
  const [data, setData] = useState<ResponseDataType>();

  const callRequest = useCallback(
    async (values: RequestDataType) => {
      try {
        setData(undefined);
        setError(undefined);
        setIsLoading(true);

        const response = await request(values);

        setData(response);
      } catch (response: any) {
        const responseData: ErrorData = await response.json();

        setError(responseData);
      } finally {
        setIsLoading(false);
      }
    },
    [request]
  );

  useEffect(() => {
    if (error) {
      notification.error({ message: error.error_message });
    }
  }, [error]);

  return {
    isLoading,
    error,
    callRequest,
    data,
  };
};

export default useApiRequest;
