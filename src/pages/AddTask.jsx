import { Formik } from 'formik';

const AddTask = () => (
    <div>
        <h1 className='text-3xl font-bold my-5 text-center'>Add A Task</h1>
        <Formik
            initialValues={{ title: '', description: '', status: 'Pending' }}
            validate={values => {
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
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,
            }) => (
                <form onSubmit={handleSubmit} className='w-[40%]  mx-auto flex flex-col gap-5'>
                    <div>
                        <label className='text-2xl font-bold' htmlFor="title">Title</label>
                        <input className='border border-gray-300 p-3  rounded-md block w-full mt-3'
                            type="text"
                            name="title"
                            onChange={handleChange}

                            value={values.title}
                        />
                        <span className='text-red-600'>{errors.title && touched.title && errors.title}</span>
                    </div>
                    <div>
                        <label className='text-lg font-bold' htmlFor="description">Description</label>
                        <textarea className='border border-gray-300 block mt-3 w-full rounded-md'
                            name="description"
                            onChange={handleChange}

                            value={values.description}
                            cols="30" rows="5"></textarea>
                        <span className='text-red-600'> {errors.description && touched.description && errors.description}</span>
                    </div>
                    <div>
                        <label className='text-lg font-bold mb-4' htmlFor="status">Status</label>
                        <input className='border border-gray-300 p-3  rounded-md block w-full block mt-3'
                            type="text"
                            name="status"
                            onChange={handleChange}
                            value={values.status}
                        />
                        <span className='text-red-600'> {errors.status && touched.status && errors.status}</span>
                    </div>
                    <button className='bg-gray-600 rounded-md w-28 h-10 text-white font-semibold mx-auto' type="submit">
                        Submit
                    </button>
                </form>
            )}
        </Formik>
    </div>
);

export default AddTask;