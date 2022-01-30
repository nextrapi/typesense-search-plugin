import React from 'react';
import Plus from '@strapi/icons/Plus';
import { Box } from '@strapi/design-system/Box';
import {
    SubNav,
    SubNavHeader,
    SubNavLink,
    SubNavLinkSection,
    SubNavSection,
    SubNavSections,
} from '@strapi/design-system/SubNav';
import { TextButton } from '@strapi/design-system/TextButton';
import upperFirst from 'lodash/upperFirst';
import { useIntl } from 'react-intl';
import getTrad from '../../utils/getTrad';
import useSidebar from './useSidebar';
import Apps from '@strapi/icons/Apps';
import pluginId from '../../pluginId';

const Sidebar = () => {
    const { menu } = useSidebar()
    const { searchValue, onSearchChange } = { searchValue: '', onSearchChange: (a) => console.log('onSearchChange', a) }
    const { formatMessage } = useIntl();
    return (
        <SubNav
            ariaLabel={formatMessage({
                id: `${getTrad('plugin.name')}`,
                defaultMessage: 'Content-Types Builder',
            })}
        >
            <SubNavHeader
                searchable
                value={searchValue}
                onClear={() => onSearchChange('')}
                onChange={e => onSearchChange(e.target.value)}
                label={formatMessage({
                    id: `${getTrad('plugin.name')}`,
                    defaultMessage: 'Typesense Search',
                })}
                searchLabel="Search..."
            />
            <SubNavSections>
                <SubNavLink to={`/plugins/${pluginId}/dashboard`} withBullet icon={<Apps />} >
                    Dashboard
                </SubNavLink>
                {menu.map(section => {
                    const title = section.title.id;

                    return (
                        <React.Fragment key={section.name}>
                            <SubNavSection
                                label={formatMessage({ id: title, defaultMessage: title })}
                                collapsable
                                badgeLabel={section.links.length.toString()}
                            >
                                {section.links.map(link => {
                                    if (link.links) {
                                        return (
                                            <SubNavLinkSection key={link.name} label={upperFirst(link.title)}>
                                                {link.links.map(subLink => (
                                                    <SubNavLink to={subLink.to} active={subLink.active} key={subLink.name}>
                                                        {upperFirst(
                                                            formatMessage({ id: subLink.name, defaultMessage: subLink.title })
                                                        )}
                                                    </SubNavLink>
                                                ))}
                                            </SubNavLinkSection>
                                        );
                                    }

                                    return (
                                        <SubNavLink to={link.to} active={link.active} key={link.name}>
                                            {upperFirst(formatMessage({ id: link.name, defaultMessage: link.title }))}
                                        </SubNavLink>
                                    );
                                })}
                            </SubNavSection>
                            {section.customLink && (
                                <Box as="li" paddingLeft={7}>
                                    <TextButton onClick={section.customLink.onClick} startIcon={<Plus />}>
                                        {formatMessage({
                                            id: section.customLink.id,
                                            defaultMessage: section.customLink.defaultMessage,
                                        })}
                                    </TextButton>
                                </Box>
                            )}
                        </React.Fragment>
                    );
                })}
            </SubNavSections>
        </SubNav>
    );
};

export default Sidebar;
