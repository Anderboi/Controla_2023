import CreateProjectForm from '@/components/feature/forms/CreateProjectForm';
import Header from '@/components/feature/header/Header';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const NotificationsPage = async () => {

    const supabase = createServerComponentClient({ cookies });
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      redirect("/");
    }
  return (
    <>
      <Header title='Уведомления'/>
      <CreateProjectForm/>
      <div>NotificationsPage</div>
    </>
  );
};

export default NotificationsPage;
