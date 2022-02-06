import React from "react";
import { Modal, Button } from 'antd';


class CustomModal extends React.Component {
  
  render() {
    return (
        <Modal
          centered
          title={this.props.title}
          visible={this.props.isModalOpen}
          onCancel={this.props.closeModal}
          footer={[
            <Button key="back" onClick={this.props.closeModal}>
              Return
            </Button>
          ]}
        >
          {this.props.description}
        </Modal>
    );
  }
}

export default CustomModal;
