import React from "react";
import BaseInput from "../form-elements/BaseInput";
import { useForm } from "react-hook-form";
import BaseButton from "../base-button/BaseButton";
import BaseIcon from "../base-icon/BaseIcon";

export default function BaseSearch(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { onSearch, labelName } = props


    const onSubmit = (data) => {
        onSearch(data.searchText)
    };

    return (
        <form action="" onSubmit={handleSubmit(onSubmit)} >
            {/* <div class="flex justify-center">
                <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
                    <BaseInput
                        id="dishName"
                        type="search"
                        name="searchText"
                        labelName={labelName}
                        placeholder="Search"
                        register={register}
                        errors={errors}
                        aria-label="Search"
                        aria-describedby="button-addon2"
                        validationRules={{
                            required: true,
                        }} />
                    <BaseButton type="submit" variant="primary" className=" w-12">
                        <BaseIcon iconName="search" ></BaseIcon>
                    </BaseButton>
                </div>
            </div> */}
            <div className="flex justify-center">
                <div className="input-group relative flex flex-wrap items-stretch w-full md:w-[500px] mb-4 ">
                    <input name="searchText" type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal
                     text-green-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                      focus:text-green-700 focus:bg-white focus:border-green-600 focus:outline-none"
                        placeholder={labelName} aria-label="Search" aria-describedby="button-addon2" {...register("searchText", { required: true, })} />
                    <button className="btn px-6 py-2.5 bg-green-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md
                     hover:bg-green-700 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                        type="submit" id="button-addon2">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search"
                            className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                        </svg>
                    </button>
                </div>

            </div>
        </form >
    )
}