import { Control, Controller } from "react-hook-form"
import { TextInput, TextInputProps } from "./TextInput";

type ControlledInputProps = {
  control: Control<any, object>;
  name: string;
  defaultValue?: string;
} & Omit<TextInputProps, 'value'>

export const ControlledInput: React.FC<ControlledInputProps> = ({ control, name, defaultValue = "", ...rest }) => {
  
  return (
    <>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field, fieldState: { error } }) => {
          return  (
            <div className="relative">
              <TextInput {...field} {...rest} error={error?.message} />
              {error && (
                <div className="flex items-center justify-center absolute">
                  <span className="text-red-600">{error.message}</span>
                </div>
              )}
            </div>
          )
        }}
      />
    </>
  )
}