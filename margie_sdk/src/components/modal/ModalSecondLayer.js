import React, { useState } from 'react';
import { Modal, Button } from 'antd';

export const ModalSecondLayer = () => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Open Modal
      </Button>
      <Modal
        title="Modal 1000px width"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <p>test</p>
      </Modal>
    </>
  );
};

//ReactDOM.render(<App />, mountNode);