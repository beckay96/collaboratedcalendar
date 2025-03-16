
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CalendarTask, TaskStatus } from '@/types/calendar';
import { CheckCircle } from 'lucide-react';
import { useCalendar } from '@/context/CalendarContext';

interface TaskDetailViewProps {
  task: CalendarTask;
  onClose: () => void;
}

const TaskDetailView: React.FC<TaskDetailViewProps> = ({ task, onClose }) => {
  const { updateTaskStatus } = useCalendar();
  const [loading, setLoading] = useState(false);

  const markTaskComplete = async () => {
    if (!task.id) return;
    
    setLoading(true);
    try {
      await updateTaskStatus(task.id, 'Complete');
      onClose();
    } catch (error) {
      console.error('Error updating task:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const updateTaskToStatus = async (status: TaskStatus) => {
    if (!task.id) return;
    
    setLoading(true);
    try {
      await updateTaskStatus(task.id, status);
      onClose();
    } catch (error) {
      console.error('Error updating task:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center mt-4">
        <span className="text-sm mr-2">Status:</span>
        <span className={`text-sm px-2 py-0.5 rounded-full ${
          task.status === 'Complete' ? 'bg-green-500/80 text-white' :
          task.status === 'In Progress' ? 'bg-blue-500/80 text-white' :
          task.status === 'Overdue' ? 'bg-red-500/80 text-white' :
          'bg-gray-500/80 text-white'
        }`}>
          {task.status}
        </span>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {task.status !== 'Complete' && (
          <Button 
            onClick={markTaskComplete}
            disabled={loading}
            className="bg-green-600 hover:bg-green-700"
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Mark Complete
          </Button>
        )}
        
        <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
          <Button 
            onClick={() => updateTaskToStatus('To Do')}
            disabled={loading || task.status === 'To Do'}
            variant={task.status === 'To Do' ? 'default' : 'outline'}
            size="sm"
          >
            To Do
          </Button>
          <Button 
            onClick={() => updateTaskToStatus('In Progress')}
            disabled={loading || task.status === 'In Progress'}
            variant={task.status === 'In Progress' ? 'default' : 'outline'}
            size="sm"
            className={task.status === 'In Progress' ? 'bg-blue-600 hover:bg-blue-700' : ''}
          >
            In Progress
          </Button>
          <Button 
            onClick={() => updateTaskToStatus('Overdue')}
            disabled={loading || task.status === 'Overdue'}
            variant={task.status === 'Overdue' ? 'default' : 'outline'}
            size="sm"
            className={task.status === 'Overdue' ? 'bg-red-600 hover:bg-red-700' : ''}
          >
            Overdue
          </Button>
        </div>
      </div>
    </>
  );
};

export default TaskDetailView;
