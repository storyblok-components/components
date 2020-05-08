import ComponentNotFound from './component_not_found';
import VideoComponent from './video-component';

const ComponentList = {
  'video-component': VideoComponent,
};

const Components = (type) => {
  if (typeof ComponentList[type] === 'undefined') {
    return ComponentNotFound;
  }
  return ComponentList[type];
};
export { VideoComponent, ComponentNotFound, Components, ComponentList };
