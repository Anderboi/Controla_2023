import ContainerBox from '@/components/common/ContainerBox';
import Header from '@/components/common/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='flex flex-col gap-y-2 h-full'>
    <Header title='Проекты'/>
    <ContainerBox classname='w-full h-full'>{children}</ContainerBox>
    </section>
  );
}
