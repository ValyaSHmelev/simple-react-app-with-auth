import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ordersApi } from '../api/services/orders';

export const useOrders = () => {
  const queryClient = useQueryClient();

  const { data: orders, isLoading, error } = useQuery({
    queryKey: ['orders'],
    queryFn: ordersApi.getAll,
  });

  const createOrder = useMutation({
    mutationFn: ordersApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries(['orders']);
    },
  });

  const updateOrder = useMutation({
    mutationFn: ({ id, data }) => ordersApi.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(['orders']);
    },
  });

  const deleteOrder = useMutation({
    mutationFn: ordersApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries(['orders']);
    },
  });

  return {
    orders,
    isLoading,
    error,
    createOrder,
    updateOrder,
    deleteOrder,
  };
};
