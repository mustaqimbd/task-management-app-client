import { Formik } from 'formik';
import useAxios from '../Hooks/useAxios';
import { useState } from 'react';
import Swal from 'sweetalert2';

const AddTask = ({ task, closeModal, reload, setReload }) => {
    const [instance] = useAxios();
    const [taskData, setTaskData] = useState({});

    const handleUpdate = (id, text) => {
        console.log(id, text);
        instance.patch(`/update-task/${id}`, text)
            .then((res) => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    setReload(!reload)
                    Swal.fire(
                        'Successfully updated!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
                setReload(!reload)
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <h1 className='text-3xl font-bold my-5 text-center'>Add A Task</h1>
            <Formik
                initialValues={{
                    title: task ? task.title : '',
                    description: task ? task.description : '',
                    status: task ? task.status : 'Incomplete',
                }}
                validate={(values) => {
                    const errors = {};
                    if (!values.title) {
                        errors.title = 'Title is required !';
                    }
                    if (!values.description) {
                        errors.description = 'Description is required !';
                    }
                    if (!values.status) {
                        errors.status = 'Status is required !';
                    }
                    return errors;
                }}
                onSubmit={(values) => {
                    console.log(values);
                    instance
                        .post('/add-task', values)
                        .then((res) => {
                            console.log(res.data);
                            if (res.data.insertedId) {
                                Swal.fire(
                                    'Successfully Added!',
                                    'Your task has been added.',
                                    'success'
                                )
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit} className='w-[80%] md:w-[60%] lg:w-[40%]  mx-auto flex flex-col gap-5'>
                        <div>
                            <label className='text-2xl font-bold' htmlFor="title">Title</label>
                            <input
                                className='border border-gray-300 p-3  rounded-md block w-full mt-3'
                                type="text"
                                name="title"
                                onChange={handleChange}
                                value={values.title}
                            />
                            <span className='text-red-600'>{errors.title && touched.title && errors.title}</span>
                        </div>
                        <div>
                            <label className='text-lg font-bold' htmlFor="description">Description</label>
                            <textarea
                                className='border border-gray-300 block mt-3 w-full rounded-md'
                                name="description"
                                onChange={handleChange}
                                value={values.description}
                                cols="30"
                                rows="5"
                            ></textarea>
                            <span className='text-red-600'> {errors.description && touched.description && errors.description}</span>
                        </div>
                        <div>
                            <label className='text-lg font-bold mb-4' htmlFor="status">Status</label>
                            <input
                                className='border border-gray-300 p-3  rounded-md block w-full block mt-3'
                                type="text"
                                name="status"
                                readOnly
                                onChange={handleChange}
                                value={values.status}
                            />
                            <span className='text-red-600'> {errors.status && touched.status && errors.status}</span>
                        </div>
                        {
                            task ?
                                <span onClick={closeModal} className='w-28 h-10 mx-auto' >
                                    <button onClick={() => { handleUpdate(task._id, values) }} type='button' className='bg-gray-600 rounded-md w-28 h-10 text-white font-semibold'>
                                        Update
                                    </button>
                                </span>
                                : <button className='bg-gray-600 rounded-md w-28 h-10 text-white font-semibold mx-auto' type="submit">
                                    Submit
                                </button>
                        }
                    </form>
                )}
            </Formik>
        </div >
    );
};

export default AddTask;
