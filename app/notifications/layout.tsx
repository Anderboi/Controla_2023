import Header from "@/components/feature/header/Header";
import ContainerBox from "@/components/common/ContainerBox";

const NotificationsPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header title="Уведомления" />
      <ContainerBox
        className="
          relative
          flex
          h-full
          flex-col
          gap-6
          overflow-y-auto
          no-scrollbar
          "
      >
        {children}
      </ContainerBox>
    </>
  );
};

export default NotificationsPage;
