import PopupWithForm from '../popupwithform/PopupWithForm';

const TooltipPopup = (props) => {
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      modal={props.openModal}
      title={'Регистрация успешно завершена'}
      tooltip={true}
    />
  );
};
export default TooltipPopup;
