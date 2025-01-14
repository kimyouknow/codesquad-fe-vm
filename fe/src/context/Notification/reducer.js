import { v4 as uuidv4 } from 'uuid';
import { DELETE_TOAST, NOTIFY_TOAST } from './type';

export const initState = {
  toastList: [
    {
      id: 1,
      type: 'Success',
      description: 'This is a success toast component',
    },
    {
      id: 2,
      type: 'Error',
      description: 'This is an error toast component',
    },
    {
      id: 3,
      type: 'Warning',
      description: 'This is an error toast component',
    },
  ],
};

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case NOTIFY_TOAST: {
      const { message, notifyType } = payload;
      const { toastList } = state;
      const newNotification = getNewToast(message, notifyType);
      return {
        toastList: [...toastList, newNotification],
      };
    }
    case DELETE_TOAST: {
      const { id } = payload;
      const { toastList } = state;
      const newToastList = toastList.filter(element => element.id !== id);
      return {
        toastList: newToastList,
      };
    }
    default:
      return { ...state };
  }
};

const getNewToast = (message, notifyType) => ({
  id: uuidv4(),
  type: notifyType,
  description: message,
});
