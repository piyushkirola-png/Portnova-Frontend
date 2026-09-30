import type { Metadata } from 'next';
import DashboardInteractive from './dashboard-components/DashboardInteractive';

export const metadata: Metadata = {
  title: 'My Account - Portnova',
  description:
    'Manage your Portnova account, view order history, track deliveries, manage wishlist, update profile information, and access saved addresses in your personalized dashboard.',
};

export default function UserDashboardPage() {
  return <DashboardInteractive />;
}
