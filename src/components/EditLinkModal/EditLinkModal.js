import './EditLinkModal.css'

import Modal from 'react-modal'
import axios from 'axios';
import { EDIT_LINK } from '../../utils/urls'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    width: '30%',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
};

export function EditLinkModal(props) {
  
  async function handleEditLink() {
    await axios.post(EDIT_LINK, props.linkData)
    .then(response => {
      alert(response.data.message);
    });

    props.onCloseModal(true);
  }

  return(
    <div>
      <Modal
        isOpen={props.isOpenModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <h3 style={{ textAlign:'center' }}>Editando link</h3>
        <form className='formulario'>
          <fieldset>
            <label htmlFor='label '>Label</label>
            <input id='label' type='text' placeholder='Label' value={props.linkData.label} onChange={
              e => { props.editLink(e.target.value, 'LABEL') }
            }/>
          </fieldset>
          <fieldset>
            <label htmlFor='label '>Link</label>
            <input type='text' placeholder='Link' value={props.linkData.link} onChange={
              e => { props.editLink(e.target.value, 'LINK') }
            }/>
          </fieldset>
          <fieldset>
            <label htmlFor='label '>Link da Imagem</label>
            <input type='text' placeholder='Link da Imagem' value={props.linkData.imgSrc} onChange={
              e => { props.editLink(e.target.value, 'IMG_SRC') }
            }/>
          </fieldset>
        </form>

        <div className='footer'>
          <div className='footer-to-left'>
            <button onClick={() => props.onCloseModal()}>Cancel</button>
          </div>
          <div className='footer-to-right'>
            <button onClick={() => handleEditLink()}>Gravar</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}