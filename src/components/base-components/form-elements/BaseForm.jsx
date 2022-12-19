import { useForm } from "react-hook-form";
import BaseButton from "../base-button/BaseButton";
import BaseInput from "./BaseInput";
import BaseCheckbox from "./BaseCheckbox";
import BaseSelect from "./BaseSelect";

const fieldMap = {
    BaseInput,
    BaseCheckbox,
    BaseSelect
}


export default function BaseForm({
    fields,
    onSubmit
    // children
}) {

    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(fields);
    return (
        <form className="m-4 flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
            {
                fields.map((field, index) => {
                    const FieldComponent = fieldMap[field.fieldType];
                    const { fieldType, ...restProps } = field
                    return (
                        <FieldComponent
                            key={`field-${field.name}-${index}`}
                            register={register}
                            errors={errors}
                            {...restProps} >
                        </FieldComponent>
                    )
                })
            }
            <span>
                <BaseButton type="submit" variant="secondary" >
                    Submit
                </BaseButton>
            </span>
        </form >
    )

}