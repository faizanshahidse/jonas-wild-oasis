import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';

import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Textarea from '../../ui/Textarea';
import { addEditCabins } from '../../services/apiCabins';
import toast from 'react-hot-toast';
// import styles from './CreateCabinForm.module.scss';

function CreateCabinForm({ cabinToEdit = {} }) {
  const { id: editId, ...editValues } = cabinToEdit;

  const isEditSession = Boolean(editId);

  const { register, handleSubmit, getValues, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const queryClient = useQueryClient();

  const { errors } = formState;

  const { mutate: createCabin, isPending } = useMutation({
    mutationFn: addEditCabins,
    onSuccess: () => {
      toast.success('New Cabin successfully created');
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  const { mutate: editCabin } = useMutation({
    mutationFn: ({ newCabinData, id }) => addEditCabins(newCabinData, id),
    onSuccess: () => {
      toast.success('Cabin updated successfully');
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
      // reset();
    },
    onError: (err) => toast.error(err.message),
  });

  const onSubmit = (data) => {
    const image = typeof data.image === 'string' ? data.image : data.image[0];

    if (isEditSession)
      editCabin({ newCabinData: { ...data, image }, id: editId });
    else createCabin({ ...data, image });
  };

  const onError = (error) => {
    console.log(error);
  };

  return (
    <>
      {isPending && <p>Loading........</p>}
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <FormRow label="Create Name" error={errors?.name?.message}>
          <Input
            type="text"
            id="name"
            register={register}
            required="Name is required"
          />
        </FormRow>

        <FormRow label="Maximum Capacity" error={errors?.max_capacity?.message}>
          <Input
            type="number"
            id="max_capacity"
            register={register}
            required="This field is required"
            min={{ value: 1, message: 'Capacity should be at least 1' }}
          />
        </FormRow>

        <FormRow label="Price" error={errors?.regular_price?.message}>
          <Input type="number" id="regular_price" register={register} />
        </FormRow>

        <FormRow label="Discount" error={errors?.discount?.message}>
          <Input
            type="number"
            id="discount"
            defaultValue={0}
            register={register}
            validate={(value) =>
              Number(value) <= Number(getValues().regular_price) ||
              'Discount should be less than Regular Price'
            }
          />
        </FormRow>

        <FormRow label="Description" error={errors?.description?.message}>
          <Textarea id="description" register={register} />
        </FormRow>

        <FormRow label="Cabin Photo" error={errors?.image?.message}>
          <FileInput id="image" accept="image/*" register={register} />
        </FormRow>

        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button variation="primary" type="submit" disabled={isPending}>
          {isEditSession ? 'Edit cabin' : 'Add cabin'}
        </Button>
      </Form>
    </>
  );
}

CreateCabinForm.propTypes = {
  cabinToEdit: PropTypes.object,
};

export default CreateCabinForm;
