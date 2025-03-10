import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCabin } from '../../../services/apiCabins';
import toast from 'react-hot-toast';

export function useDeleteCabin() {
  const queryClient = useQueryClient();
  const { isPending, mutate, data } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      toast.success('Cabin successfully deleted!');
      queryClient.invalidateQueries({
        queryKey: ['cabin'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isPending, mutate, data };
}
