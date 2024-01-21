import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

/**
 * shadcn/ui에서 제공하는 Modal을 컴포넌트화 시켰습니다.

 * // 사용 예시:
 * <AlertCommentModal />
 */

// 제목하고 내용을 prop로 받을수 있도록
// 모달 타입이라는 prop를 주고 modalType : 'confirm' | 'alert'

// Props 타입을 정의합니다.
type AlertModalProps = {
  title: string; // 제목을 위한 prop
  content: string; // 내용을 위한 prop
  modalType: 'confirm' | 'alert' | 'delete'; // 모달 타입을 위한 prop
};

export function AlertCommentModal({
  title,
  content,
  modalType,
}: AlertModalProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">{title}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle></AlertDialogTitle>
          <AlertDialogDescription>{content}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {modalType === 'confirm' && (
            <>
              <AlertDialogCancel>이동</AlertDialogCancel>
              <AlertDialogAction>취소</AlertDialogAction>
            </>
          )}
          {modalType === 'delete' && (
            <>
              <AlertDialogCancel>취소</AlertDialogCancel>
              <AlertDialogAction>삭제</AlertDialogAction>
            </>
          )}
          {modalType === 'alert' && <AlertDialogAction>확인</AlertDialogAction>}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
