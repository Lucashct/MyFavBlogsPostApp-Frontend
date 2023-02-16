import './Links.css';
import 'react-toastify/dist/ReactToastify.css'
import { CiEdit } from 'react-icons/ci';
import { BiTrashAlt } from 'react-icons/bi';
import { EditLinkModal } from '../EditLinkModal/EditLinkModal'
import { RemoveLinkModal } from '../RemoveLinkModal/RemoveLinkModal';
import { toast, ToastContainer } from 'react-toastify';
import { useState } from "react";

export function Links(props) {
  const [selectedLink, setSelectedLink] = useState({});
  const [imgRecovered, setImageRecovered] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenRemoveModal, setIsOpenRemoveModal] = useState(false);
  const [selectLinkToEdit, setSelectedLinkToEdit] = useState({})
  const [selectLinkToRemove, setSelectedLinkToRemove] = useState({})

  const notify = (action) => {
    switch (action) {
      case 'EDIT':
        toast.success('Link editado com sucesso', {
          position: toast.POSITION.TOP_RIGHT, autoClose: 400
        })
        break;
      case 'REMOVE':
        toast.success('Link removido com sucesso', {
          position: toast.POSITION.TOP_RIGHT, autoClose: 4000
        })
        break;
      default:
        break;
    }
    
  }
  
  function selectLink(link) {
    setSelectedLink(link)
    setImageRecovered(true);
  }

  function openEditModal(link) {
    setSelectedLinkToEdit(link)
    setIsOpenModal(true);
  }

  function closeEditModal(action) {
    if(action) {notify('EDIT');}
    setIsOpenModal(false);
    props.handleGetLinkList();
  }

  function openRemoveModal(link) {
    setSelectedLinkToRemove(link)
    setIsOpenRemoveModal(true);
  }

  function closeRemoveModal(action) {
    if(action) { notify('REMOVE'); }
    setIsOpenRemoveModal(false);
    props.handleGetLinkList();
  }

  function edittingSelectLinkToEdit(value, propoerty) {
    switch (propoerty) {
      case 'LABEL':
        setSelectedLinkToEdit(prevState => {
          return { ...prevState, label: value }
        });
        break;
      case 'LINK':
        setSelectedLinkToEdit(prevState => {
          return { ...prevState, link: value}
        });
        break;
      case 'IMG_SRC':
        setSelectedLinkToEdit(prevState => {
          return { ...prevState, imgSrc: value}
        });
        break;
      default:
    }
  }

  return(
    <div className='container-body'>
      <ToastContainer />
      <h1>My Favorites Blogsposts App</h1>
      <div className='container-main'>
        <ul className='list'>
          { props.linksList.map(item => {
            return <li onDoubleClick={() => selectLink(item)} className="list-item" key={item.id}>
              {`${item.label.substr(0, 30)}...`}
              <div className='container-buttons'>
                <button onClick={() => openEditModal(item)} className='button-edit'><CiEdit/></button>
                <button onClick={() => openRemoveModal(item)} className='button-remove'><BiTrashAlt/></button>
              </div>
            </li>
          }) }
        </ul>
        
        <div className='resume-link'>
          {imgRecovered ? <div className='container-resume'>
            <img src={selectedLink.imgSrc} className='image-link' alt='post-banner' />
            <div className='infos-resume'>
              <h3>{selectedLink.categorie}</h3>
              <p>{selectedLink.label}</p>
              <a href={selectedLink.link} target='_blank' rel='noreferrer'>Click para acessar o Post</a>
              <span style={{ fontSize: 12, marginLeft: 5 }}>{`Fonte: ${selectedLink.blog}`}</span>
            </div>
          </div> : <p className='tip-resume-link'>Dê um duplo click na lista para selecionar um link</p>} 
        </div>
      </div>

      <EditLinkModal
        linkData={selectLinkToEdit}
        isOpenModal={isOpenModal}
        onCloseModal={closeEditModal}
        editLink={edittingSelectLinkToEdit}
      />

      <RemoveLinkModal
        linkData={selectLinkToRemove}
        isOpenModal={isOpenRemoveModal}
        onCloseModal={closeRemoveModal}
      />
    </div>
  );
}