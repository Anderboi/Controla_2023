import ContainerBox from "@/components/common/ContainerBox";

export default async function Home() {
  return (
    <ContainerBox classname="px-8 py-8">
      <div className="w-[600px] m-auto h-full flex flex-col justify-center gap-y-5">
        <h1 className="text-3xl font-bold">Авторизация</h1>
      </div>
    </ContainerBox>
  );
}
