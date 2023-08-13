import { useDispatch, useSelector } from "react-redux";
import { addFirstPage, addSecondPage } from "../slices/formDataSlice";
import { useEffect } from "react";


const SecondPage = ({ setPage, page }) => {
    const defaultData = useSelector(state => state.formData)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const address = form.address.value
        const age = form.age.value

        dispatch(addSecondPage({ address, age }))
        setPage(2)
    }


    return (
        <div className="h-full w-full bg-gray-200">
            <form onSubmit={handleSubmit} className="h-full flex justify-center items-center px-20 flex-col gap-4">
                <input required name="address" className="w-full rounded-lg h-12 px-3" type="text" placeholder="address" defaultValue={defaultData?.address} />
                <input required name="age" className="w-full rounded-lg h-12 px-3" type="number" placeholder="age" defaultValue={defaultData?.age} />
                <div className="flex justify-between w-full">
                    <button onClick={() => setPage(0)} type="button" className="bg-white px-3 py-1" disabled={page === 0}>Pre</button>
                    <button className="bg-white px-3 py-1" type="submit">Next</button>
                </div>
            </form>
            <div className="flex justify-between">

            </div>
        </div>
    );
};

export default SecondPage;