import { useDispatch, useSelector } from "react-redux";
import { addThirdPage } from "../slices/formDataSlice";

const ThirdPage = ({ page, setPage }) => {
    const defaultData = useSelector(state => state.formData)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const maritalStatus = form.maritalStatus.value
        const phone = form.phone.value
        dispatch(addThirdPage({ maritalStatus, phone }))
        alert('ballot created successfully')
        setPage(0)
    }


    return (
        <div className="h-full w-full bg-gray-200">
            <form onSubmit={handleSubmit} className="h-full flex justify-center items-center px-20 flex-col gap-4">
                <input required name="maritalStatus" className="w-full rounded-lg h-12 px-3" type="text" placeholder="maritalStatus" defaultValue={defaultData?.maritalStatus} />
                <input required name="phone" className="w-full rounded-lg h-12 px-3" type="number" placeholder="phone" defaultValue={defaultData?.phone} />
                <div className="flex justify-between w-full">
                    <button onClick={() => setPage(1)} type="button" className="bg-white px-3 py-1" disabled={page === 0}>Pre</button>
                    <button className="bg-white px-3 py-1" type="submit">Submit</button>
                </div>
            </form>
            <div className="flex justify-between">

            </div>
        </div>
    );
};

export default ThirdPage;