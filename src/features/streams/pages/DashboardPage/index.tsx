import type { NextPage } from 'next'

import { withLogin } from '@/src/features/auth/hocs/withLogin'
import { InternalLayout } from '@/src/features/ui/InternalLayout'

import { Dashboard } from '../../components/Dashboard'
import { DashboardContextProvider } from '../../contexts/dashboard'

const Page: NextPage = () => {
  return (
    <DashboardContextProvider>
      <InternalLayout isDashboardHeader>
        <Dashboard />
      </InternalLayout>
    </DashboardContextProvider>
  )
}

export const DashboardPage = withLogin(Page)
