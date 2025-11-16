import { redirect } from 'next/navigation';

export default function DashboardRootPage() {
  // Redirect to the main analytics dashboard by default
  redirect('/dashboard/analytics');
}
