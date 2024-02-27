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
          overflow-y-auto
          no-scrollbar
          gap-6
          "
      >
        {children}
      </ContainerBox>
    </>
  );
};

export default NotificationsPage;
