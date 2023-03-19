import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

// import { newss } from '../shared under/ListOfnewss';
// Custom hook for toggling theme mode
function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);
  const toggleValue = () => setValue(!value);
  return [value, toggleValue];
}

export default function NewsPresentation({newss}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectednews, setSelectednews] = useState(null);
  const [isDarkMode, toggleDarkMode] = useToggle(false);

  function handleOpenModal(news) {
    setSelectednews(news);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setSelectednews(null);
    setIsModalOpen(false);
  }

  return (
    <div className={`${isDarkMode ? 'bg-dark text-black' : 'text-white'}`}>
      
    <div className="container">
    <div className="row">
        {newss.map((news) => (
          <div key={news.id} className="col-md-4 col-sm-6 mb-5">  
            <div className="card h-100 shadow">
              <img className="card-img-top" src={news.img} alt={news.title} />
              <div className="card-body">
                {/* <h5 className="card-title text-center mb-3">{news.title}</h5>
                <p className="card-text text-center font-weight-bold">{news.nation}</p>
                <p className="card-text text-center">{news.year}</p> */}
                <div className="d-flex justify-content-center mt-3">
                <Link to={`detail/${news.id}`}>
                  <button className="btn btn-outline-dark w-100">Detail</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal} style={{ content: { width: 500, height: 500 } }} >
        {selectednews && (
          <div>
            
            <h2>{selectednews.title}</h2>
            <p>{selectednews.img}</p>
            <p>{selectednews.nation}</p>
            <p>{selectednews.year}</p>
            <p>{selectednews.desc}</p>
            <p>{selectednews.clip}</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        )}
      </Modal>
      
      <div className="d-flex justify-content-end mt-3">
        <button className="btn btn-danger " onClick={toggleDarkMode}>
          {isDarkMode ? 'Light mode' : 'Dark mode'}
        </button>
      </div>
    </div>
    </div>
  );
}
