import React from 'react'
import Popup from 'reactjs-popup'

const ViewTask = ({ currTask }) => {
    return (
        <Popup
            trigger={<button className="task-details-btn" > View </button>}
            modal
            nested
        >
            {close => (
                <div className="task-popup-modal">
                    <button className="task-popup-close" onClick={close}>
                        &times;
                    </button>
                    <div className="task-popup-header"> Task Details </div>
                    <div className="task-popup-content">
                        <p>
                            <strong>Task Name:</strong> {currTask.task.taskName}
                        </p>
                        <p>
                            <strong>Priority:</strong> {currTask.task.priority}
                        </p>
                        <p>
                            <strong>Deadline:</strong> {currTask.task.deadline}
                        </p>
                        <p>
                            <strong>Description:</strong> {currTask.task.description}
                        </p>
                        <p>
                            <strong>Status:</strong> {currTask.done ? "Completed" : "Pending"}
                        </p>
                    </div>
                    <div className="task-popup-actions">
                        <button className="task-popup-btn-close" onClick={close}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </Popup>
    )
}

export default ViewTask