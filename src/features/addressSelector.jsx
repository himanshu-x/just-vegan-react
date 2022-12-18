import React, { useState } from "react"
import BaseButton from "../components/base-components/base-button/BaseButton";
import BaseModal from "../components/base-components/base-modal/BaseModal";
import { useSelector, useDispatch } from 'react-redux'
import { addressHandle } from "./userSlice";
import userService from "../services/userService";

export default function AddressSelector() {
    const [openModal, setOpenModal] = useState(false);
    const user = useSelector((state) => state.userStore.user);
    const dispatch = useDispatch()
    const userId = user._id

    function AddressSelector(addressId) {
        userService.setSelectAddress(userId, addressId).then((dataId) => {
            return dataId
        })
    }


    return (
        <>
            <BaseButton variant="primary" onClick={() => setOpenModal(!openModal)}><p>Deliver to- {user && user.defaultAddress && user.defaultAddress.name}</p>
                <p>{user && user.defaultAddress && user.defaultAddress.city},{user && user.defaultAddress && user.defaultAddress.pincode}</p> </BaseButton>

            {
                !openModal ? "" : <BaseModal isShown={openModal} headerText="Addresses" bodyText="Please select your Address">
                    <div className="flex flex-col gap-2">
                        <div className="grid grid-cols-2 gap-1">
                            {
                                user && user.addresses && user.addresses.map((address, index) => {
                                    return (

                                        <div key={"address" + index} onClick={() => {
                                            AddressSelector(address._id)
                                            dispatch(addressHandle(address));
                                            setOpenModal(false)
                                        }
                                        } className="border rounded-md border-pink-600 px-4 py-2">
                                            <p><span className="font-semibold">Deliver to -</span> <b>{address.name},</b></p>
                                            <p>{address.addressLine},{address.landmark}</p>
                                            <p>{address.city},{address.state},{address.pincode}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <BaseButton variant="secondary" onClick={() => setOpenModal(false)} >Cancel</BaseButton>
                    </div>
                </BaseModal>
            }

        </>




    )
}