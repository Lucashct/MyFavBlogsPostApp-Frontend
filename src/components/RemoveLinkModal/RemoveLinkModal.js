import './RemoveLinkModal'
import Modal from 'react-modal'
import axios from 'axios'
import { REMOVE_LINK } from '../../utils/urls'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    width: '25%',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
}

export function RemoveLinkModal(props) {
  function removeLink() {
    axios.post(REMOVE_LINK, props.linkData)
    .then(() => {
      props.onCloseModal(true);
    });
  }

  return(
    <div>
      <Modal
        style={customStyles}
        isOpen={props.isOpenModal}
        ariaHideApp={false}
      >
        <h3 style={{ textAlign:'center' }}>Remover Link</h3>
        <div className='advice-container'>
          <p>Tem certeza que deseja remover este link?</p>
        </div>
        <div className='footer'>
          <div className='footer-to-left'>
            <button onClick={() => props.onCloseModal()}>Cancelar</button>
          </div>
          <div className='footer-to-right'>
            <button onClick={() => removeLink()}>Confirmar</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}