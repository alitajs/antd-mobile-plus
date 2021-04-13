import * as React from 'react';
import AModal from 'antd-mobile/lib/modal';
import { withError, useTracker } from '@alitajs/tracker';
import { ModalPropsType } from './PropsType';
import './index.less';

interface ModalFC<T> extends React.FC<T> {
  alert?: typeof AModal.alert;
  prompt?: typeof AModal.prompt;
  operation?: typeof AModal.operation;
}

export const Modal: ModalFC<ModalPropsType<React.CSSProperties>> = (props) => {
  const { ext, onClose, onAnimationEnd, ...reset } = props;
  const log = useTracker(Modal.displayName, {
    ext,
  });
  return (
    <AModal
      onClose={(...e) => {
        onClose && onClose(...e);
        log('onClose');
      }}
      onAnimationEnd={(...e) => {
        onAnimationEnd && onAnimationEnd(...e);
        log('onAnimationEnd');
      }}
      {...reset}
    ></AModal>
  );
};

Modal.displayName = 'Modal';
Modal.alert = AModal.alert;
Modal.prompt = AModal.prompt;
Modal.operation = AModal.operation;
export default withError(Modal);
