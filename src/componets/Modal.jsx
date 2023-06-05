import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { FaEdit } from 'react-icons/fa';
import AddTask from '../pages/AddTask';

const TaskUpdateModal = ({ task, reload, setReload }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        Modal.setAppElement('#root');
    }, []);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <button
                title="Update task"
                className="ml-auto cursor-pointer text-blue-600"
                onClick={openModal}
            >
                <FaEdit />
            </button>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <div>
                    <button className="bg-gray-600 text-white font-bold py-2 px-4 rounded w-[50px] ml-auto" onClick={closeModal}>X</button>
                    <AddTask task={task} closeModal={closeModal} setReload={setReload} reload={reload} />
                </div>

            </Modal>
        </div>
    );
};

export default TaskUpdateModal;
