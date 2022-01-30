import { useState } from 'react';

import { useNotification, useTracking } from '@strapi/helper-plugin';
import isEmpty from 'lodash/isEmpty';
import sortBy from 'lodash/sortBy';
import toLower from 'lodash/toLower';
import isEqual from 'lodash/isEqual';
import matchSorter from 'match-sorter';
import pluginId from '../../pluginId';
import getTrad from '../../utils/getTrad';
import useDataManager from '../../hooks/useDataManager';
import { useHistory } from "react-router-dom";
const useSidebar = () => {
    let history = useHistory();

    const toggleNotification = useNotification();
    const [search, setSearch] = useState('');
    const { collectionLinks, curationLinks, synonymLinks } = useDataManager()
    const toggleNotificationCannotCreateSchema = () => {
        toggleNotification({
            type: 'info',
            message: {
                id: `${getTrad('notification.info.creating.notSaved')}`,
                defaultMessage: 'Please save your work before creating a new collection type or component',
            },
        });
    };


    const data = [
        {
            name: 'models',
            title: {
                id: `collections`,
                defaultMessage: 'Collections',
            },
            customLink: {
                id: `${getTrad('button.model.create')}`,
                defaultMessage: 'Create new collection',
                onClick: () => history.push(`/plugins/${pluginId}/collections/create`),
            },
            links: collectionLinks,
        }, {
            name: 'models',
            title: {
                id: `curations`,
                defaultMessage: 'Curations',
            },
            customLink: {
                id: `${getTrad('button.model.create')}`,
                defaultMessage: 'Create new curation',
                onClick: console.log('handleClickOpenModalCreateCollectionType'),
            },
            links: curationLinks,
        }, {
            name: 'models',
            title: {
                id: `synonyms`,
                defaultMessage: 'Synonym',
            },
            customLink: {
                id: `${getTrad('button.model.create')}`,
                defaultMessage: 'Create new synonym',
                onClick: console.log('handleClickOpenModalCreateCollectionType'),
            },
            links: synonymLinks,
        }
    ];

    const matchByTitle = links =>
        matchSorter(links, toLower(search), { keys: [item => toLower(item.title)] });

    const getMenu = () => {
        // Maybe we can do it simpler with matchsorter wildcards ?
        return data.map(section => {
            const hasChild = section.links.some(l => !isEmpty(l.links));

            if (hasChild) {
                return {
                    ...section,
                    links: section.links.map(l => ({ ...l, links: matchByTitle(l.links) })),
                };
            }

            return {
                ...section,
                links: matchByTitle(section.links),
            };
        });
    };

    return { menu: getMenu(), searchValue: search, onSearchChange: setSearch };
};

export default useSidebar;
