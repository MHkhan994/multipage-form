import { useDispatch, useSelector } from "react-redux";
import { addFirstPage } from "../slices/formDataSlice";
import { useEffect } from "react";
import { json } from "react-router-dom";

const FirstPage = ({ setPage, page }) => {

    const defaultData = useSelector(state => state.formData)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const name = form.name.value
        const password = form.password.value

        dispatch(addFirstPage({ email, name, password }))
        setPage(1)
    }


    return (
        <div className="h-full w-full bg-gray-200">
            <form onSubmit={handleSubmit} className="h-full flex justify-center items-center px-20 flex-col gap-4">
                <input required name="name" className="w-full rounded-lg h-12 px-3" type="text" placeholder="name" defaultValue={defaultData?.name} />
                <input required name="email" className="w-full rounded-lg h-12 px-3" type="email" placeholder="email" defaultValue={defaultData?.email} />
                <input required name="password" className="w-full rounded-lg h-12 px-3" type="number" placeholder="number" defaultValue={defaultData?.password} />
                <div className="flex justify-between w-full">
                    <button type="button" className="bg-white px-3 py-1" disabled={page === 0}>Pre</button>
                    <button className="bg-white px-3 py-1" type="submit">Next</button>
                </div>
            </form>
            <div className="flex justify-between">

            </div>
        </div>
    );
};

export default FirstPage;