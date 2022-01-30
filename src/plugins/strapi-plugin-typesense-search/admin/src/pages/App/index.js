/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';
import { LoadingIndicatorPage, CheckPagePermissions, NotFound } from '@strapi/helper-plugin';
import { Layout, ContentLayout, HeaderLayout } from '@strapi/design-system/Layout';
import pluginPermissions from '../../permissions';
import pluginId from '../../pluginId';
import Sidebar from '../../components/Sidebar';
import Dashboard from '../Dashboard';
import DataManagerProvider from '../../components/DataManagerProvider';
import { Link } from '@strapi/design-system/Link';
import ArrowLeft from '@strapi/icons/ArrowLeft';
import getTrad from '../../utils/getTrad';
import NewCollection from '../NewCollection';

const App = () => {
  const { formatMessage } = useIntl();
  const title = formatMessage({
    id: `${pluginId}.plugin.name`,
    defaultMessage: 'Typesense Search',
  });
  return (
    <CheckPagePermissions permissions={pluginPermissions.main}>
      <DataManagerProvider>
        <Helmet title={title} />
        <Layout sideNav={<Sidebar />}>
          <Suspense fallback={<LoadingIndicatorPage />}>
            <Switch>
              <Route path={`/plugins/${pluginId}`} component={Dashboard} exact />
              <Route path={`/plugins/${pluginId}/dashboard`} component={Dashboard} exact />
              <Route path={`/plugins/${pluginId}/collections/create`} component={NewCollection} exact />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </Layout>
      </DataManagerProvider>
    </CheckPagePermissions>
  );
};

export default App;
