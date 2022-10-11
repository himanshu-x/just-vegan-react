import React, { useState } from "react";
import BaseModal from "../base-components/base-modal/BaseModal";
import BaseButton from "../base-components/base-button/BaseButton";


const withConfirm = (Component, {
    headerText, bodyText
}) => (props) => {
    const { onConfirm, children, ...restProps } = props;
    const [openModal, setOpenModal] = useState(false);

    return (
        <React.Fragment>
            <Component  {...restProps} onClick={() => { setOpenModal(true) }}>
                {children}
            </Component>
            <BaseModal isShown={openModal} headerText={headerText} bodyText={bodyText}>
                <BaseButton variant="secondary" onClick={() => setOpenModal(false)} >Cancel</BaseButton>
                {
                    onConfirm && <BaseButton variant="secondary" onClick={() => {
                        setOpenModal(false)
                        onConfirm()
                    }} >Ok</BaseButton>
                }
            </BaseModal>
        </React.Fragment >
    )
}

export default withConfirm