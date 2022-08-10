import { useRef, useState } from "react";
import { Layout } from "../components/Layout";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { ControlledInput } from "../components/ControlledInput";
import { EyeIcon, EyeOffIcon, UploadIcon } from "@heroicons/react/outline";
import { Button } from "../components/Button";
import { GalleryImage } from "../components/GalleryImage";
import { useCreateUser } from "../hooks/useCreateUser";
import { useUploadImageProfile } from "../hooks/useUploadImageProfile";
import { signUpSchema } from "../validators";
import { RenderConditional } from "../components/RenderConditional";

const SignUp = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPasswordConfirmed, setIsShowPasswordConfirmed] = useState(false);
  const [isVisibleImageGallery, setIsVisibleImageGallery] = useState(false);

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(signUpSchema)
  });

  const { handleRequest, loading } = useCreateUser();

  const { 
    avatar, 
    errorImage, 
    handleUploadFile, 
    loadingUploadFile, 
    previewUploadFile 
  } = useUploadImageProfile();
    
    const onSubmit = async (data: any) => {
      const formData = new FormData();

      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('occupation', data.occupation);
      formData.append('password', data.password);
     
      avatar?.forEach(avatar => {
        formData.append('avatar', avatar);
      });
     
      await handleRequest(formData);
    };    

  return (
    <>
      <GalleryImage 
        photo={previewUploadFile}
        onClick={() => setIsVisibleImageGallery(false)}
        isVisible={isVisibleImageGallery}
      />

      <Layout>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4 flex flex-col p-8 ">
            <div className="mt-4">
              <div className="text-center mb-6">
                <strong className="text-3xl text-blue-800 mb-4">Crie sua conta hoje</strong>
              </div>
              <div>
                <ControlledInput
                  name="name"
                  control={control}
                  label="Nome"
                  placeholder="Digite o seu nome"
                />
              </div>

              <div className="mt-6">
                <ControlledInput 
                  name="email"
                  control={control}
                  label="E-mail"
                  placeholder="Digite o seu e-mail"
                />
              </div>

              <div className="mt-6">
                <ControlledInput 
                  name="occupation"
                  control={control}
                  label="Profissão"
                  placeholder="ex: UI\UX Design"
                />
              </div>

              <div className="mt-10 mb-5">
                <label className="font-bold text-blue-800 text-lg">Foto de perfil</label>
                <div className="flex flex-col xs:flex-row justify-between mt-2">
                  <div className="2xl:w-80 base:w-96 lg:w-56 w-full flex items-center justify-center flex-wrap">
                    <Button 
                      type="button" 
                      title="Selecionar imagem" 
                      rightIcon={
                        <UploadIcon className="h-6 w-6 text-white" />
                      } 
                      onClick={() => inputFileRef.current?.click()}
                      />
                  </div>
                  <input type="file" className="hidden" ref={inputFileRef} onChange={handleUploadFile} />

                  <RenderConditional
                    condition={!errorImage && loadingUploadFile}
                  >
                    <div className="flex mt-4 xs:mt-0">
                      <div className="flex items-center justify-center flex-col">
                        <p className="uppercase text-gray-500 font-semibold text-[12px]">preview da imagem</p>
                        <div className="h-16 w-16 rounded-md border-2 border-blue-200 shadow-lg flex items-center justify-center">
                        <div 
                          style={{ borderTopColor: "transparent" }}
                          className="w-10 h-10 mt-1 border-2 border-blue-200 border-solid rounded-full animate-spin"
                        />
                        </div>
                      </div>
                    </div>
                  </RenderConditional>
                  
                  <RenderConditional
                    condition={!errorImage && !!previewUploadFile && !loadingUploadFile}
                  >
                    <div className="flex mt-4 xs:mt-0 relative">
                      <div className="flex items-center justify-center flex-col">
                        <p className="uppercase text-gray-500 font-semibold text-[12px]">preview da imagem</p>
                        <img 
                          src={previewUploadFile || ''} 
                          onClick={() => setIsVisibleImageGallery(true)} 
                          alt="foto de perfil" 
                          className="h-16 w-16 mt-1 cursor-pointer rounded-md border-2 border-blue-200 shadow-lg relative" 
                        />
                      </div>
                      </div>
                  </RenderConditional>

                </div>
                <RenderConditional 
                  condition={errorImage}
                  component={
                    <span 
                      className="uppercase text-xs text-red-600 font-bold"
                    >
                      Arquivos suportados apenas com as extensões (*png, *jpeg, *jpg)
                    </span>
                  }
                />
              </div>

              <div>
                <ControlledInput 
                  name="password"
                  control={control}
                  placeholder="Digite uma senha"
                  label="Senha"
                  type={!isShowPassword ? 'password' : 'text'}
                  rightIcon={
                    !isShowPassword 
                      ? <EyeIcon className="h-6 w-6 text-gray-500" /> 
                      : <EyeOffIcon className="h-6 w-6 text-gray-500" />
                  }
                  onClickRightIcon={() => setIsShowPassword(prevState => !prevState)}
                />
              </div>

              <div className="mt-5">
                <ControlledInput 
                  name="passwordConfirme"
                  control={control}
                  placeholder="Confirme sua senha"
                  label="Confirmar senha"
                  type={!isShowPasswordConfirmed ? 'password' : 'text'}
                  rightIcon={
                    !isShowPasswordConfirmed 
                      ? <EyeIcon className="h-6 w-6 text-gray-500" /> 
                      : <EyeOffIcon className="h-6 w-6 text-gray-500" />
                  }
                  onClickRightIcon={() => setIsShowPasswordConfirmed(prevState => !prevState)}
                />
              </div>

              <div className="mt-10 flex w-full items-center justify-center">
                <div className="w-80">
                  <Button title="Criar conta" isLoading={loading} />
                </div>
              </div>
            </div>
          </div>
        </form>
      </Layout>
    </>
  )
}

export default SignUp;