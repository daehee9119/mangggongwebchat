import { cloneDeep } from 'lodash';

export const InitialErrorState = {
  isModalActive: false,
  title: '',
  content: '',
};
export function getInitialErrorState() {
  return cloneDeep(InitialErrorState);
}
