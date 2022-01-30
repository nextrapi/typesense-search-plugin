import dataManagerProvider from './components/DataManagerProvider/reducer';
import pluginId from './pluginId';

const reducers = {
  [`${pluginId}_dataManagerProvider`]: dataManagerProvider,
};

export default reducers;
