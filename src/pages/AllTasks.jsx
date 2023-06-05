import { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import { FaTrashAlt } from 'react-icons/fa';
import Swal from "sweetalert2";
import TaskUpdateModal from "../componets/Modal";
const AllTasks = () => {
    const [instance] = useAxios();
    const [tasks, setTasks] = useState([]);
    const [reload, setReload] = useState(false)

    useEffect(() => {
        instance.get("/tasks")
            .then((res) => {
                console.log(res.data);
                setTasks(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [reload]);
    const updateStatus = (id, text) => {
        instance.patch(`/status-update/${id}`, { text })
            .then((res) => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    setReload(!reload)
                    Swal.fire(
                        'Status updated!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                instance.delete(`/tasks/${id}`)
                    .then((res) => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            setReload(!reload)
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        })
    }

    return (
        <div className="container mx-auto">
            <div className="relative overflow-x-auto min-w-[600px]">
                <h1 className="text-xl md:text-3xl font-bold text-center my-3 md:my-5">All tasks</h1>
                <div>
                    <ul className="flex justify-between items-center text-center font-bold md:text-lg border-2 border-gray-300 p-3 md:p-4">
                        <li className="w-[5%]">#</li>
                        <li className="w-[25%]">Title</li>
                        <li className="w-[40%] ">Description</li>
                        <li className="w-[10%]">Status</li>
                        <li className="w-[17%]">Action</li>
                    </ul>
                    <div>
                        {
                            tasks.map((task, index) => {
                                const { _id, title, description, status } = task;
                                return (
                                    <div key={task._id} className="flex justify-between items-center border-x border-b border-gray-300 px-4 py-3">
                                        <div className="w-[5%]">{index + 1}</div>
                                        <div className="w-[25%]">
                                            {
                                                title.length > 150
                                                    ? title.substr(0,150) + '... '
                                                    : title
                                            }
                                        </div>
                                        <div className="w-[40%]">{
                                            description.length > 200
                                                ? description.substr(0,200) + '... '
                                                : description
                                        } </div>
                                        <div title='Mark as Completed' onClick={() => updateStatus(_id, 'Completed')} className="w-[10%] text-center cursor-pointer">{status}</div>
                                        <div className=" flex justify-evenly items-center text-center w-[17%]">
                                            <TaskUpdateModal task={task} setReload={setReload} reload={reload}/>
                                            <span onClick={() => handleDelete(_id)} title="Delete Task" className="cursor-pointer text-red-600"><FaTrashAlt /></span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllTasks;

