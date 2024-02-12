import closeIcon from '../../images/icons/close.svg';

export function Modal({closeModal, header, content}) {

  return <div className="modal">
    <header>
      <h2>{header}</h2>
      <button className="little-close-btn">
        <img src={closeIcon}
             width={24}
             alt="sss"
             onClick={closeModal}/>
      </button>
    </header>
    {content}

  </div>
}
