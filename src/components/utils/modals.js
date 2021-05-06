import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Modal} from 'react-bootstrap';
import AddProduct from '../products/addProductForm';

class Modals extends Component{

    setModalAsToType = (modalType)=>{
        if(modalType==="ADD_PRODUCT_FORM_MODAL"){
            return(
                <AddProduct />
            );
        }
        else{
            return(
                <h1>Nothing</h1>
            );
        }
    }

    render(){
        return(
            <React.Fragment>
                <Modal
                {...this.props}
                className="modal-main"
                dialogClassName="modal-90w"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal Title
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                   {this.setModalAsToType(this.props.modalType)}
                </Modal.Body>
                <Modal.Footer>
                    
                </Modal.Footer>
                </Modal>
            </React.Fragment>
        )
    }

}

const mapStateToProps = (state)=>{

    return ({
        modalType: state.modals.modalType,
    })
}


export default connect(mapStateToProps)(Modals) 