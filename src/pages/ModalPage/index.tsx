import { BasicModal } from '@/components/CommentModal';
import Input from '@/components/Input';
import { MODAL } from '@/const/ModalMessage';

const ModalPage = () => {
  return (
    <div>
      <BasicModal
        title={MODAL.CONFIRM_BATTLE.title}
        content={MODAL.CONFIRM_BATTLE.content}
        modalType="confirm"
      />
      <BasicModal
        title={MODAL.CONFIRM_COMMENT.title}
        content={MODAL.CONFIRM_COMMENT.content}
        modalType="confirm"
      />
      <BasicModal
        title={MODAL.ALERT_BATTLE.title}
        content={MODAL.ALERT_BATTLE.content}
        modalType="alert"
      />
      <BasicModal
        title={MODAL.DELETE_BATTLE.title}
        content={MODAL.DELETE_BATTLE.content}
        modalType="delete"
      />
      <BasicModal
        title={MODAL.DELETE_COMMENT.title}
        content={MODAL.DELETE_COMMENT.content}
        modalType="delete"
      />
      <div>
        <Input size="title" />
        <Input size="content" />
      </div>
    </div>
  );
};

export default ModalPage;
