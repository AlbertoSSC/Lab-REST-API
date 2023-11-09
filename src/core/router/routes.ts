import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  characterDetail: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/character',
  characterDetail: '/character/:id',
};

type NavigationFunction = (id: number) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'characterDetail'> {
  characterDetail: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  characterDetail: (id) => generatePath(switchRoutes.characterDetail, { id }),
};
