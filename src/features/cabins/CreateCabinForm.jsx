import FileInput from '../../ui/FileInput';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Textarea from '../../ui/Textarea';
// import styles from './CreateCabinForm.module.scss';

function CreateCabinForm() {
  return (
    <Form>
      <FormRow label="Create Name">
        <Input type="text" id="name" />
      </FormRow>

      <FormRow label="Maximum Capacity">
        <Input type="text" id="max_capacity" />
      </FormRow>

      <FormRow label="Price">
        <Input type="text" id="regular_price" />
      </FormRow>

      <FormRow label="Discount">
        <Input type="text" id="discount" />
      </FormRow>

      <FormRow label="Description">
        <Textarea />
      </FormRow>

      <FormRow label="Cabin Photo">
        <FileInput />
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
