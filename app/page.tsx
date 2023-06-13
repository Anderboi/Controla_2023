import ContainerBox from "@/components/atoms/ContainerBox";
import AuthForm from '@/components/molecules/AuthForm';

export default function Home() {
  return (
    <ContainerBox classname="px-8 py-4">
      <h1 className="text-3xl font-bold">Projects</h1>
      <AuthForm/>
    </ContainerBox>
  );
}
