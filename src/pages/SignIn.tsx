import { useState } from "react";
import { Layout } from "../components/Layout";
import { MailIcon, EyeIcon, EyeOffIcon, LockClosedIcon } from '@heroicons/react/outline';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { ControlledInput } from "../components/ControlledInput";
import { Button } from "../components/Button";
import { signInSchema } from "../validators";

const SignIn = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(signInSchema)
  });

  const onSubmit = (data: any) => console.log(data);
  
  return (
    <Layout>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-4 flex flex-col p-8 ">
            <div className="text-center mb-6">
              <strong className="text-3xl text-blue-800 mb-4">Faça seu login</strong>
              
            </div>
            <div>
              <ControlledInput
                name="email"
                control={control}
                label="E-mail"
                placeholder="Digite o seu e-mail"
                leftIcon={
                  <MailIcon className="h-6 w-6 text-gray-500" />
                }
              />
             
            <div className="mt-5">
            <ControlledInput 
              name="password"
              control={control}
              placeholder="Digite sua senha"
              label="Senha"
              type={!isShowPassword ? 'password' : 'text'}
              leftIcon={<LockClosedIcon className="h-6 w-6 text-gray-500" />}
              rightIcon={
                !isShowPassword 
                  ? <EyeIcon className="h-6 w-6 text-gray-500" /> 
                  : <EyeOffIcon className="h-6 w-6 text-gray-500" />
              }
              onClickRightIcon={() => setIsShowPassword(prevState => !prevState)}
            />
              
            </div>
            <div className="mt-8 flex w-full items-center justify-center">
             <div className="w-80">
              <Button title="Entrar" />
             </div>
            </div>
          </div>
        </div>
      </form>      
    </Layout>
  )
}

export default SignIn;