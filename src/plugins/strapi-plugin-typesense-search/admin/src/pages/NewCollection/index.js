/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import { Link } from '@strapi/design-system/Link';
import ArrowLeft from '@strapi/icons/ArrowLeft';
import getTrad from '../../utils/getTrad';
import { Layout, ContentLayout, HeaderLayout } from '@strapi/design-system/Layout';
import { useIntl } from 'react-intl';
import Wizard from './../../components/Wizard'
const Dashboard = () => {
  const { formatMessage } = useIntl();

  return (
    <div>
      <HeaderLayout
        id="title"
        title={'Create Search Collection'}
        subtitle={formatMessage({
          id: getTrad('listView.headerLayout.description'),
          defaultMessage: 'Create a new Typesense search collection from your Strapi content.',
        })}
        navigationAction={
          <Link startIcon={<ArrowLeft />} to="/plugins/content-type-builder/">
            {formatMessage({
              id: 'app.components.go-back',
              defaultMessage: 'Back',
            })}
          </Link>
        }
      />
      <ContentLayout>
        <Wizard />
      </ContentLayout>

    </div>
  );
};

export default memo(Dashboard);
