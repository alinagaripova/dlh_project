import React, { useContext } from 'react';
import ModalContext from '../../../../context/Modal/Context';
import Button from '../../../Button';
import './Info.scss';

function Info() {
  const { displayModal } = useContext(ModalContext);

  return (
    <div className="info d-flex flex-column justify-content-center">
      <div className="small-title mb-4 fw-normal">
        your trust in DLH is much appreciated!
      </div>
      <div className="mb-4">
        our representative already received your application and will contact you soon
      </div>
      <Button className="" text="return to homepage" onClick={() => displayModal("request")} />
    </div>
  );
}

export default Info;
